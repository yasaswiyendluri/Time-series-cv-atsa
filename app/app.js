/* ==========================================================================
   CHRONOS-CV: Complete Time Series Cross-Validation Research Lab
   Replication & Novel Extensions of Bergmeir, Hyndman, & Koo (2018)
   Interactive Scientific Suite | Research Grade Application
   ========================================================================== */

// --- 1. RESEARCH DATASETS & BENCHMARKS --------------------------------------
const DB = {
  // Table 1 Replication (Linear AR/MA DGPs, 1000 MC trials)
  table1: {
  "AR(3)": {
    "5-fold CV": [
      {
        "lag": "AR(1)",
        "rmse_mapae": 7.6,
        "rmse_mpae": -0.42,
        "mae_mapae": 7.35,
        "mae_mpae": -0.83
      },
      {
        "lag": "AR(2)",
        "rmse_mapae": 7.0,
        "rmse_mpae": -0.09,
        "mae_mapae": 7.24,
        "mae_mpae": -0.2
      },
      {
        "lag": "AR(3)",
        "rmse_mapae": 7.26,
        "rmse_mpae": -0.24,
        "mae_mapae": 7.62,
        "mae_mpae": -0.55
      },
      {
        "lag": "AR(4)",
        "rmse_mapae": 8.14,
        "rmse_mpae": -0.43,
        "mae_mapae": 8.02,
        "mae_mpae": -0.48
      },
      {
        "lag": "AR(5)",
        "rmse_mapae": 7.87,
        "rmse_mpae": 0.0,
        "mae_mapae": 7.72,
        "mae_mpae": -0.43
      }
    ],
    "LOOCV": [
      {
        "lag": "AR(1)",
        "rmse_mapae": 8.03,
        "rmse_mpae": -0.9,
        "mae_mapae": 7.52,
        "mae_mpae": -1.29
      },
      {
        "lag": "AR(2)",
        "rmse_mapae": 7.22,
        "rmse_mpae": -0.27,
        "mae_mapae": 7.21,
        "mae_mpae": -0.48
      },
      {
        "lag": "AR(3)",
        "rmse_mapae": 7.71,
        "rmse_mpae": -0.62,
        "mae_mapae": 7.77,
        "mae_mpae": -0.93
      },
      {
        "lag": "AR(4)",
        "rmse_mapae": 8.53,
        "rmse_mpae": -0.84,
        "mae_mapae": 8.21,
        "mae_mpae": -0.79
      },
      {
        "lag": "AR(5)",
        "rmse_mapae": 8.18,
        "rmse_mpae": -0.49,
        "mae_mapae": 7.84,
        "mae_mpae": -0.74
      }
    ],
    "nonDepCV": [
      {
        "lag": "AR(1)",
        "rmse_mapae": 11.07,
        "rmse_mpae": 5.34,
        "mae_mapae": 9.16,
        "mae_mpae": 3.04
      },
      {
        "lag": "AR(2)",
        "rmse_mapae": 14.35,
        "rmse_mpae": 11.09,
        "mae_mapae": 11.45,
        "mae_mpae": 7.14
      },
      {
        "lag": "AR(3)",
        "rmse_mapae": 15.63,
        "rmse_mpae": 14.37,
        "mae_mapae": 12.28,
        "mae_mpae": 9.7
      },
      {
        "lag": "AR(4)",
        "rmse_mapae": 22.24,
        "rmse_mpae": 20.62,
        "mae_mapae": 16.23,
        "mae_mpae": 14.34
      },
      {
        "lag": "AR(5)",
        "rmse_mapae": 30.04,
        "rmse_mpae": 28.5,
        "mae_mapae": 21.06,
        "mae_mpae": 19.44
      }
    ],
    "OOS": [
      {
        "lag": "AR(1)",
        "rmse_mapae": 14.86,
        "rmse_mpae": -1.93,
        "mae_mapae": 12.45,
        "mae_mpae": -1.21
      },
      {
        "lag": "AR(2)",
        "rmse_mapae": 15.1,
        "rmse_mpae": -1.32,
        "mae_mapae": 11.98,
        "mae_mpae": -0.6
      },
      {
        "lag": "AR(3)",
        "rmse_mapae": 14.94,
        "rmse_mpae": -1.48,
        "mae_mapae": 11.83,
        "mae_mpae": -0.64
      },
      {
        "lag": "AR(4)",
        "rmse_mapae": 15.48,
        "rmse_mpae": -0.92,
        "mae_mapae": 12.58,
        "mae_mpae": 0.36
      },
      {
        "lag": "AR(5)",
        "rmse_mapae": 16.06,
        "rmse_mpae": 0.14,
        "mae_mapae": 12.25,
        "mae_mpae": 0.98
      }
    ]
  },
  "MA(1)": {
    "5-fold CV": [
      {
        "lag": "AR(1)",
        "rmse_mapae": 10.77,
        "rmse_mpae": 0.1,
        "mae_mapae": 9.46,
        "mae_mpae": -0.27
      },
      {
        "lag": "AR(2)",
        "rmse_mapae": 11.82,
        "rmse_mpae": 0.71,
        "mae_mapae": 9.71,
        "mae_mpae": 0.45
      },
      {
        "lag": "AR(3)",
        "rmse_mapae": 12.2,
        "rmse_mpae": 0.35,
        "mae_mapae": 10.22,
        "mae_mpae": -0.28
      },
      {
        "lag": "AR(4)",
        "rmse_mapae": 11.99,
        "rmse_mpae": 0.53,
        "mae_mapae": 10.13,
        "mae_mpae": 0.04
      },
      {
        "lag": "AR(5)",
        "rmse_mapae": 12.31,
        "rmse_mpae": 0.56,
        "mae_mapae": 10.54,
        "mae_mpae": 0.13
      }
    ],
    "LOOCV": [
      {
        "lag": "AR(1)",
        "rmse_mapae": 10.65,
        "rmse_mpae": -0.11,
        "mae_mapae": 9.41,
        "mae_mpae": -0.5
      },
      {
        "lag": "AR(2)",
        "rmse_mapae": 11.67,
        "rmse_mpae": 0.44,
        "mae_mapae": 9.68,
        "mae_mpae": 0.19
      },
      {
        "lag": "AR(3)",
        "rmse_mapae": 11.81,
        "rmse_mpae": -0.1,
        "mae_mapae": 10.05,
        "mae_mpae": -0.72
      },
      {
        "lag": "AR(4)",
        "rmse_mapae": 11.61,
        "rmse_mpae": 0.13,
        "mae_mapae": 10.05,
        "mae_mpae": -0.37
      },
      {
        "lag": "AR(5)",
        "rmse_mapae": 11.75,
        "rmse_mpae": 0.23,
        "mae_mapae": 10.2,
        "mae_mpae": -0.21
      }
    ],
    "nonDepCV": [
      {
        "lag": "AR(1)",
        "rmse_mapae": 16.87,
        "rmse_mpae": 9.42,
        "mae_mapae": 12.86,
        "mae_mpae": 6.59
      },
      {
        "lag": "AR(2)",
        "rmse_mapae": 17.64,
        "rmse_mpae": 9.69,
        "mae_mapae": 13.35,
        "mae_mpae": 7.82
      },
      {
        "lag": "AR(3)",
        "rmse_mapae": 21.98,
        "rmse_mpae": 16.36,
        "mae_mapae": 16.95,
        "mae_mpae": 12.78
      },
      {
        "lag": "AR(4)",
        "rmse_mapae": 38.44,
        "rmse_mpae": 35.65,
        "mae_mapae": 25.1,
        "mae_mpae": 22.81
      },
      {
        "lag": "AR(5)",
        "rmse_mapae": 49.52,
        "rmse_mpae": 47.61,
        "mae_mapae": 30.6,
        "mae_mpae": 29.17
      }
    ],
    "OOS": [
      {
        "lag": "AR(1)",
        "rmse_mapae": 12.91,
        "rmse_mpae": -0.79,
        "mae_mapae": 10.67,
        "mae_mpae": 0.73
      },
      {
        "lag": "AR(2)",
        "rmse_mapae": 13.97,
        "rmse_mpae": 1.85,
        "mae_mapae": 12.03,
        "mae_mpae": 3.51
      },
      {
        "lag": "AR(3)",
        "rmse_mapae": 14.58,
        "rmse_mpae": 0.7,
        "mae_mapae": 11.77,
        "mae_mpae": 2.16
      },
      {
        "lag": "AR(4)",
        "rmse_mapae": 14.54,
        "rmse_mpae": 0.8,
        "mae_mapae": 12.42,
        "mae_mpae": 1.88
      },
      {
        "lag": "AR(5)",
        "rmse_mapae": 14.53,
        "rmse_mpae": 0.71,
        "mae_mapae": 12.8,
        "mae_mpae": 2.28
      }
    ]
  },
  "AR(12)": {
    "5-fold CV": [
      {
        "lag": "AR(1)",
        "rmse_mapae": 11297.59,
        "rmse_mpae": -3931.03,
        "mae_mapae": 9526.15,
        "mae_mpae": -3453.15
      },
      {
        "lag": "AR(2)",
        "rmse_mapae": 13263.44,
        "rmse_mpae": -5971.32,
        "mae_mapae": 11021.68,
        "mae_mpae": -5303.41
      },
      {
        "lag": "AR(3)",
        "rmse_mapae": 11712.68,
        "rmse_mpae": -5502.37,
        "mae_mapae": 9639.63,
        "mae_mpae": -4657.38
      },
      {
        "lag": "AR(4)",
        "rmse_mapae": 13061.07,
        "rmse_mpae": -6976.06,
        "mae_mapae": 10849.01,
        "mae_mpae": -5770.12
      },
      {
        "lag": "AR(5)",
        "rmse_mapae": 13165.34,
        "rmse_mpae": -9500.12,
        "mae_mapae": 11627.35,
        "mae_mpae": -7928.64
      }
    ],
    "LOOCV": [
      {
        "lag": "AR(1)",
        "rmse_mapae": 11114.67,
        "rmse_mpae": -4135.23,
        "mae_mapae": 9425.11,
        "mae_mpae": -3604.88
      },
      {
        "lag": "AR(2)",
        "rmse_mapae": 13143.98,
        "rmse_mpae": -6171.18,
        "mae_mapae": 10989.57,
        "mae_mpae": -5488.34
      },
      {
        "lag": "AR(3)",
        "rmse_mapae": 11571.2,
        "rmse_mpae": -5755.21,
        "mae_mapae": 9522.56,
        "mae_mpae": -4865.97
      },
      {
        "lag": "AR(4)",
        "rmse_mapae": 13059.12,
        "rmse_mpae": -7262.37,
        "mae_mapae": 10844.04,
        "mae_mpae": -6035.96
      },
      {
        "lag": "AR(5)",
        "rmse_mapae": 13218.69,
        "rmse_mpae": -9750.77,
        "mae_mapae": 11569.04,
        "mae_mpae": -8124.41
      }
    ],
    "nonDepCV": [
      {
        "lag": "AR(1)",
        "rmse_mapae": 16755.97,
        "rmse_mpae": 5261.13,
        "mae_mapae": 12464.11,
        "mae_mpae": 1819.95
      },
      {
        "lag": "AR(2)",
        "rmse_mapae": 18768.54,
        "rmse_mpae": 4946.13,
        "mae_mapae": 14203.17,
        "mae_mpae": 1391.36
      },
      {
        "lag": "AR(3)",
        "rmse_mapae": 21035.48,
        "rmse_mpae": 9420.53,
        "mae_mapae": 14543.69,
        "mae_mpae": 4341.21
      },
      {
        "lag": "AR(4)",
        "rmse_mapae": 34678.14,
        "rmse_mpae": 23257.68,
        "mae_mapae": 19827.89,
        "mae_mpae": 9528.11
      },
      {
        "lag": "AR(5)",
        "rmse_mapae": 15855.77,
        "rmse_mpae": 8373.67,
        "mae_mapae": 12623.31,
        "mae_mpae": 3341.38
      }
    ],
    "OOS": [
      {
        "lag": "AR(1)",
        "rmse_mapae": 12853.82,
        "rmse_mpae": -7083.7,
        "mae_mapae": 11620.76,
        "mae_mpae": -4917.48
      },
      {
        "lag": "AR(2)",
        "rmse_mapae": 14345.9,
        "rmse_mpae": -7470.67,
        "mae_mapae": 13004.11,
        "mae_mpae": -5063.29
      },
      {
        "lag": "AR(3)",
        "rmse_mapae": 13186.14,
        "rmse_mpae": -6281.65,
        "mae_mapae": 12073.35,
        "mae_mpae": -4137.11
      },
      {
        "lag": "AR(4)",
        "rmse_mapae": 14533.96,
        "rmse_mpae": -5563.19,
        "mae_mapae": 13298.25,
        "mae_mpae": -4334.32
      },
      {
        "lag": "AR(5)",
        "rmse_mapae": 13638.5,
        "rmse_mpae": -7994.87,
        "mae_mapae": 11987.19,
        "mae_mpae": -6466.34
      }
    ]
  }
},

  // Table 2 Replication (Non-Linear NNAR DGPs, 1000 MC trials)
  table2: {
  "AR(3)": {
    "5-fold CV": [
      {
        "lag": "AR(1)",
        "rmse_mapae": 11.43,
        "rmse_mpae": 4.43,
        "mae_mapae": 8.75,
        "mae_mpae": 3.61
      },
      {
        "lag": "AR(2)",
        "rmse_mapae": 11.74,
        "rmse_mpae": 2.16,
        "mae_mapae": 7.75,
        "mae_mpae": 2.46
      },
      {
        "lag": "AR(3)",
        "rmse_mapae": 15.93,
        "rmse_mpae": 1.92,
        "mae_mapae": 10.86,
        "mae_mpae": 5.26
      },
      {
        "lag": "AR(4)",
        "rmse_mapae": 23.02,
        "rmse_mpae": 12.24,
        "mae_mapae": 15.92,
        "mae_mpae": 8.64
      },
      {
        "lag": "AR(5)",
        "rmse_mapae": 21.63,
        "rmse_mpae": 7.0,
        "mae_mapae": 12.85,
        "mae_mpae": 4.67
      }
    ],
    "LOOCV": [
      {
        "lag": "AR(1)",
        "rmse_mapae": 10.83,
        "rmse_mpae": 5.03,
        "mae_mapae": 7.9,
        "mae_mpae": 2.93
      },
      {
        "lag": "AR(2)",
        "rmse_mapae": 10.2,
        "rmse_mpae": 2.17,
        "mae_mapae": 6.83,
        "mae_mpae": 1.59
      },
      {
        "lag": "AR(3)",
        "rmse_mapae": 18.94,
        "rmse_mpae": -0.34,
        "mae_mapae": 9.43,
        "mae_mpae": 2.17
      },
      {
        "lag": "AR(4)",
        "rmse_mapae": 19.99,
        "rmse_mpae": 10.04,
        "mae_mapae": 13.57,
        "mae_mpae": 6.12
      },
      {
        "lag": "AR(5)",
        "rmse_mapae": 18.29,
        "rmse_mpae": 0.57,
        "mae_mapae": 11.15,
        "mae_mpae": 0.58
      }
    ],
    "nonDepCV": [
      {
        "lag": "AR(1)",
        "rmse_mapae": 34.55,
        "rmse_mpae": 33.53,
        "mae_mapae": 25.39,
        "mae_mpae": 25.28
      },
      {
        "lag": "AR(2)",
        "rmse_mapae": 47.75,
        "rmse_mpae": 47.75,
        "mae_mapae": 34.82,
        "mae_mpae": 34.82
      },
      {
        "lag": "AR(3)",
        "rmse_mapae": 59.02,
        "rmse_mpae": 55.82,
        "mae_mapae": 47.06,
        "mae_mpae": 47.06
      },
      {
        "lag": "AR(4)",
        "rmse_mapae": 63.42,
        "rmse_mpae": 63.42,
        "mae_mapae": 51.42,
        "mae_mpae": 51.42
      },
      {
        "lag": "AR(5)",
        "rmse_mapae": 53.89,
        "rmse_mpae": 47.88,
        "mae_mapae": 42.3,
        "mae_mpae": 39.91
      }
    ],
    "OOS": [
      {
        "lag": "AR(1)",
        "rmse_mapae": 13.75,
        "rmse_mpae": 1.56,
        "mae_mapae": 12.59,
        "mae_mpae": 3.37
      },
      {
        "lag": "AR(2)",
        "rmse_mapae": 15.48,
        "rmse_mpae": 0.16,
        "mae_mapae": 12.39,
        "mae_mpae": 3.34
      },
      {
        "lag": "AR(3)",
        "rmse_mapae": 22.84,
        "rmse_mpae": 1.37,
        "mae_mapae": 14.89,
        "mae_mpae": 5.3
      },
      {
        "lag": "AR(4)",
        "rmse_mapae": 28.17,
        "rmse_mpae": 11.42,
        "mae_mapae": 22.54,
        "mae_mpae": 12.12
      },
      {
        "lag": "AR(5)",
        "rmse_mapae": 36.8,
        "rmse_mpae": 20.59,
        "mae_mapae": 26.46,
        "mae_mpae": 17.68
      }
    ]
  },
  "MA(1)": {
    "5-fold CV": [
      {
        "lag": "AR(1)",
        "rmse_mapae": 12.96,
        "rmse_mpae": 2.02,
        "mae_mapae": 9.34,
        "mae_mpae": -0.44
      },
      {
        "lag": "AR(2)",
        "rmse_mapae": 14.39,
        "rmse_mpae": -0.31,
        "mae_mapae": 9.94,
        "mae_mpae": -0.02
      },
      {
        "lag": "AR(3)",
        "rmse_mapae": 17.97,
        "rmse_mpae": 4.75,
        "mae_mapae": 12.1,
        "mae_mpae": 1.98
      },
      {
        "lag": "AR(4)",
        "rmse_mapae": 21.92,
        "rmse_mpae": 3.64,
        "mae_mapae": 13.13,
        "mae_mpae": 2.67
      },
      {
        "lag": "AR(5)",
        "rmse_mapae": 23.94,
        "rmse_mpae": 7.45,
        "mae_mapae": 16.1,
        "mae_mpae": 6.45
      }
    ],
    "LOOCV": [
      {
        "lag": "AR(1)",
        "rmse_mapae": 12.09,
        "rmse_mpae": -0.13,
        "mae_mapae": 8.98,
        "mae_mpae": -1.75
      },
      {
        "lag": "AR(2)",
        "rmse_mapae": 13.4,
        "rmse_mpae": -3.24,
        "mae_mapae": 9.23,
        "mae_mpae": -2.85
      },
      {
        "lag": "AR(3)",
        "rmse_mapae": 14.1,
        "rmse_mpae": 1.0,
        "mae_mapae": 10.32,
        "mae_mpae": -0.38
      },
      {
        "lag": "AR(4)",
        "rmse_mapae": 18.47,
        "rmse_mpae": -2.8,
        "mae_mapae": 12.71,
        "mae_mpae": -2.23
      },
      {
        "lag": "AR(5)",
        "rmse_mapae": 20.66,
        "rmse_mpae": 2.26,
        "mae_mapae": 12.58,
        "mae_mpae": 0.91
      }
    ],
    "nonDepCV": [
      {
        "lag": "AR(1)",
        "rmse_mapae": 27.87,
        "rmse_mpae": 23.06,
        "mae_mapae": 19.53,
        "mae_mpae": 15.88
      },
      {
        "lag": "AR(2)",
        "rmse_mapae": 58.42,
        "rmse_mpae": 57.45,
        "mae_mapae": 42.98,
        "mae_mpae": 42.4
      },
      {
        "lag": "AR(3)",
        "rmse_mapae": 73.63,
        "rmse_mpae": 73.63,
        "mae_mapae": 54.97,
        "mae_mpae": 54.97
      },
      {
        "lag": "AR(4)",
        "rmse_mapae": 52.25,
        "rmse_mpae": 50.46,
        "mae_mapae": 40.7,
        "mae_mpae": 40.06
      },
      {
        "lag": "AR(5)",
        "rmse_mapae": 58.75,
        "rmse_mpae": 56.72,
        "mae_mapae": 45.75,
        "mae_mpae": 45.75
      }
    ],
    "OOS": [
      {
        "lag": "AR(1)",
        "rmse_mapae": 13.17,
        "rmse_mpae": -1.85,
        "mae_mapae": 11.96,
        "mae_mpae": -1.59
      },
      {
        "lag": "AR(2)",
        "rmse_mapae": 17.56,
        "rmse_mpae": 5.55,
        "mae_mapae": 15.15,
        "mae_mpae": 3.51
      },
      {
        "lag": "AR(3)",
        "rmse_mapae": 23.77,
        "rmse_mpae": 6.29,
        "mae_mapae": 17.36,
        "mae_mpae": 3.68
      },
      {
        "lag": "AR(4)",
        "rmse_mapae": 23.04,
        "rmse_mpae": -0.96,
        "mae_mapae": 16.1,
        "mae_mpae": 1.2
      },
      {
        "lag": "AR(5)",
        "rmse_mapae": 23.07,
        "rmse_mpae": -2.49,
        "mae_mapae": 16.22,
        "mae_mpae": 0.46
      }
    ]
  },
  "AR(12)": {
    "5-fold CV": [
      {
        "lag": "AR(1)",
        "rmse_mapae": 28137.89,
        "rmse_mpae": -14311.66,
        "mae_mapae": 24748.71,
        "mae_mpae": -14066.18
      },
      {
        "lag": "AR(2)",
        "rmse_mapae": 22816.3,
        "rmse_mpae": -10425.69,
        "mae_mapae": 19298.71,
        "mae_mpae": -9751.44
      },
      {
        "lag": "AR(3)",
        "rmse_mapae": 27626.56,
        "rmse_mpae": -15818.68,
        "mae_mapae": 23806.93,
        "mae_mpae": -14932.4
      },
      {
        "lag": "AR(4)",
        "rmse_mapae": 24606.96,
        "rmse_mpae": -13085.04,
        "mae_mapae": 21923.01,
        "mae_mpae": -13493.04
      },
      {
        "lag": "AR(5)",
        "rmse_mapae": 29045.08,
        "rmse_mpae": -21020.48,
        "mae_mapae": 25231.1,
        "mae_mpae": -19078.46
      }
    ],
    "LOOCV": [
      {
        "lag": "AR(1)",
        "rmse_mapae": 27445.13,
        "rmse_mpae": -16352.71,
        "mae_mapae": 24832.68,
        "mae_mpae": -16002.95
      },
      {
        "lag": "AR(2)",
        "rmse_mapae": 20522.99,
        "rmse_mpae": -13377.37,
        "mae_mapae": 17591.68,
        "mae_mpae": -12074.59
      },
      {
        "lag": "AR(3)",
        "rmse_mapae": 25315.96,
        "rmse_mpae": -16507.47,
        "mae_mapae": 22790.21,
        "mae_mpae": -15535.08
      },
      {
        "lag": "AR(4)",
        "rmse_mapae": 25194.16,
        "rmse_mpae": -15372.86,
        "mae_mapae": 22648.72,
        "mae_mpae": -15476.69
      },
      {
        "lag": "AR(5)",
        "rmse_mapae": 29372.25,
        "rmse_mpae": -21777.56,
        "mae_mapae": 25359.57,
        "mae_mpae": -19972.77
      }
    ],
    "nonDepCV": [
      {
        "lag": "AR(1)",
        "rmse_mapae": 34308.88,
        "rmse_mpae": 2425.06,
        "mae_mapae": 30227.51,
        "mae_mpae": -164.35
      },
      {
        "lag": "AR(2)",
        "rmse_mapae": 20522.2,
        "rmse_mpae": 5792.41,
        "mae_mapae": 18252.06,
        "mae_mpae": 3801.76
      },
      {
        "lag": "AR(3)",
        "rmse_mapae": 28212.24,
        "rmse_mpae": 1559.73,
        "mae_mapae": 25558.03,
        "mae_mpae": -668.1
      },
      {
        "lag": "AR(4)",
        "rmse_mapae": 24456.36,
        "rmse_mpae": 5566.2,
        "mae_mapae": 21723.19,
        "mae_mpae": 1950.29
      },
      {
        "lag": "AR(5)",
        "rmse_mapae": 24697.52,
        "rmse_mpae": -3427.02,
        "mae_mapae": 23071.94,
        "mae_mpae": -5237.66
      }
    ],
    "OOS": [
      {
        "lag": "AR(1)",
        "rmse_mapae": 31182.1,
        "rmse_mpae": -5205.45,
        "mae_mapae": 27629.99,
        "mae_mpae": -5375.32
      },
      {
        "lag": "AR(2)",
        "rmse_mapae": 20818.61,
        "rmse_mpae": -13965.36,
        "mae_mapae": 18921.72,
        "mae_mpae": -12595.73
      },
      {
        "lag": "AR(3)",
        "rmse_mapae": 25749.33,
        "rmse_mpae": -9119.32,
        "mae_mapae": 25026.88,
        "mae_mpae": -9163.41
      },
      {
        "lag": "AR(4)",
        "rmse_mapae": 24805.7,
        "rmse_mpae": -13596.93,
        "mae_mapae": 21770.71,
        "mae_mpae": -11324.42
      },
      {
        "lag": "AR(5)",
        "rmse_mapae": 27308.87,
        "rmse_mpae": -12662.86,
        "mae_mapae": 24905.09,
        "mae_mpae": -10371.49
      }
    ]
  }
},

  // Table 3 & 1,560 Neural Net Grid Evaluation
  sunspotGrid: {
    topCV: [
  {
    "p": 2,
    "size": 14,
    "decay": 0.05,
    "cv_rmse": 2.044,
    "lb_p": 0.342,
    "oos_rmse": 2.251,
    "out_rmse": 2.558
  },
  {
    "p": 2,
    "size": 8,
    "decay": 0.075,
    "cv_rmse": 2.054,
    "lb_p": 0.184,
    "oos_rmse": 2.187,
    "out_rmse": 2.555
  },
  {
    "p": 3,
    "size": 6,
    "decay": 0.075,
    "cv_rmse": 2.058,
    "lb_p": 0.056,
    "oos_rmse": 2.142,
    "out_rmse": 2.479
  },
  {
    "p": 2,
    "size": 11,
    "decay": 0.1,
    "cv_rmse": 2.06,
    "lb_p": 0.163,
    "oos_rmse": 2.209,
    "out_rmse": 2.566
  },
  {
    "p": 2,
    "size": 6,
    "decay": 0.1,
    "cv_rmse": 2.063,
    "lb_p": 0.068,
    "oos_rmse": 2.151,
    "out_rmse": 2.568
  },
  {
    "p": 2,
    "size": 8,
    "decay": 0.1,
    "cv_rmse": 2.064,
    "lb_p": 0.119,
    "oos_rmse": 2.118,
    "out_rmse": 2.617
  },
  {
    "p": 2,
    "size": 6,
    "decay": 0.0147,
    "cv_rmse": 2.065,
    "lb_p": 0.373,
    "oos_rmse": 2.293,
    "out_rmse": 2.807
  },
  {
    "p": 2,
    "size": 9,
    "decay": 0.05,
    "cv_rmse": 2.067,
    "lb_p": 0.052,
    "oos_rmse": 2.335,
    "out_rmse": 2.69
  },
  {
    "p": 3,
    "size": 3,
    "decay": 0.075,
    "cv_rmse": 2.068,
    "lb_p": 0.423,
    "oos_rmse": 2.085,
    "out_rmse": 2.707
  },
  {
    "p": 2,
    "size": 4,
    "decay": 0.075,
    "cv_rmse": 2.073,
    "lb_p": 0.066,
    "oos_rmse": 2.123,
    "out_rmse": 2.725
  },
  {
    "p": 3,
    "size": 11,
    "decay": 0.1,
    "cv_rmse": 2.075,
    "lb_p": 0.296,
    "oos_rmse": 2.141,
    "out_rmse": 2.522
  },
  {
    "p": 2,
    "size": 7,
    "decay": 0.1,
    "cv_rmse": 2.076,
    "lb_p": 0.247,
    "oos_rmse": 2.174,
    "out_rmse": 2.634
  }
],
    topOut: [
  {
    "p": 4,
    "size": 11,
    "decay": 0.0,
    "cv_rmse": 2.453,
    "lb_p": 0.028,
    "oos_rmse": 2.721,
    "out_rmse": 2.18
  },
  {
    "p": 9,
    "size": 5,
    "decay": 0.0,
    "cv_rmse": 3.483,
    "lb_p": 0.0,
    "oos_rmse": 2.764,
    "out_rmse": 2.213
  },
  {
    "p": 2,
    "size": 13,
    "decay": 0.0,
    "cv_rmse": 2.364,
    "lb_p": 0.302,
    "oos_rmse": 2.52,
    "out_rmse": 2.233
  },
  {
    "p": 9,
    "size": 5,
    "decay": 0.05,
    "cv_rmse": 2.817,
    "lb_p": 0.014,
    "oos_rmse": 2.963,
    "out_rmse": 2.246
  },
  {
    "p": 9,
    "size": 4,
    "decay": 0.00316,
    "cv_rmse": 2.609,
    "lb_p": 0.342,
    "oos_rmse": 2.232,
    "out_rmse": 2.247
  },
  {
    "p": 4,
    "size": 7,
    "decay": 0.075,
    "cv_rmse": 2.425,
    "lb_p": 0.31,
    "oos_rmse": 2.421,
    "out_rmse": 2.254
  },
  {
    "p": 10,
    "size": 3,
    "decay": 0.0,
    "cv_rmse": 3.139,
    "lb_p": 0.0,
    "oos_rmse": 3.118,
    "out_rmse": 2.261
  },
  {
    "p": 14,
    "size": 4,
    "decay": 0.0,
    "cv_rmse": 4.589,
    "lb_p": 0.0,
    "oos_rmse": 4.382,
    "out_rmse": 2.262
  },
  {
    "p": 16,
    "size": 11,
    "decay": 0.00316,
    "cv_rmse": 3.836,
    "lb_p": 0.0,
    "oos_rmse": 5.278,
    "out_rmse": 2.269
  },
  {
    "p": 9,
    "size": 3,
    "decay": 0.0147,
    "cv_rmse": 3.437,
    "lb_p": 0.0,
    "oos_rmse": 2.416,
    "out_rmse": 2.273
  },
  {
    "p": 16,
    "size": 6,
    "decay": 0.0,
    "cv_rmse": 4.826,
    "lb_p": 0.0,
    "oos_rmse": 3.203,
    "out_rmse": 2.274
  },
  {
    "p": 11,
    "size": 5,
    "decay": 0.0,
    "cv_rmse": 3.943,
    "lb_p": 0.0,
    "oos_rmse": 2.412,
    "out_rmse": 2.276
  }
],
    pSummary: [
  {
    "p": 1,
    "mean_cv": 3.045,
    "mean_out": 3.771
  },
  {
    "p": 2,
    "mean_cv": 2.317,
    "mean_out": 2.648
  },
  {
    "p": 3,
    "mean_cv": 2.218,
    "mean_out": 2.693
  },
  {
    "p": 4,
    "mean_cv": 2.466,
    "mean_out": 2.694
  },
  {
    "p": 5,
    "mean_cv": 2.544,
    "mean_out": 2.859
  },
  {
    "p": 6,
    "mean_cv": 2.619,
    "mean_out": 2.865
  },
  {
    "p": 7,
    "mean_cv": 2.647,
    "mean_out": 2.862
  },
  {
    "p": 8,
    "mean_cv": 2.752,
    "mean_out": 3.096
  },
  {
    "p": 9,
    "mean_cv": 2.853,
    "mean_out": 3.215
  },
  {
    "p": 10,
    "mean_cv": 3.046,
    "mean_out": 3.47
  },
  {
    "p": 11,
    "mean_cv": 3.245,
    "mean_out": 3.526
  },
  {
    "p": 12,
    "mean_cv": 3.333,
    "mean_out": 3.47
  },
  {
    "p": 13,
    "mean_cv": 3.33,
    "mean_out": 3.803
  },
  {
    "p": 14,
    "mean_cv": 3.476,
    "mean_out": 3.686
  },
  {
    "p": 15,
    "mean_cv": 3.487,
    "mean_out": 4.058
  },
  {
    "p": 16,
    "mean_cv": 3.608,
    "mean_out": 3.824
  },
  {
    "p": 17,
    "mean_cv": 3.549,
    "mean_out": 3.912
  },
  {
    "p": 18,
    "mean_cv": 3.616,
    "mean_out": 3.976
  },
  {
    "p": 19,
    "mean_cv": 3.74,
    "mean_out": 4.117
  },
  {
    "p": 20,
    "mean_cv": 3.737,
    "mean_out": 4.17
  }
],
    paperModel: { p: 2, size: 14, decay: 0.05, cv_rmse: 2.044, lb_p: 0.342, out_rmse: 2.558, name: "Paper 2-Step Filter" },
    oosModel: { p: 3, size: 13, decay: 0.05, cv_rmse: 2.141, lb_p: 0.100, out_rmse: 2.626, name: "OOS Holdout Selection" },
    jointWinner: { p: 3, size: 10, decay: 0.10, cv_rmse: 2.199, lb_p: 0.854, out_rmse: 2.543, name: "Joint Pen (lambda=0.5) [OURS]" }
  },

  // Direct vs Recursive Multi-Step Forecasts (table_extension_recursive_direct.csv)
  directVsRecursive: [
    { h: "h = 1", trueDirRMSE: 1.023, cvDirRMSE: 1.009, dirMAPAE: 7.89, trueRecRMSE: 1.023, cvRecRMSE: 1.009, recMAPAE: 7.89 },
    { h: "h = 2", trueDirRMSE: 1.253, cvDirRMSE: 1.298, dirMAPAE: 13.21, trueRecRMSE: 1.252, cvRecRMSE: 1.283, recMAPAE: 12.44 },
    { h: "h = 4", trueDirRMSE: 1.727, cvDirRMSE: 1.687, dirMAPAE: 17.88, trueRecRMSE: 1.723, cvRecRMSE: 1.660, recMAPAE: 19.12 }
  ],

  // Yearly Sunspots (N = 289, 1700 - 1988)
  sunspotRaw: [
    5,11,16,23,36,58,29,20,10,8,3,0,0,2,11,27,47,63,60,39,28,26,22,11,21,40,78,122,103,73,47,35,11,5,16,34,70,81,111,101,73,40,20,16,5,11,22,40,60,80.9,83.4,47.7,47.8,30.7,12.2,9.6,10.2,32.4,47.6,54,62.9,85.9,61.2,45.1,36.4,20.9,11.4,37.8,69.8,106.1,100.8,81.6,66.5,34.8,30.6,7,19.8,92.5,154.4,125.9,84.8,68.1,38.5,22.8,10.2,24.1,82.9,132,130.9,118.1,89.9,66.6,60,46.9,41,21.3,16,6.4,4.1,6.8,14.5,34,45,43.1,47.5,42.2,28.1,10.1,8.1,2.5,0,1.4,5,12.2,13.9,35.4,45.8,41.1,30.1,23.9,15.6,6.6,4,1.8,8.5,16.6,36.3,49.6,64.2,67,70.9,47.8,27.5,8.5,13.2,56.9,121.5,138.3,103.2,85.7,64.6,36.7,24.2,10.7,15,40.1,61.5,98.5,124.7,96.3,66.6,64.5,54.1,39,20.6,6.7,4.3,22.7,54.8,93.8,95.8,77.2,59.1,44,47,30.5,16.3,7.3,37.6,74,139,111.2,101.6,66.2,44.7,17,11.3,12.4,3.4,6,32.3,54.3,59.7,63.7,63.5,52.2,25.4,13.1,6.8,6.3,7.1,35.6,73,85.1,78,64,41.8,26.2,26.7,12.1,9.5,2.7,5,24.4,42,63.5,53.8,62,48.5,43.9,18.6,5.7,3.6,1.4,9.6,47.4,57.1,103.9,80.6,63.6,37.6,26.1,14.2,5.8,16.7,44.3,63.9,69,77.8,64.9,35.7,21.2,11.1,5.7,8.7,36.1,79.7,114.4,109.6,88.8,67.8,47.5,30.6,16.3,9.6,33.2,92.6,151.6,136.3,134.7,83.9,69.4,31.5,13.9,4.4,38,141.7,190.2,184.8,159,112.3,53.9,37.5,27.9,10.2,15.1,47,93.8,105.9,105.5,104.5,66.6,68.9,38,34.5,15.5,12.6,27.5,92.5,155.4,154.7,140.5,115.9,66.6,45.9,17.9,13.4,29.2,100.2
  ],
  years: Array.from({ length: 289 }, (_, i) => 1700 + i),
  get sunspotTransformed() {
    return this.sunspotRaw.map(x => +(2 * (Math.sqrt(1 + x) - 1)).toFixed(3));
  },

  // Extension 1: ARMA Misspecification Benchmark
  ext1: {
    comparison: [
      { method: "Ordinary 5-Fold CV", rmse: 1.0506, mae: 0.8395, retained: 100.0, status: "Correlated Residuals (Violates A3)", color: "#3b82f6" },
      { method: "Gap-CV (gap = 3)", rmse: 1.0624, mae: 0.8488, retained: 26.6, status: "Purged Data (Suffers Severe Data Loss)", color: "#ef4444" },
      { method: "Pre-Whitened CV (PW-CV)", rmse: 1.0411, mae: 0.8319, retained: 100.0, status: "Restores A3 with 100% Data!", color: "#10b981" }
    ],
    diagnostics: [
      { type: "Raw Out-of-Fold (Before Filtering)", Q: 42.39, pVal: "1.14e-06", lag1ACF: 0.199, status: "REJECTED (Correlated, Violates A3)", badge: "badge-rose" },
      { type: "Pre-Whitened (After Filtering)", Q: 7.56, pVal: "0.4778", lag1ACF: 0.088, status: "PASSED (White Noise Restored, Satisfies A3)", badge: "badge-emerald" }
    ]
  },

  // Extension 2: Monte Carlo Simulation Multi-Horizon Results (h = 1, 2, 4)
  ext2_mc: {
    "h = 1": [
      { method: "5-Fold CV", mapae: 8.69, bias: -0.013, highlight: false },
      { method: "Purged Gap-CV", mapae: 8.69, bias: -0.013, highlight: false },
      { method: "PW-CV (Ours)", mapae: 8.84, bias: -0.011, highlight: true },
      { method: "Rolling-Origin", mapae: 12.82, bias: 0.007, highlight: false },
      { method: "Static OOS", mapae: 11.72, bias: -0.045, highlight: false }
    ],
    "h = 2": [
      { method: "PW-CV (Ours)", mapae: 8.15, bias: -0.003, highlight: true, winner: true },
      { method: "5-Fold CV", mapae: 8.99, bias: 0.023, highlight: false },
      { method: "Purged Gap-CV", mapae: 9.65, bias: 0.039, highlight: false },
      { method: "Static OOS", mapae: 12.95, bias: 0.050, highlight: false },
      { method: "Rolling-Origin", mapae: 13.42, bias: -0.008, highlight: false }
    ],
    "h = 4": [
      { method: "PW-CV (Ours)", mapae: 13.08, bias: -0.072, highlight: true, winner: true },
      { method: "5-Fold CV", mapae: 13.28, bias: 0.012, highlight: false },
      { method: "Rolling-Origin", mapae: 14.82, bias: -0.034, highlight: false },
      { method: "Static OOS", mapae: 18.22, bias: -0.010, highlight: false },
      { method: "Purged Gap-CV", mapae: 19.14, bias: 0.188, highlight: false, exploded: true }
    ]
  },

  // Extension 2: Sunspot Multi-Horizon MAPAE & Exact RMSE (h = 1, 3, 6)
  ext2_sunspot: {
    mapae: {
      "h = 1": [
        { method: "PW-CV (Ours)", mapae: 8.02, color: "#10b981", desc: "Best precision; in-fold whitening filters residual cycles" },
        { method: "Static OOS", mapae: 8.93, color: "#f59e0b", desc: "Solid holdout split performance" },
        { method: "5-Fold CV", mapae: 9.46, color: "#3b82f6", desc: "Validates Bergmeir et al. (Theorem 1 holds at h=1)" },
        { method: "Purged Gap-CV", mapae: 9.46, color: "#ef4444", desc: "Identical to CV because gap = h - 1 = 0" },
        { method: "Rolling-Origin", mapae: 16.02, color: "#8b5cf6", desc: "High variance from small initial training windows" }
      ],
      "h = 3": [
        { method: "Purged Gap-CV", mapae: 9.53, color: "#ef4444", desc: "Moderate gap (k=2) begins increasing variance" },
        { method: "5-Fold CV", mapae: 10.10, color: "#3b82f6", desc: "Impacted by MA(2) multi-step error overlap" },
        { method: "PW-CV (Ours)", mapae: 11.50, color: "#10b981", desc: "Accurately identifies winning AR(10) model (3.760 vs 3.752)" },
        { method: "Rolling-Origin", mapae: 12.06, color: "#8b5cf6", desc: "Slower convergence due to sequential windowing" },
        { method: "Static OOS", mapae: 13.74, color: "#f59e0b", desc: "Holdout split variance inflates with horizon" }
      ],
      "h = 6": [
        { method: "Static OOS", mapae: 6.18, color: "#f59e0b", desc: "Fortuitous holdout alignment on final 86 points" },
        { method: "5-Fold CV", mapae: 9.89, color: "#3b82f6", desc: "Suffers uncorrected MA(5) error overlap" },
        { method: "PW-CV (Ours)", mapae: 12.15, color: "#10b981", desc: "Resilient! Reconstructs total variance with 100% data" },
        { method: "Rolling-Origin", mapae: 16.27, color: "#8b5cf6", desc: "Stable but computationally intensive" },
        { method: "Purged Gap-CV", mapae: 108.92, color: "#ef4444", desc: "CATASTROPHIC EXPLOSION! 73.4% data purged -> rank deficiency!", exploded: true }
      ]
    },
    exactOrders: [
      { h: "h = 1", order: "AR(2)", trueRMSE: 2.594, cv5: 2.205, gap: 2.205, pw: 2.276, rocv: 2.041, oos: 2.242 },
      { h: "h = 1", order: "AR(4)", trueRMSE: 2.578, cv5: 2.265, gap: 2.265, pw: 2.305, rocv: 2.062, oos: 2.243 },
      { h: "h = 1", order: "AR(7)", trueRMSE: 2.390, cv5: 2.224, gap: 2.224, pw: 2.259, rocv: 2.019, oos: 2.329 },
      { h: "h = 1", order: "AR(10)", trueRMSE: 2.179, cv5: 2.261, gap: 2.261, pw: 2.261, rocv: 2.022, oos: 2.323 },
      { h: "h = 3", order: "AR(2)", trueRMSE: 5.266, cv5: 4.622, gap: 5.009, pw: 4.248, rocv: 4.969, oos: 4.282 },
      { h: "h = 3", order: "AR(4)", trueRMSE: 5.225, cv5: 4.620, gap: 5.096, pw: 4.162, rocv: 4.967, oos: 4.361 },
      { h: "h = 3", order: "AR(7)", trueRMSE: 4.041, cv5: 4.240, gap: 4.553, pw: 3.794, rocv: 4.608, oos: 4.390 },
      { h: "h = 3", order: "AR(10)", trueRMSE: 3.752, cv5: 4.190, gap: 4.431, pw: 3.760, rocv: 4.638, oos: 4.168 },
      { h: "h = 6", order: "AR(2)", trueRMSE: 5.446, cv5: 4.710, gap: 7.364, pw: 4.048, rocv: 5.195, oos: 4.461 },
      { h: "h = 6", order: "AR(4)", trueRMSE: 4.424, cv5: 4.396, gap: 6.279, pw: 3.778, rocv: 4.937, oos: 4.451 },
      { h: "h = 6", order: "AR(7)", trueRMSE: 3.826, cv5: 4.265, gap: 10.613, pw: 3.618, rocv: 4.713, oos: 3.906 },
      { h: "h = 6", order: "AR(10)", trueRMSE: 3.834, cv5: 4.368, gap: 10.779, pw: 3.723, rocv: 4.819, oos: 3.984 }
    ]
  },

  // Joint Selection Criterion (Section 6)
  jointCriterion: [
    { criterion: "Pure CV (lambda = 0)", lambda: 0.0, pLags: 2, size: 14, decay: 0.05, cvRMSE: 2.044, lbP: 0.342, outRMSE: 2.558 },
    { criterion: "Joint Pen (lambda = 0.1)", lambda: 0.1, pLags: 9, size: 5, decay: 0.00316, cvRMSE: 2.079, lbP: 0.624, outRMSE: 3.843 },
    { criterion: "Joint Pen (lambda = 0.25)", lambda: 0.25, pLags: 9, size: 5, decay: 0.00316, cvRMSE: 2.079, lbP: 0.624, outRMSE: 3.843 },
    { criterion: "Joint Pen (lambda = 0.5)", lambda: 0.5, pLags: 3, size: 10, decay: 0.10, cvRMSE: 2.199, lbP: 0.854, outRMSE: 2.543, winner: true },
    { criterion: "Joint Pen (lambda = 1.0)", lambda: 1.0, pLags: 7, size: 10, decay: 0.075, cvRMSE: 2.360, lbP: 0.958, outRMSE: 2.630 },
    { criterion: "Joint Pen (lambda = 2.0)", lambda: 2.0, pLags: 7, size: 10, decay: 0.075, cvRMSE: 2.360, lbP: 0.958, outRMSE: 2.630 },
    { criterion: "Two-Step Filter (Paper)", lambda: "NA", pLags: 2, size: 14, decay: 0.05, cvRMSE: 2.044, lbP: 0.342, outRMSE: 2.558, baseline: true },
    { criterion: "OOS Holdout Selection", lambda: "NA", pLags: 3, size: 13, decay: 0.05, cvRMSE: 2.141, lbP: 0.100, outRMSE: 2.626, baseline: true }
  ]
};

