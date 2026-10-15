# FIT3179 Disability and Health Services in Australia — Section 1 datasets

These three UTF-8 CSV files are tidied, reproducible transcriptions from published Australian Bureau of Statistics (ABS) and Australian Institute of Health and Welfare (AIHW) online data tables, prepared for Vega-Lite/Vega.

## 01_prevalence_trend.csv — Chart 1

**Suggested title:** Disability prevalence in Australia, 2009–2022.

- `year`: year of the ABS Survey of Disability, Ageing and Carers (SDAC). These are survey years, **not** annual observations.
- `prevalence_pct`: percentage of Australia's population with disability (crude rate; not age-standardised).
- `population`: national population represented.
- `source_url`: AIHW report page, Figure **POPULATION.3**, *People with disability* view, *All ages* row.

Values: 2009 18.5%, 2012 18.5%, 2015 18.3%, 2018 17.7%, 2022 21.4%.

AIHW Figure POPULATION.3 includes 2003 too, but this file deliberately begins in 2009 to avoid an inconsistent 2003 number quoted elsewhere in the report. A line chart should use a quantitative x-axis based on `year` so survey gaps are proportionate.

Source: https://www.aihw.gov.au/reports/disability/people-with-disability-2026/contents/disability-population/how-many-people-have-disability

## 02_prevalence_age_sex.csv — Chart 2

**Suggested title:** How does disability prevalence differ by age and sex? (2022)

- `age_group`: ABS published age brackets, preserved, 14 groups.
- `age_order`: explicit ordering from youngest to oldest for Vega-Lite heatmap.
- `sex`: Male / Female, as reported by the ABS 2022 age and sex chart.
- `year`: 2022.
- `prevalence_pct`: percentage **within the specified age-sex population** with disability, NOT proportion of people with disability who belong to that age group.
- `source_url`: ABS published graph table *Disability prevalence by age and sex, 2022*.

Source: https://www.abs.gov.au/statistics/health/disability/disability-ageing-and-carers-australia-summary-findings/2022

## 03_main_health_conditions_treemap.csv — Chart 3

**Suggested title:** Which main health conditions are reported by Australians with disability? (2022)

- `condition_group`: mutually exclusive parent category — physical (75.3%) or mental/behavioural (24.7%).
- `main_condition`: the single main long-term health condition causing the person most problems, **not** every condition a person has, and **not** a disability type.
- `share_of_people_with_disability_pct`: proportion of *all people with disability*, not within-group share. Leaf rows sum to 100.0% after residual calculation.
- `value_type`: Published vs Derived residual.
- `note`: provenance for category.

**Important arithmetic:** `Other physical main conditions` = 75.3 − (27.8 + 8.2 + 7.2 + 5.6 + 5.3 + 4.9 + 2.8) = **13.5%**. `Other mental or behavioural main conditions` = 24.7 − (7.4 + 4.9 + 4.4) = **8.0%**. These are labelled derived residuals, not separately published ABS condition categories. Components are rounded to one decimal, so treat residual as approximate.

The mental condition categories development (4.9%) and behavioural/cognitive/emotional (4.4%) are reported separately in AIHW narrative. ABS reports a combined 9.4% for a similar combined classification; the 0.1 percentage-point mismatch is due to separately rounded figures. Do not imply these two numbers are exact additive substitutes for ABS's combined figure.

**Vega-Lite technical note:** Vega-Lite does not have a built-in treemap layout transform; implement this chart using **Vega** `treemap`, or compute rectangles separately for Vega-Lite. Both Vega and Vega-Lite are permitted for the assignment. Do not use the overlapping Figure POPULATION.7 *all long-term conditions* for a 100% partition.

Source: https://www.aihw.gov.au/reports/disability/people-with-disability-2026/contents/disability-population/how-many-people-have-disability
ABS physical / mental totals: https://www.abs.gov.au/statistics/health/disability/disability-ageing-and-carers-australia-summary-findings/2022

## Dataset choices and limitations

- Source years: 2022 prevalence breakdown and main conditions; historical years 2009–2022 for trend. AIHW report publication 2026 is not the data reference year.
- Standard definition: disability means a limitation, restriction or impairment restricting everyday activities and lasting or expected to last at least six months (ABS SDAC).
- Source percentages are estimates from a sample survey, not exact population counts; confidence intervals exist in the original online ABS/AIHW tables but are omitted for simplicity.
- Changes in survey methods (including the introduction of an online response option in 2022), growing disability awareness and population ageing may affect comparison over time. Avoid implying causes of the rise in the 2022 rate.
- AIHW contains a **2026 report** using **2022 SDAC** data; use 2022 in chart titles.
- These tidy files were transcribed from the publicly displayed tables, rather than from the original XLSX binary (which could not be downloaded in this environment). Verify all values against linked source data if you make subsequent changes.
- If you share or submit the visualisation, cite ABS and AIHW and disclose any AI assistance according to your course instructions.

