# Chapter 3 — Data sources and definitions

Data transcribed from official Australian Institute of Health and Welfare (AIHW), *People with disability in Australia 2026*, **Access to health services** and **Summary — Social support**, last updated 30 June 2026. Underlying health/access data refer to ABS Survey of Disability, Ageing and Carers 2022 and people with disability **living in households**.

- Health chapter: https://www.aihw.gov.au/reports/disability/people-with-disability-2026/contents/health/access-to-health-services
- Summary social support: https://www.aihw.gov.au/reports/disability/people-with-disability-2026/contents/summary

## Chart 7 — healthcare service use

`data/07_health_service_usage_pictogram.csv`: 6 categories × 100 person symbols = 600 rows. Each symbol represents **1 percentage point** in the published figure. Precisely 93, 63, 51, 25, 25, and 43 symbols are highlighted for GP, specialist, dental, emergency department, hospital admission, and telehealth respectively. Respondents may use multiple services: do not add service percentages together. “Previous 12 months” refers to 2022 SDAC. Based on prose beneath Figure ACCESS.1.

## Chart 8 — unmet care by selected disability groups

`data/08_unmet_care_by_disability.csv`: 3 groups × 3 services = 9 records. Source AIHW prose accompanying Figures ACCESS.2 and ACCESS.3. Denominator is each *disability group*, not the number of people needing care. Percent shows who at least once needed to see a GP, specialist or dental professional but did not see one. Groups are overlapping: psychosocial or sensory/speech disability are not an exhaustive split of all disability types and may coexist with other disability groups. The generic “all people with disability” baseline is 20% GP, 14% specialist and 19% dental. The original dashboard concept was age vs service, but precise published figures for the 3×3 disability-group grid were directly verified; **this is a documented chart change**.

## Chart 9 — weighted bipartite node-link diagram of reasons for missed care

`data/09_barriers_cost_wait.csv` and `vega/09_barriers_weighted_network.vg.json`: the Vega node-link diagram links three missed healthcare service groups to two main barriers. Its **stroke width** is proportional to the share citing that reason **within that service-specific missed-care cohort**. Links are relationships, **not physical patient flows or comparable counts**. Only the published **cost** and **waiting times/unavailable service** reasons are visualised. Other reasons are omitted. The percentages are among **people who missed the relevant service** at least once, not among all people with disability. Source AIHW prose under Figure ACCESS.2. Differences in denominators mean values should not be used to compare absolute numbers of people or taken as sums to 100%.

## Chart 10 — daily activities assistance patterns

`data/10_assistance_waffle.csv`: exactly 100 tiles. Denominator is people with disability **living in households who required assistance with at least one daily activity**. Source AIHW *Summary* under *Social support*. Formal assistance 57% **includes people who also received informal assistance**; informal-only 33%; none 10%. These three groups are mutually exclusive and sum to 100. Do not confuse with the health-care assistance percentages 56%, 44%, 18%: those cover different questions, may overlap and refer specifically to help with health care.

## Implementation and limitations

- Plot generation: Vega-Lite 5 for Charts 7, 8 and 10; full **Vega 5** for Figure 9 (weighted linkpath transformation), using independently editable JSON specifications.
- Charts use only published percentages; no sample respondent microdata or invented values are plotted. Displayed text and percentages are as rounded by AIHW.
- Custom SVG symbol path used in Chart 7 was authored for this website; no externally copyrighted infographic reused.
- Other chapters use Census, SDAC and NDIA data from different time periods and sample populations, **not** a combined individual-level dataset.
- Browser rendering/hover interactions should be checked via VS Code Live Server and GitHub Pages before submitting.