// KaTeX Helper
const renderMath = (el) => {
  if (window.renderMathInElement && el) {
    try {
      renderMathInElement(el, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$", right: "$", display: false },
          { left: "\\(", right: "\\)", display: false },
          { left: "\\[", right: "\\]", display: true }
        ],
        throwOnError: false
      });
    } catch (e) {
      console.warn("KaTeX render note:", e);
    }
  }
};

// --- 2. AUDIO SYNTHESIZER (Web Audio API) -----------------------------------
class SoundFx {
  constructor() {
    this.ctx = null;
    this.muted = false;
  }
  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
  }
  playClick() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(600, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(850, this.ctx.currentTime + 0.04);
    gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.04);
  }
  playWhitenChime() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.05);
      gain.gain.setValueAtTime(0.04, this.ctx.currentTime + idx * 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + idx * 0.05 + 0.25);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(this.ctx.currentTime + idx * 0.05);
      osc.stop(this.ctx.currentTime + idx * 0.05 + 0.26);
    });
  }
  playAlert() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(220, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(70, this.ctx.currentTime + 0.22);
    gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.22);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.22);
  }
}
const sfx = new SoundFx();

// --- 3. CANVAS ENGINE 1: INTERACTIVE FOLD & PURGING STUDIO -------------------
class FoldStudioCanvas {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext("2d");
    this.method = "standard"; // standard, blocked, gap, rolling, pw
    this.nPoints = 140;
    this.nFolds = 5;
    this.activeTestFold = 1;
    this.gap = 3;
    this.scanX = -1;
    this.isScanning = false;
    this.particles = [];
    this.rollingCut = 70;
    this.initPoints();
    this.resize();
    window.addEventListener("resize", () => this.resize());
    this.animate();
  }

  resize() {
    if (!this.canvas) return;
    const rect = this.canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    let w = rect.width || this.canvas.offsetWidth || this.canvas.parentElement?.clientWidth || 800;
    let h = rect.height || this.canvas.offsetHeight || 280;
    if (w < 100) w = 800;
    if (h < 100) h = 280;

    this.canvas.width = Math.round(w * dpr);
    this.canvas.height = Math.round(h * dpr);
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    this.width = w;
    this.height = h;
  }

  initPoints() {
    this.points = [];
    let y1 = 0, y2 = 0;
    for (let t = 0; t < this.nPoints; t++) {
      const noise = (Math.random() - 0.5) * 1.5;
      const y = 0.85 * y1 - 0.35 * y2 + noise;
      y2 = y1; y1 = y;
      
      const foldInterleaved = (t % this.nFolds) + 1;
      const foldBlocked = Math.min(this.nFolds, Math.floor((t / this.nPoints) * this.nFolds) + 1);

      this.points.push({
        t: t,
        val: y,
        foldInterleaved: foldInterleaved,
        foldBlocked: foldBlocked,
        isPurged: false,
        isWhitened: false,
        alpha: 1.0,
        yOffset: 0
      });
    }
    this.updateMethodLogic();
  }

  updateMethodLogic() {
    const isBlocked = (this.method === "blocked");
    const isRolling = (this.method === "rolling");

    this.points.forEach(p => {
      const currentFold = isBlocked ? p.foldBlocked : p.foldInterleaved;
      p.currentFold = currentFold;

      if (isRolling) {
        p.isTest = (p.t > this.rollingCut && p.t <= this.rollingCut + 14);
        p.isTrain = (p.t <= this.rollingCut);
        p.isPurged = false;
      } else {
        p.isTest = (currentFold === this.activeTestFold);
        p.isTrain = !p.isTest;
      }
    });

    const testIndices = this.points.filter(p => p.isTest).map(p => p.t);

    this.points.forEach(p => {
      if (this.method === "gap" && p.isTrain) {
        p.isPurged = testIndices.some(teT => Math.abs(p.t - teT) <= this.gap);
      } else {
        p.isPurged = false;
      }
      p.isWhitened = (this.method === "pw");
    });

    this.updateStudioMetrics();
  }

  updateStudioMetrics() {
    const totalTrain = this.points.filter(p => p.isTrain).length;
    const usedTrain = this.points.filter(p => p.isTrain && !p.isPurged).length;
    const pct = totalTrain > 0 ? Math.round((usedTrain / totalTrain) * 100) : 100;

    const degEl = document.getElementById("studioDataRetained");
    const testStatusEl = document.getElementById("studioTestStatus");
    const warningEl = document.getElementById("studioWarningBox");

    if (degEl) degEl.innerText = `${pct}% (${usedTrain}/${totalTrain} points)`;
    
    if (testStatusEl) {
      if (this.method === "standard") {
        testStatusEl.innerHTML = `<span class="badge badge-primary">Standard 5-Fold (Theorem 1 Holds Asymptotically)</span>`;
        if (warningEl) warningEl.innerHTML = `ℹ️ <strong>Bergmeir et al. (2018):</strong> Interleaved folds preserve full sample variance. Because error process is white noise ($A3$), time ordering is not violated.`;
      } else if (this.method === "blocked") {
        testStatusEl.innerHTML = `<span class="badge badge-amber">Blocked CV (High Variance, Severe Positive Bias)</span>`;
        if (warningEl) warningEl.innerHTML = `⚠️ <strong>Non-Dependent Blocked CV Trap:</strong> Contiguous chunks artificially reduce training sample length, producing heavy positive bias ($+11.1\%$ to $+28.5\%$) in Table 1!`;
      } else if (this.method === "gap") {
        testStatusEl.innerHTML = `<span class="badge badge-rose">Gap-CV (Purged ${100 - pct}\% Data)</span>`;
        if (warningEl) warningEl.innerHTML = `⚠️ <strong>Rank Deficiency Hazard:</strong> Dropping observations around test points destroys degrees of freedom. Explodes to $108.9\%$ error at $h=6$!`;
      } else if (this.method === "rolling") {
        testStatusEl.innerHTML = `<span class="badge badge-cyan">Rolling Origin (Sequential Horizon Windowing)</span>`;
        if (warningEl) warningEl.innerHTML = `ℹ️ <strong>Rolling Origin Evaluation:</strong> Strictly forward training. Computationally expensive and high variance during early small windows.`;
      } else if (this.method === "pw") {
        testStatusEl.innerHTML = `<span class="badge badge-emerald">Pre-Whitened CV (100% Data + A3 Restored)</span>`;
        if (warningEl) warningEl.innerHTML = `✅ <strong>Novel In-Fold Inversion:</strong> Applies in-fold causal AR($P$) operator $\\hat{\\Phi}(B)$. Restores Ljung-Box $p = 0.4778$ with zero data loss!`;
      }
      if (window.renderMathInElement) renderMath(warningEl);
    }
  }

  triggerPurgeAnimation() {
    sfx.playAlert();
    this.points.filter(p => p.isPurged).forEach(p => {
      const x = (p.t / (this.nPoints - 1)) * (this.width - 60) + 30;
      const y = this.height / 2 - p.val * 22;
      for (let i = 0; i < 5; i++) {
        this.particles.push({
          x: x, y: y,
          vx: (Math.random() - 0.5) * 3,
          vy: (Math.random() - 1.2) * 2.5,
          alpha: 1,
          color: "#f43f5e"
        });
      }
    });
  }

  triggerWhiteningScan() {
    sfx.playWhitenChime();
    this.isScanning = true;
    this.scanX = 0;
  }

  animate() {
    if (!this.ctx) return;
    this.ctx.clearRect(0, 0, this.width, this.height);

    // Background grid
    this.ctx.strokeStyle = "rgba(255, 255, 255, 0.04)";
    this.ctx.lineWidth = 1;
    for (let y = 30; y < this.height; y += 40) {
      this.ctx.beginPath();
      this.ctx.moveTo(30, y);
      this.ctx.lineTo(this.width - 30, y);
      this.ctx.stroke();
    }

    const midY = this.height / 2;
    this.ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
    this.ctx.beginPath();
    this.ctx.moveTo(30, midY);
    this.ctx.lineTo(this.width - 30, midY);
    this.ctx.stroke();

    // Connecting time-series line
    this.ctx.strokeStyle = "rgba(99, 102, 241, 0.45)";
    this.ctx.lineWidth = 1.5;
    this.ctx.beginPath();
    let started = false;
    this.points.forEach(p => {
      const x = (p.t / (this.nPoints - 1)) * (this.width - 60) + 30;
      const y = midY - p.val * 22;
      if (!p.isPurged) {
        if (!started) { this.ctx.moveTo(x, y); started = true; }
        else { this.ctx.lineTo(x, y); }
      }
    });
    this.ctx.stroke();

    // Draw observation beads
    this.points.forEach(p => {
      const x = (p.t / (this.nPoints - 1)) * (this.width - 60) + 30;
      let y = midY - p.val * 22;

      if (p.isPurged) {
        p.alpha = Math.max(0.12, p.alpha - 0.02);
        p.yOffset = Math.min(25, p.yOffset + 0.8);
        y += p.yOffset;
      } else {
        p.alpha = Math.min(1.0, p.alpha + 0.04);
        p.yOffset = Math.max(0, p.yOffset - 1.2);
      }

      this.ctx.save();
      this.ctx.globalAlpha = p.alpha;

      if (p.isTest) {
        this.ctx.fillStyle = "#f59e0b";
        this.ctx.shadowColor = "#f59e0b";
        this.ctx.shadowBlur = 8;
        this.ctx.beginPath();
        this.ctx.arc(x, y, 5, 0, Math.PI * 2);
        this.ctx.fill();
      } else if (p.isPurged) {
        this.ctx.fillStyle = "#ef4444";
        this.ctx.beginPath();
        this.ctx.arc(x, y, 3, 0, Math.PI * 2);
        this.ctx.fill();
      } else if (this.method === "pw") {
        this.ctx.fillStyle = "#10b981";
        this.ctx.shadowColor = "#10b981";
        this.ctx.shadowBlur = 5;
        this.ctx.beginPath();
        this.ctx.arc(x, y, 4, 0, Math.PI * 2);
        this.ctx.fill();
      } else if (this.method === "blocked") {
        this.ctx.fillStyle = "#38bdf8";
        this.ctx.beginPath();
        this.ctx.arc(x, y, 3.5, 0, Math.PI * 2);
        this.ctx.fill();
      } else {
        this.ctx.fillStyle = "#6366f1";
        this.ctx.beginPath();
        this.ctx.arc(x, y, 3.5, 0, Math.PI * 2);
        this.ctx.fill();
      }

      this.ctx.restore();
    });

    // Whitening sweep scan
    if (this.isScanning) {
      this.scanX += 9;
      const grad = this.ctx.createLinearGradient(this.scanX - 60, 0, this.scanX, 0);
      grad.addColorStop(0, "rgba(16, 185, 129, 0)");
      grad.addColorStop(0.5, "rgba(16, 185, 129, 0.45)");
      grad.addColorStop(1, "rgba(56, 189, 248, 0.9)");

      this.ctx.fillStyle = grad;
      this.ctx.fillRect(this.scanX - 60, 20, 60, this.height - 40);

      this.ctx.strokeStyle = "#38bdf8";
      this.ctx.lineWidth = 2.5;
      this.ctx.beginPath();
      this.ctx.moveTo(this.scanX, 20);
      this.ctx.lineTo(this.scanX, this.height - 20);
      this.ctx.stroke();

      if (this.scanX > this.width + 70) {
        this.isScanning = false;
      }
    }

    // Purging dust animation
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const part = this.particles[i];
      part.x += part.vx;
      part.y += part.vy;
      part.alpha -= 0.025;
      if (part.alpha <= 0) {
        this.particles.splice(i, 1);
      } else {
        this.ctx.save();
        this.ctx.globalAlpha = part.alpha;
        this.ctx.fillStyle = part.color;
        this.ctx.beginPath();
        this.ctx.arc(part.x, part.y, 2.5, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.restore();
      }
    }

    requestAnimationFrame(() => this.animate());
  }
}

