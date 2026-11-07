# Cross-Validation for Autoregressive Time Series: Replication and Extensions

A replication of **Bergmeir, Hyndman & Koo (2018)**, *"A note on the validity of cross-validation for evaluating autoregressive time series prediction"* (Computational Statistics & Data Analysis, 120, 70–83), extended with three ideas of our own and an interactive web app (**CHRONOS-CV**) for exploring every result.

**Course project for DA 3041: Applied Time Series Analysis (Group 6)**  
**Live app:** <https://da3041-time-series-cv.netlify.app>

> **Core idea of the paper:** for purely autoregressive models, ordinary K-fold cross-validation is valid as long as the model residuals are uncorrelated. Blocked or "gap" CV is only needed when the model is misspecified.

---

## Contents

- [What's in this repo](#whats-in-this-repo)
- [The interactive app](#the-interactive-app)
- [What we did](#what-we-did)
- [Key results](#key-results)
- [Reproducing the analysis](#reproducing-the-analysis)
- [Limitations (please read)](#limitations-please-read)
- [Reference](#reference)
- [Team](#team)

## What's in this repo

```
.
├── app/                  # CHRONOS-CV interactive web app (HTML + JS + CSS)
│   ├── index.html
│   ├── app.js
│   ├── style.css
│   ├── run_server.py     # optional local server on port 8000
│   └── launch_app.bat    # Windows shortcut to open the app
├── rmd/analysis.Rmd     # full R Markdown analysis (tables, extensions, plots)
├── scripts/complete_code.R  # plain-R version of the experiments
├── csv/                  # all result tables produced by the R code (18 files)
├── images/               # all figures produced by the R code (9 files)
├── atsa_paper.pdf        # the paper being replicated
├── index.html            # redirects to app/index.html
└── launch_app.bat        # Windows shortcut to open the app
```

(`complete_code.R` in the repo root is identical to `scripts/complete_code.R`.)

## The interactive app

CHRONOS-CV has seven tabs:

| Tab | What you can do |
|---|---|
| **Studio** | Visualise how 5-fold CV, LOOCV, blocked/gap CV and OOS partition and purge a series |
| **Linear** | Explore our reproduction of the paper's Table 1 (AR, MA and seasonal AR processes) |
| **Neural** | Explore our reproduction of Table 2 (non-linear autoregressive neural networks) |
| **Sunspots** | Yearly sunspots (1700–1988) and the 1,560-model grid search |
| **Whiteness** | Test residual whiteness and see causal pre-whitening recover it |
| **Arena** | Multi-horizon (h = 1…6) comparison of validation methods |
| **Joint** | The continuous joint selection criterion J<sub>λ</sub> |

**Run it**

- Live: <https://da3041-time-series-cv.netlify.app>
- Easiest locally: open `index.html` in a browser (on Windows, double-click `launch_app.bat`).
- Or serve it locally: `python app/run_server.py` and visit <http://localhost:8000>.

The app loads Tailwind, Chart.js, Lucide, KaTeX and Google Fonts from CDNs, so it needs an **internet connection** the first time.

## What we did

**1. Replication.** We reproduce the paper's three experiments:

- **Table 1:** linear AR(3), MA(1) and seasonal AR(12) processes (series length 200), candidate models AR(1)–AR(5), comparing 5-fold CV, LOOCV, non-dependent CV (nonDepCV) and an OOS holdout.
- **Table 2:** non-linear autoregressive neural networks (`nnet`) with resumable checkpointed runs.
- **Table 3:** yearly sunspots, with a grid of 1,560 neural network configurations.

**2. Extensions (ours, beyond the paper).**

1. **Pre-Whitened CV (PW-CV):** instead of discarding rows near each test fold (gap-CV), keep all rows and filter the residuals so they are approximately uncorrelated.
2. **Multi-horizon evaluation:** h = 1…6 with recursive vs. direct forecasts, compared across 5-fold CV, gap-CV, PW-CV, rolling-origin and static OOS.
3. **Joint selection criterion J<sub>λ</sub>:** a continuous criterion that blends CV error with a residual-whiteness penalty.

## Key results

Numbers below come straight from `csv/`.

**Simulated ARMA process, h = 1 (`ext1_comparison_table.csv`, 20 trials)**

| Method | RMSE | Data retained |
|---|---|---|
| Ordinary 5-fold CV | 1.0506 | 100% |
| Gap-CV (gap = 3) | 1.0624 | 26.6% |
| PW-CV | 1.0411 | 100% |

**Sunspots, MAPAE % by horizon (`ext2_sunspot_partB_summary_mapae.csv`)**

| Horizon | 5-fold CV | Gap-CV | PW-CV | Rolling-origin | Static OOS |
|---|---|---|---|---|---|
| h = 1 | 9.46 | 9.46 | **8.02** | 16.02 | 8.93 |
| h = 3 | 10.10 | **9.53** | 11.50 | 12.06 | 13.74 |
| h = 6 | 9.89 | 108.92 | 12.15 | 16.27 | **6.18** |

Takeaway: PW-CV keeps all the data and does well at h = 1, but **no method wins at every horizon**.

## Reproducing the analysis

**Requirements:** R (≥ 4.0) with the `nnet` package; `parallel` ships with base R. To knit the report you also need `rmarkdown` and `knitr` (and a LaTeX install for PDF output).

```r
install.packages(c("nnet", "rmarkdown", "knitr"))
```

**Run it**

```r
# from the repo root
rmarkdown::render("rmd/analysis.Rmd", output_format = "html_document")
# or run the plain script
source("scripts/complete_code.R")
```

- Tables are written to `csv/` and figures to `images/`.
- The neural-network runs are chunked and write checkpoints to a `ckpt/` folder (created on first run) so interrupted runs can resume.
- Seeds are fixed in the code (e.g. `set.seed(123)`, `set.seed(42)`), but results can still shift slightly between R versions and platforms.

## Limitations

- **Trial counts:** the simulations use `n_trials = 20` for speed, versus **1000** in the paper. Small gaps (for example PW-CV vs 5-fold CV at h = 1) are within Monte Carlo noise. To match the paper, set `n_trials` to 1000 in `rmd/analysis.Rmd` (overnight run for the neural networks).
- **PW-CV is not uniformly best:** at h = 3 plain 5-fold and gap-CV beat it, and static OOS wins at h = 6.
- **Gap-CV at h = 6 (108.92%)** reflects too little training data after purging with this setup, so treat it as an implementation artifact rather than a verdict on the method.
- **Sunspot numbers vary slightly between result files** because separate runs used their own seeds and fold splits.
- This is coursework: the extensions are exploratory and have not been peer reviewed.

## Reference

Bergmeir, C., Hyndman, R. J., & Koo, B. (2018). A note on the validity of cross-validation for evaluating autoregressive time series prediction. *Computational Statistics & Data Analysis*, 120, 70–83.

## Team

**Group 6 · DA 3041: Applied Time Series Analysis**

| Name | Roll no. |
|---|---|
| Nancy Vernica | 240150020 |
| Nayakwadi Saharshini | 240150021 |
| Sunkari Sharanya | 240150036 |
| Yendluri Yasaswi | 240150040 |

This project is a replication and extension of the paper above. The paper and its ideas belong to Bergmeir, Hyndman & Koo; our contribution is the replication code, the three extensions and the app.
