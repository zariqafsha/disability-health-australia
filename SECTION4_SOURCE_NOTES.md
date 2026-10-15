# Chapter 4 source & interpretation notes

## Figure 11 — Active NDIS participation

Published source: NDIA *Quarterly Report Q4 2025–26*, Section 1.1, Figure 1 (printed p. 14):
https://ndis.gov.au/media/8796/download?attachment=

| 30 June year | Participants | Net change since previous June |
|---|---:|---:|
| 2022 | 534,655 | — |
| 2023 | 610,502 | +75,847 |
| 2024 | 661,267 | +50,765 |
| 2025 | 739,414 | +78,147 |
| 2026 | 782,013 | +42,599 |

2022–2026 net increase = 247,358 (46.263%). These are end-of-June **active participant stock counts**, not gross new enrollments. 2026 total also confirmed in Appendix D.1. Published charts from the NDIA are not embedded or reused; plotted marks are implemented independently with Vega-Lite.

## Figure 12 — National plan utilisation

A trend was built from the following **matching six-month** reporting periods, not whole years. Percentages are from the National column in each report.

| NDIA report | Actual period | In SIL total | Not in SIL total | All total | Source |
|---|---|---:|---:|---:|---|
| June 2024, D.28 | 1 Oct 2023–31 Mar 2024 | 89% | 71% | 77% | https://www.ndis.gov.au/media/7219/download?attachment= |
| June 2025, D.29 | 1 Oct 2024–31 Mar 2025 | 87% | 68% | 74% | https://ndis.gov.au/media/7893/download?attachment= |
| June 2026, D.29 | 1 Oct 2025–31 Mar 2026 | 87% | 68% | 73% | https://www.ndis.gov.au/media/8793/download?attachment= |

- SIL = Supported Independent Living. Do **not** describe these as utilisation by NDIS support class (Core/Capital/Capacity Building). This is by participant SIL status.
- Utilisation is payment for supports divided by committed funding for the period. This is **not a direct indicator of healthcare availability, quality, or satisfaction**.
- Excludes recent quarter data to allow time for payments claims. Certain participants with in-kind supports, and very short plans under methodology in 2026, are excluded from plan-level measures. Figures may be underestimated.
- Report percentages are rounded to whole percentage points. Caution is needed in explaining 1–4 pp changes over years because method, composition, reporting practices and outstanding claims can change.
- Different SIL and non-SIL participant needs explain why a higher percentage does not in itself indicate better access.
- The `All participants` measure is **not** an unweighted mean of the in-SIL and not-in-SIL rates. Use the official national aggregate as supplied.

## Chart method

Both visualisations use standalone JSON specs saved in `vega/`. Original NDIA chart images/graphics are *not* embedded. CSVs were manually transcribed from published report tables / figure values. `source_url`, reporting dates and source reference are preserved for auditing.