// --- 4. CANVAS ENGINE 2: DYNAMIC NEURAL NETWORK ARCHITECTURE VISUALIZER ------
class NNCanvasVisualizer {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext("2d");
    this.p = 3;
    this.h = 6;
    this.pulse = 0;
    this.signals = [];
    this.width = 800;
    this.height = 260;
    this.resize();
    window.addEventListener("resize", () => this.resize());
    this.animate();
  }

  resize() {
    if (!this.canvas) return;
    const rect = this.canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    let w = rect.width;
    let h = rect.height;

    if (!w || w <= 0) w = this.canvas.offsetWidth || this.canvas.parentElement?.clientWidth || 800;
    if (!h || h <= 0) h = this.canvas.offsetHeight || 260;
    if (w < 100) w = 800;
    if (h < 100) h = 260;

    this.canvas.width = Math.round(w * dpr);
    this.canvas.height = Math.round(h * dpr);
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    this.width = w;
    this.height = h;
  }

  updateConfig(p, h) {
    this.p = Math.max(1, Math.min(10, p));
    this.h = Math.max(1, Math.min(14, h));
    this.signals = [];
  }

  triggerForwardPass() {
    sfx.playWhitenChime();
    for (let i = 1; i <= this.p; i++) {
      for (let j = 1; j <= this.h; j++) {
        this.signals.push({
          stage: 1,
          inIdx: i,
          hidIdx: j,
          progress: 0,
          speed: 0.025 + Math.random() * 0.02,
          color: "#818cf8"
        });
      }
    }
  }

  animate() {
    if (!this.ctx) return;

    if (!this.width || this.width < 100 || !this.height || this.height < 100) {
      this.resize();
    }
    if (!this.width || this.width < 100) {
      requestAnimationFrame(() => this.animate());
      return;
    }

    this.ctx.clearRect(0, 0, this.width, this.height);
    this.pulse += 0.035;

    const leftX = Math.max(80, this.width * 0.12);
    const midX = this.width / 2;
    const rightX = this.width - Math.max(80, this.width * 0.12);

    const inputYStep = (this.height - 70) / (this.p + 1);
    const hiddenYStep = (this.height - 70) / (this.h + 1);
    const outY = this.height / 2 + 10;

    // Layer Section Headers
    this.ctx.fillStyle = "rgba(148, 163, 184, 0.7)";
    this.ctx.font = "600 11px Plus Jakarta Sans, sans-serif";
    this.ctx.textAlign = "center";
    this.ctx.fillText(`INPUT LAYER (p = ${this.p})`, leftX, 22);
    this.ctx.fillText(`HIDDEN LAYER (H = ${this.h})`, midX, 22);
    this.ctx.fillText(`OUTPUT LAYER`, rightX, 22);

    // Ambient signal spawning
    if (Math.random() < 0.20 && this.signals.length < 35) {
      const inIdx = Math.floor(Math.random() * this.p) + 1;
      const hidIdx = Math.floor(Math.random() * this.h) + 1;
      this.signals.push({
        stage: 1,
        inIdx: inIdx,
        hidIdx: hidIdx,
        progress: 0,
        speed: 0.018 + Math.random() * 0.015,
        color: "#818cf8"
      });
    }

    // 1. Draw Synaptic Lines (Input -> Hidden)
    for (let i = 1; i <= this.p; i++) {
      const inY = 35 + i * inputYStep;
      for (let j = 1; j <= this.h; j++) {
        const hidY = 35 + j * hiddenYStep;
        const wave = 0.10 + 0.08 * Math.sin(this.pulse + i * 0.6 + j * 0.4);
        this.ctx.strokeStyle = `rgba(99, 102, 241, ${wave})`;
        this.ctx.lineWidth = 1;
        this.ctx.beginPath();
        this.ctx.moveTo(leftX, inY);
        this.ctx.lineTo(midX, hidY);
        this.ctx.stroke();
      }
    }

    // 2. Draw Synaptic Lines (Hidden -> Output)
    for (let j = 1; j <= this.h; j++) {
      const hidY = 35 + j * hiddenYStep;
      const wave = 0.14 + 0.10 * Math.sin(this.pulse + j * 0.7);
      this.ctx.strokeStyle = `rgba(56, 189, 248, ${wave})`;
      this.ctx.lineWidth = 1.3;
      this.ctx.beginPath();
      this.ctx.moveTo(midX, hidY);
      this.ctx.lineTo(rightX, outY);
      this.ctx.stroke();
    }

    // 3. Draw & Advance Animated Signal Packets
    for (let s = this.signals.length - 1; s >= 0; s--) {
      const sig = this.signals[s];
      sig.progress += sig.speed;

      if (sig.stage === 1) {
        const inY = 35 + sig.inIdx * inputYStep;
        const hidY = 35 + sig.hidIdx * hiddenYStep;
        const curX = leftX + (midX - leftX) * sig.progress;
        const curY = inY + (hidY - inY) * sig.progress;

        this.ctx.save();
        this.ctx.fillStyle = sig.color;
        this.ctx.shadowColor = sig.color;
        this.ctx.shadowBlur = 8;
        this.ctx.beginPath();
        this.ctx.arc(curX, curY, 3, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.restore();

        if (sig.progress >= 1.0) {
          sig.stage = 2;
          sig.progress = 0;
          sig.speed = 0.022 + Math.random() * 0.015;
          sig.color = "#38bdf8";
        }
      } else if (sig.stage === 2) {
        const hidY = 35 + sig.hidIdx * hiddenYStep;
        const curX = midX + (rightX - midX) * sig.progress;
        const curY = hidY + (outY - hidY) * sig.progress;

        this.ctx.save();
        this.ctx.fillStyle = sig.color;
        this.ctx.shadowColor = "#38bdf8";
        this.ctx.shadowBlur = 8;
        this.ctx.beginPath();
        this.ctx.arc(curX, curY, 3.5, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.restore();

        if (sig.progress >= 1.0) {
          this.signals.splice(s, 1);
        }
      }
    }

    // 4. Draw Input Neurons
    for (let i = 1; i <= this.p; i++) {
      const inY = 35 + i * inputYStep;
      this.ctx.save();
      this.ctx.fillStyle = "#818cf8";
      this.ctx.shadowColor = "#818cf8";
      this.ctx.shadowBlur = 10;
      this.ctx.beginPath();
      this.ctx.arc(leftX, inY, 8, 0, Math.PI * 2);
      this.ctx.fill();

      this.ctx.fillStyle = "#ffffff";
      this.ctx.beginPath();
      this.ctx.arc(leftX, inY, 3, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.restore();

      this.ctx.fillStyle = "#cbd5e1";
      this.ctx.font = "600 11px JetBrains Mono, monospace";
      this.ctx.textAlign = "right";
      this.ctx.fillText(`y_{t-${i}}`, leftX - 14, inY + 4);
    }

    // 5. Draw Hidden Neurons
    for (let j = 1; j <= this.h; j++) {
      const hidY = 35 + j * hiddenYStep;
      const glow = 8 + 5 * Math.sin(this.pulse + j);

      this.ctx.save();
      this.ctx.fillStyle = "#06b6d4";
      this.ctx.shadowColor = "#06b6d4";
      this.ctx.shadowBlur = glow;
      this.ctx.beginPath();
      this.ctx.arc(midX, hidY, 9, 0, Math.PI * 2);
      this.ctx.fill();

      this.ctx.fillStyle = "#ffffff";
      this.ctx.beginPath();
      this.ctx.arc(midX, hidY, 3.5, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.restore();
    }

    // 6. Draw Output Neuron
    const outGlow = 10 + 6 * Math.sin(this.pulse * 1.5);
    this.ctx.save();
    this.ctx.fillStyle = "#10b981";
    this.ctx.shadowColor = "#10b981";
    this.ctx.shadowBlur = outGlow;
    this.ctx.beginPath();
    this.ctx.arc(rightX, outY, 12, 0, Math.PI * 2);
    this.ctx.fill();

    this.ctx.fillStyle = "#ffffff";
    this.ctx.beginPath();
    this.ctx.arc(rightX, outY, 5, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.restore();

    this.ctx.fillStyle = "#34d399";
    this.ctx.font = "bold 12px JetBrains Mono, monospace";
    this.ctx.textAlign = "left";
    this.ctx.fillText("ŷ_t", rightX + 18, outY + 4);

    requestAnimationFrame(() => this.animate());
  }
}

// --- 5. APPLICATION CONTROLLER ----------------------------------------------
class ChronosApp {
  constructor() {
    this.currentTab = "studio";
    this.charts = {};
    this.init();
  }

  init() {
    this.bindNavigation();
    this.bindSoundToggle();
    this.bindStudioControls();
    this.bindLinearControls();
    this.bindNeuralControls();
    this.bindSunspotControls();
    this.bindWhitenessControls();
    this.bindArenaControls();
    this.bindJointControls();
    this.bindLatexExporter();

    setTimeout(() => {
      this.foldStudio = new FoldStudioCanvas("timelineCanvas");
      this.nnVisualizer = new NNCanvasVisualizer("nnCanvas");
      this.initAllViews();
    }, 80);
  }

  bindNavigation() {
    const tabs = document.querySelectorAll(".nav-tab");
    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        sfx.playClick();
        const target = tab.dataset.tab;
        this.switchTab(target);
      });
    });
  }

  switchTab(tabId) {
    this.currentTab = tabId;
    document.querySelectorAll(".nav-tab").forEach(t => {
      t.classList.toggle("active", t.dataset.tab === tabId);
    });

    document.querySelectorAll(".tab-view").forEach(view => {
      view.classList.toggle("hidden", view.id !== `view-${tabId}`);
      if (view.id === `view-${tabId}`) {
        view.classList.add("animate-fade-in");
      }
    });

    // Tab-specific initializations with canvas resize recovery
    if (tabId === "studio") {
      setTimeout(() => { if (this.foldStudio) this.foldStudio.resize(); }, 40);
    }
    if (tabId === "linear") this.updateLinearView();
    if (tabId === "neural") {
      setTimeout(() => {
        if (this.nnVisualizer) this.nnVisualizer.resize();
        this.updateNeuralView();
      }, 40);
    }
    if (tabId === "sunspots") this.updateSunspotView();
    if (tabId === "whiteness") this.updateWhitenessView();
    if (tabId === "arena") this.updateArenaView();
    if (tabId === "joint") this.updateJointView();
    if (tabId === "synthesis") this.updateSynthesisView();
  }

  bindSoundToggle() {
    const toggleBtn = document.getElementById("soundToggleBtn");
    if (!toggleBtn) return;
    toggleBtn.addEventListener("click", () => {
      sfx.muted = !sfx.muted;
      toggleBtn.innerHTML = sfx.muted 
        ? `<i data-lucide="volume-x" class="w-4 h-4 text-slate-400"></i> Audio Off`
        : `<i data-lucide="volume-2" class="w-4 h-4 text-emerald-400"></i> Audio On`;
      lucide.createIcons();
      if (!sfx.muted) sfx.playClick();
    });
  }

  // --- TAB 1: STUDIO CONTROLS ---
  bindStudioControls() {
    const methodBtns = document.querySelectorAll(".studio-method-btn");
    methodBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        sfx.playClick();
        methodBtns.forEach(b => b.classList.remove("active", "bg-indigo-600"));
        btn.classList.add("active", "bg-indigo-600");
        const m = btn.dataset.method;
        if (this.foldStudio) {
          this.foldStudio.method = m;
          this.foldStudio.updateMethodLogic();
          if (m === "gap") this.foldStudio.triggerPurgeAnimation();
          if (m === "pw") this.foldStudio.triggerWhiteningScan();
        }
      });
    });

    const gapSlider = document.getElementById("studioGapSlider");
    const gapVal = document.getElementById("studioGapVal");
    if (gapSlider) {
      gapSlider.addEventListener("input", (e) => {
        const val = parseInt(e.target.value);
        if (gapVal) gapVal.innerText = val;
        if (this.foldStudio) {
          this.foldStudio.gap = val;
          this.foldStudio.updateMethodLogic();
        }
      });
    }

    const foldSelect = document.getElementById("studioFoldSelect");
    if (foldSelect) {
      foldSelect.addEventListener("change", (e) => {
        sfx.playClick();
        if (this.foldStudio) {
          this.foldStudio.activeTestFold = parseInt(e.target.value);
          this.foldStudio.updateMethodLogic();
        }
      });
    }

    const reGenBtn = document.getElementById("studioReGenBtn");
    if (reGenBtn) {
      reGenBtn.addEventListener("click", () => {
        sfx.playClick();
        if (this.foldStudio) this.foldStudio.initPoints();
      });
    }
  }

  // --- TAB 2: LINEAR LAB (TABLE 1 REPLICATION) ---
  bindLinearControls() {
    const dgpSelect = document.getElementById("linearDGPSelect");
    const metricSelect = document.getElementById("linearMetricSelect");

    if (dgpSelect) {
      dgpSelect.addEventListener("change", () => {
        sfx.playClick();
        this.updateLinearView();
      });
    }
    if (metricSelect) {
      metricSelect.addEventListener("change", () => {
        sfx.playClick();
        this.updateLinearView();
      });
    }
  }

  updateLinearView() {
    const dgp = document.getElementById("linearDGPSelect")?.value || "AR(3)";
    const metric = document.getElementById("linearMetricSelect")?.value || "rmse_mapae";
    const metricLabel = {
      rmse_mapae: "RMSE MAPAE (% relative error to true Out-Set)",
      rmse_mpae: "RMSE MPAE (% Bias to true Out-Set)",
      mae_mapae: "MAE MAPAE (% error to true Out-Set)",
      mae_mpae: "MAE MPAE (% Bias to true Out-Set)"
    }[metric];

    const data = DB.table1[dgp];
    if (!data) return;

    const lags = ["AR(1)", "AR(2)", "AR(3)", "AR(4)", "AR(5)"];
    const methods = ["5-fold CV", "LOOCV", "nonDepCV", "OOS"];
    const colors = ["#6366f1", "#10b981", "#ef4444", "#f59e0b"];

    const datasets = methods.map((m, idx) => {
      const rows = data[m] || [];
      return {
        label: m === "nonDepCV" ? "nonDepCV (Blocked)" : m,
        data: lags.map(l => {
          const match = rows.find(r => r.lag === l);
          return match ? match[metric] : 0;
        }),
        backgroundColor: colors[idx],
        borderColor: colors[idx],
        borderRadius: 4
      };
    });

    const ctx = document.getElementById("linearChart");
    if (ctx) {
      if (this.charts.linear) this.charts.linear.destroy();
      this.charts.linear = new Chart(ctx, {
        type: "bar",
        data: { labels: lags, datasets: datasets },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { labels: { color: "#94a3b8" } },
            tooltip: { callbacks: { label: (c) => ` ${c.dataset.label}: ${c.raw}%` } }
          },
          scales: {
            x: { ticks: { color: "#94a3b8" }, grid: { display: false } },
            y: { 
              ticks: { color: "#94a3b8" }, 
              grid: { color: "rgba(255,255,255,0.06)" },
              title: { display: true, text: metricLabel, color: "#64748b" }
            }
          }
        }
      });
    }

    // Dynamic takeaway card
    const takeawayEl = document.getElementById("linearTakeawayText");
    if (takeawayEl) {
      if (dgp === "AR(3)") {
        takeawayEl.innerHTML = `<strong>DGP: AR(3) [1,000 MC Trials]:</strong> Standard 5-Fold CV achieves lowest MAPAE ($7.00\%$) with virtually zero bias ($MPAE = -0.09\%$ at $AR(2)$). Blocked nonDepCV degrades up to $30.04\%$ with severe positive bias ($+28.5\%$) because blocking arbitrarily curtails sample history.`;
      } else if (dgp === "MA(1)") {
        takeawayEl.innerHTML = `<strong>DGP: MA(1) [Moving Average Dynamics]:</strong> Assumption A3 is slightly violated. NonDepCV collapses with massive $49.52\%$ error and $+47.61\%$ positive bias. 5-Fold CV remains well-calibrated ($10.77\%$ to $12.31\%$) with minimal bias.`;
      } else {
        takeawayEl.innerHTML = `<strong>DGP: AR(12) [Long-Memory AR Process]:</strong> Highly parameterized system. Standard CV and LOOCV track generalization error smoothly, whereas nonDepCV exhibits convergence failures and severe parameter instability.`;
      }
      if (window.renderMathInElement) renderMath(takeawayEl);
    }
  }

  // --- TAB 3: NEURAL STUDIO (TABLE 2 REPLICATION) ---
  bindNeuralControls() {
    const dgpSelect = document.getElementById("neuralDGPSelect");
    const pSlider = document.getElementById("nnInputLags");
    const hSlider = document.getElementById("nnHiddenNodes");
    const pVal = document.getElementById("nnInputLagsVal");
    const hVal = document.getElementById("nnHiddenNodesVal");

    const updateNN = () => {
      const p = parseInt(pSlider.value);
      const h = parseInt(hSlider.value);
      if (pVal) pVal.innerText = p;
      if (hVal) hVal.innerText = h;
      if (this.nnVisualizer) this.nnVisualizer.updateConfig(p, h);
    };

    if (pSlider) pSlider.addEventListener("input", updateNN);
    if (hSlider) hSlider.addEventListener("input", updateNN);

    const burstBtn = document.getElementById("nnForwardPassBtn");
    if (burstBtn) {
      burstBtn.addEventListener("click", () => {
        if (this.nnVisualizer) this.nnVisualizer.triggerForwardPass();
      });
    }

    if (dgpSelect) {
      dgpSelect.addEventListener("change", () => {
        sfx.playClick();
        this.updateNeuralView();
      });
    }
  }

  updateNeuralView() {
    const dgp = document.getElementById("neuralDGPSelect")?.value || "AR(3)";
    const data = DB.table2[dgp];
    if (!data) return;

    const lags = ["AR(1)", "AR(2)", "AR(3)", "AR(4)", "AR(5)"];
    const methods = ["5-fold CV", "LOOCV", "nonDepCV", "OOS"];
    const colors = ["#6366f1", "#10b981", "#ef4444", "#f59e0b"];

    const datasets = methods.map((m, idx) => {
      const rows = data[m] || [];
      return {
        label: m === "nonDepCV" ? "nonDepCV (Blocked)" : m,
        data: lags.map(l => {
          const match = rows.find(r => r.lag === l);
          return match ? match.rmse_mapae : 0;
        }),
        backgroundColor: colors[idx],
        borderColor: colors[idx],
        borderRadius: 4
      };
    });

    const ctx = document.getElementById("neuralChart");
    if (ctx) {
      if (this.charts.neural) this.charts.neural.destroy();
      this.charts.neural = new Chart(ctx, {
        type: "bar",
        data: { labels: lags, datasets: datasets },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { labels: { color: "#94a3b8" } },
            tooltip: { callbacks: { label: (c) => ` ${c.dataset.label}: ${c.raw}% MAPAE` } }
          },
          scales: {
            x: { ticks: { color: "#94a3b8" }, grid: { display: false } },
            y: { ticks: { color: "#94a3b8" }, grid: { color: "rgba(255,255,255,0.06)" }, title: { display: true, text: "RMSE MAPAE (%)", color: "#64748b" } }
          }
        }
      });
    }
  }

  // --- TAB 4: SUNSPOTS OBSERVATORY & 1,560 GRID EXPLORER ---
  bindSunspotControls() {
    const transformToggle = document.getElementById("sunspotTransformToggle");
    if (transformToggle) {
      transformToggle.addEventListener("click", () => {
        sfx.playClick();
        this.sunspotTransformedMode = !this.sunspotTransformedMode;
        transformToggle.innerText = this.sunspotTransformedMode ? "Showing: Tong (1993) Transform" : "Showing: Raw Sunspot Counts";
        this.renderSunspotTrajectoryChart();
      });
    }
  }

  updateSunspotView() {
    this.renderSunspotTrajectoryChart();
    this.renderGridScatterChart();
  }

  renderSunspotTrajectoryChart() {
    const ctx = document.getElementById("sunspotChart");
    if (!ctx) return;

    const values = this.sunspotTransformedMode ? DB.sunspotTransformed : DB.sunspotRaw;
    const inSet = values.slice(0, 203);
    const outSet = [ ...Array(202).fill(null), values[202], ...values.slice(203) ];

    if (this.charts.sunspot) this.charts.sunspot.destroy();
    this.charts.sunspot = new Chart(ctx, {
      type: "line",
      data: {
        labels: DB.years,
        datasets: [
          { label: "In-Set Training Period (1700-1902, N=203)", data: inSet, borderColor: "#38bdf8", borderWidth: 1.8, pointRadius: 0, fill: false },
          { label: "Unseen Out-Set Test Truth (1903-1988, N=86)", data: outSet, borderColor: "#f59e0b", borderWidth: 2.2, pointRadius: 0, fill: false }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { labels: { color: "#94a3b8" } } },
        scales: {
          x: { ticks: { color: "#64748b", maxTicksLimit: 14 }, grid: { display: false } },
          y: { ticks: { color: "#64748b" }, grid: { color: "rgba(255,255,255,0.06)" } }
        }
      }
    });
  }

  renderGridScatterChart() {
    const ctx = document.getElementById("gridScatterChart");
    if (!ctx) return;

    const pData = DB.sunspotGrid.pSummary;
    const labels = pData.map(d => `p=${d.p}`);
    const cvRMSE = pData.map(d => d.mean_cv);
    const outRMSE = pData.map(d => d.mean_out);

    if (this.charts.grid) this.charts.grid.destroy();
    this.charts.grid = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          { label: "Average 5-Fold CV RMSE across 1,560 Configs", data: cvRMSE, borderColor: "#6366f1", backgroundColor: "rgba(99,102,241,0.2)", fill: true, tension: 0.2 },
          { label: "Average Out-Set Test RMSE across 1,560 Configs", data: outRMSE, borderColor: "#f59e0b", borderDash: [4, 4], borderWidth: 2, pointRadius: 3 }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { labels: { color: "#94a3b8" } } },
        scales: {
          x: { ticks: { color: "#94a3b8" }, grid: { display: false } },
          y: { ticks: { color: "#94a3b8" }, grid: { color: "rgba(255,255,255,0.06)" }, title: { display: true, text: "RMSE", color: "#64748b" } }
        }
      }
    });
  }

  // --- TAB 5: WHITENESS LAB (EXTENSION 1) ---
  bindWhitenessControls() {}

  updateWhitenessView() {
    const ctx = document.getElementById("whitenessACFChart");
    if (!ctx) return;

    const lags = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const rawACF = [1.0, 0.42, 0.31, 0.24, 0.18, 0.14, 0.11, 0.09, 0.08, 0.06, 0.05];
    const whitenedACF = [1.0, 0.088, 0.031, -0.042, 0.025, 0.018, -0.015, 0.022, 0.011, -0.008, 0.014];
    const ciUpper = Array(11).fill(0.165);
    const ciLower = Array(11).fill(-0.165);

    if (this.charts.acf) this.charts.acf.destroy();
    this.charts.acf = new Chart(ctx, {
      type: "bar",
      data: {
        labels: lags,
        datasets: [
          { label: "Raw Out-of-Fold ACF (p = 1.14e-06, Violates A3)", data: rawACF, backgroundColor: "rgba(244, 63, 94, 0.7)", borderRadius: 4 },
          { label: "Pre-Whitened ACF (p = 0.4778, Restores A3)", data: whitenedACF, backgroundColor: "rgba(16, 185, 129, 0.8)", borderRadius: 4 },
          { type: "line", label: "95% Bartlett Threshold", data: ciUpper, borderColor: "#38bdf8", borderDash: [5, 5], borderWidth: 1.5, pointRadius: 0, fill: false },
          { type: "line", data: ciLower, borderColor: "#38bdf8", borderDash: [5, 5], borderWidth: 1.5, pointRadius: 0, fill: false }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { labels: { color: "#94a3b8" } } },
        scales: {
          x: { title: { display: true, text: "Lag", color: "#64748b" }, ticks: { color: "#94a3b8" } },
          y: { min: -0.3, max: 1.0, ticks: { color: "#94a3b8" }, grid: { color: "rgba(255,255,255,0.06)" } }
        }
      }
    });
  }

  // --- TAB 6: MULTI-HORIZON ARENA (EXTENSION 2) ---
  bindArenaControls() {
    const horizonSlider = document.getElementById("arenaHorizonSlider");
    const horizonVal = document.getElementById("arenaHorizonVal");

    this.arenaH = 2;
    if (horizonSlider) {
      horizonSlider.addEventListener("input", (e) => {
        sfx.playClick();
        const h = parseInt(e.target.value);
        this.arenaH = h;
        if (horizonVal) horizonVal.innerText = `h = ${h}`;
        this.updateArenaView();
      });
    }
  }

  updateArenaView() {
    const hKey = `h = ${this.arenaH}`;
    const descEl = document.getElementById("arenaHorizonDesc");
    const container = document.getElementById("arenaLeaderboardContainer");

    if (descEl) {
      const maOrder = this.arenaH - 1;
      descEl.innerHTML = maOrder === 0
        ? `<strong>Horizon $h = 1$:</strong> One-step ahead forecast. Prediction errors are genuine white-noise innovations. <strong>Assumption A3 holds asymptotically!</strong>`
        : `<strong>Horizon $h = ${this.arenaH}$:</strong> Multi-step forecast errors overlap by ${maOrder} steps, mechanically creating an <strong>$\\text{MA}(${maOrder})$ error process</strong>. Assumption A3 is broken by mathematical construction!`;
      if (window.renderMathInElement) renderMath(descEl);
    }

    const items = DB.ext2_mc[hKey] || DB.ext2_mc["h = 2"];
    if (container) {
      let html = "";
      items.forEach((item, idx) => {
        const isWinner = item.winner || (idx === 0);
        const isExploded = item.exploded || (item.mapae > 50);

        html += `
          <div class="glass-panel p-4 flex flex-col justify-between card-hover-lift ${isWinner ? 'border-emerald-500/50 glow-emerald' : ''} ${isExploded ? 'border-rose-500/50 glow-rose' : ''}">
            <div class="flex items-center justify-between mb-2">
              <span class="font-bold text-sm text-slate-200">${item.method}</span>
              ${isWinner ? '<span class="badge badge-emerald">#1 Leader</span>' : ''}
              ${isExploded ? '<span class="badge badge-rose animate-pulse">Exploded!</span>' : ''}
            </div>
            <div class="flex items-baseline gap-2 mb-2">
              <span class="text-2xl font-black ${isWinner ? 'text-emerald-400' : isExploded ? 'text-rose-400' : 'text-slate-100'}">${item.mapae}%</span>
              <span class="text-xs text-slate-400">MAPAE</span>
              ${item.bias !== undefined ? `<span class="text-xs text-slate-500 ml-auto font-mono">Bias: ${item.bias > 0 ? '+' : ''}${item.bias}</span>` : ''}
            </div>
            <div class="progress-bar-container">
              <div class="progress-bar-fill" style="width: ${Math.min(100, Math.max(8, item.mapae * 4))}%; background-color: ${isWinner ? '#10b981' : isExploded ? '#f43f5e' : '#6366f1'}"></div>
            </div>
          </div>
        `;
      });
      container.innerHTML = html;
    }

    // Update Arena Chart
    const ctx = document.getElementById("arenaChart");
    if (ctx) {
      const horizons = ["h = 1", "h = 2", "h = 4"];
      const methods = ["5-Fold CV", "Purged Gap-CV", "PW-CV (Ours)", "Rolling-Origin", "Static OOS"];
      const colors = ["#3b82f6", "#ef4444", "#10b981", "#8b5cf6", "#f59e0b"];

      const datasets = methods.map((m, idx) => {
        const data = horizons.map(h => {
          const row = DB.ext2_mc[h].find(r => r.method === m);
          return row ? row.mapae : 0;
        });
        return { label: m, data: data, backgroundColor: colors[idx], borderRadius: 6 };
      });

      if (this.charts.arena) this.charts.arena.destroy();
      this.charts.arena = new Chart(ctx, {
        type: "bar",
        data: { labels: horizons, datasets: datasets },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { labels: { color: "#94a3b8" } } },
          scales: {
            x: { ticks: { color: "#94a3b8" }, grid: { display: false } },
            y: { ticks: { color: "#94a3b8" }, grid: { color: "rgba(255,255,255,0.06)" }, title: { display: true, text: "MAPAE (%)", color: "#64748b" } }
          }
        }
      });
    }
  }

  // --- TAB 7: JOINT CRITERION CONTROLLER ---
  bindJointControls() {
    const slider = document.getElementById("jointLambdaSlider");
    const valEl = document.getElementById("jointLambdaVal");
    if (slider) {
      slider.addEventListener("input", (e) => {
        const lambda = parseFloat(e.target.value);
        if (valEl) valEl.innerText = lambda.toFixed(2);
        this.updateJointView(lambda);
      });
    }
  }

  updateJointView(currentLambda = 0.5) {
    const row = DB.jointCriterion.find(r => r.lambda === currentLambda) || DB.jointCriterion[3];
    const detailsEl = document.getElementById("jointModelDetails");
    if (detailsEl) {
      detailsEl.innerHTML = `
        <div class="glass-panel p-4 border-indigo-500/40 glow-primary">
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-bold uppercase tracking-wider text-indigo-400">Optimal Model Selected</span>
            <span class="badge ${row.winner ? 'badge-emerald' : 'badge-primary'}">${row.criterion}</span>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-3 my-3">
            <div><span class="text-xs text-slate-400">Input Lags ($p$)</span><p class="text-lg font-bold text-white">${row.pLags}</p></div>
            <div><span class="text-xs text-slate-400">Hidden Units</span><p class="text-lg font-bold text-white">${row.size}</p></div>
            <div><span class="text-xs text-slate-400">Ljung-Box $p$-value</span><p class="text-lg font-bold text-emerald-400">${row.lbP}</p></div>
            <div><span class="text-xs text-slate-400">Unseen Out-Set RMSE</span><p class="text-xl font-black text-emerald-300">${row.outRMSE}</p></div>
          </div>
          <p class="text-xs text-slate-400 mt-1">
            ${row.winner ? '🏆 <strong>Beats Paper Filter:</strong> Achieves Out-Set RMSE <strong>2.543</strong> vs <strong>2.558</strong> (Paper 2-Step) and <strong>2.626</strong> (OOS Holdout)!' : 'Model balanced dynamically across the objective.'}
          </p>
        </div>
      `;
      if (window.renderMathInElement) renderMath(detailsEl);
    }

    const ctx = document.getElementById("jointChart");
    if (ctx) {
      const validRows = DB.jointCriterion.filter(r => r.lambda !== "NA");
      const lambdas = validRows.map(r => r.lambda);
      const outRMSEs = validRows.map(r => r.outRMSE);

      if (this.charts.joint) this.charts.joint.destroy();
      this.charts.joint = new Chart(ctx, {
        type: "line",
        data: {
          labels: lambdas,
          datasets: [
            { label: "Joint Criterion Out-Set RMSE", data: outRMSEs, borderColor: "#10b981", backgroundColor: "rgba(16, 185, 129, 0.15)", pointBackgroundColor: "#10b981", pointRadius: 6, borderWidth: 2.5, fill: true, tension: 0.2 },
            { label: "Paper 2-Step Filter Baseline (2.558)", data: Array(lambdas.length).fill(2.558), borderColor: "#f43f5e", borderDash: [6, 6], borderWidth: 2, pointRadius: 0, fill: false },
            { label: "OOS Holdout Baseline (2.626)", data: Array(lambdas.length).fill(2.626), borderColor: "#f59e0b", borderDash: [4, 4], borderWidth: 1.8, pointRadius: 0, fill: false }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { labels: { color: "#94a3b8" } } },
          scales: {
            x: { title: { display: true, text: "Autocorrelation Penalty Parameter (Lambda)", color: "#64748b" }, ticks: { color: "#94a3b8" } },
            y: { min: 2.4, max: 4.0, ticks: { color: "#94a3b8" }, grid: { color: "rgba(255,255,255,0.06)" } }
          }
        }
      });
    }
  }

  // --- TAB 8: RESEARCH SYNTHESIS & LATEX EXPORTER ---
  bindLatexExporter() {
    const copyBtn = document.getElementById("copyLatexBtn");
    const select = document.getElementById("latexTableSelect");
    if (copyBtn) {
      copyBtn.addEventListener("click", () => {
        sfx.playWhitenChime();
        const code = document.getElementById("latexCodeBlock")?.innerText || "";
        navigator.clipboard.writeText(code).then(() => {
          copyBtn.innerHTML = `<i data-lucide="check" class="w-4 h-4 text-emerald-400"></i> Copied to Clipboard!`;
          lucide.createIcons();
          setTimeout(() => {
            copyBtn.innerHTML = `<i data-lucide="copy" class="w-4 h-4"></i> Copy LaTeX Table Code`;
            lucide.createIcons();
          }, 2000);
        });
      });
    }

    if (select) {
      select.addEventListener("change", () => {
        sfx.playClick();
          });
    }
  }

  updateSynthesisView() {
    const tableChoice = document.getElementById("latexTableSelect")?.value || "table1";
    const codeEl = document.getElementById("latexCodeBlock");
    if (!codeEl) return;

    if (tableChoice === "table1") {
      codeEl.innerText = `% Table 1: Linear Autoregressive & Moving Average Models (Bergmeir et al. 2018)
\\begin{table}[htbp]
\\centering
\\caption{Comparison of Cross-Validation Schemes on Linear Models ($N=100$, 1,000 trials)}
\\begin{tabular}{lcccc}
\\hline
\\textbf{DGP / Method} & \\textbf{Order} & \\textbf{RMSE MAPAE (\\%)} & \\textbf{MPAE Bias (\\%)} & \\textbf{Failed} \\\\
\\hline
AR(3) -- 5-fold CV & AR(2) & 7.00 & -0.09 & 0 \\\\
AR(3) -- LOOCV & AR(2) & 7.22 & -0.27 & 0 \\\\
AR(3) -- nonDepCV & AR(2) & 14.35 & +11.09 & 0 \\\\
AR(3) -- OOS & AR(2) & 15.10 & -1.32 & 0 \\\\
\\hline
\\end{tabular}
\\end{table}`;
    } else if (tableChoice === "table2") {
      codeEl.innerText = `% Table 2: Non-Linear Autoregressive Neural Networks (Bergmeir et al. 2018)
\\begin{table}[htbp]
\\centering
\\caption{Non-Linear Neural Network Model Selection on Simulated Stationary Processes}
\\begin{tabular}{lcccc}
\\hline
\\textbf{DGP / Method} & \\textbf{Order} & \\textbf{RMSE MAPAE (\\%)} & \\textbf{MPAE Bias (\\%)} & \\textbf{Failed} \\\\
\\hline
AR(3) -- 5-fold CV & AR(1) & 11.43 & +4.43 & 0 \\\\
AR(3) -- LOOCV & AR(2) & 10.20 & +2.17 & 0 \\\\
AR(3) -- nonDepCV & AR(1) & 34.55 & +33.53 & 1 \\\\
AR(3) -- OOS & AR(1) & 13.75 & +1.56 & 0 \\\\
\\hline
\\end{tabular}
\\end{table}`;
    } else if (tableChoice === "table3") {
      codeEl.innerText = `% Table 3: Yearly Sunspots (1700--1988) Neural Network Model Selection
\\begin{table}[htbp]
\\centering
\\caption{Empirical Real-World Benchmark on Yearly Sunspot Series ($N=289$)}
\\begin{tabular}{lccccc}
\\hline
\\textbf{Selection Criterion} & \\textbf{Lags ($p$)} & \\textbf{Hidden ($H$)} & \\textbf{Weight Decay} & \\textbf{Out-Set RMSE} \\\\
\\hline
Paper 2-Step Filter & 2 & 14 & 0.050 & 2.558 \\\\
Static OOS Holdout & 3 & 13 & 0.050 & 2.626 \\\\
\\textbf{Joint Pen ($\\lambda=0.5$) [Ours]} & \\textbf{3} & \\textbf{10} & \\textbf{0.100} & \\textbf{2.543} \\\\
\\hline
\\end{tabular}
\\end{table}`;
    } else {
      codeEl.innerText = `% Extensions 1 & 2: Pre-Whitened Multi-Horizon Cross-Validation
\\begin{table}[htbp]
\\centering
\\caption{Extension Benchmark: Multi-Horizon Forecasting ($h=1,2,4$) and In-Fold Whitening}
\\begin{tabular}{lccc}
\\hline
\\textbf{Method} & \\textbf{$h=1$ MAPAE (\\%)} & \\textbf{$h=2$ MAPAE (\\%)} & \\textbf{$h=4$ MAPAE (\\%)} \\\\
\\hline
5-Fold CV & 8.69 & 8.99 & 13.28 \\\\
Purged Gap-CV & 8.69 & 9.65 & 19.14 (rank def.) \\\\
\\textbf{PW-CV (Ours)} & \\textbf{8.84} & \\textbf{8.15} & \\textbf{13.08} \\\\
Rolling-Origin & 12.82 & 13.42 & 14.82 \\\\
Static OOS & 11.72 & 12.95 & 18.22 \\\\
\\hline
\\end{tabular}
\\end{table}`;
    }
  }

  initAllViews() {
    this.updateLinearView();
    this.updateNeuralView();
    this.updateSunspotView();
    this.updateWhitenessView();
    this.updateArenaView();
    this.updateJointView();
    if (window.lucide) lucide.createIcons();
    if (window.renderMathInElement) renderMath(document.body);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  window.app = new ChronosApp();
});
