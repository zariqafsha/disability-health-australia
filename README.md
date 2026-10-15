# FIT3179 — Disability & Health Services in Australia: Complete four-chapter draft

An editable website prototype containing **12 real-data Vega/Vega-Lite visualisations**:

1. **Disability prevalence across survey years, 2009–2022** — Vega-Lite layered line chart.
2. **Prevalence by age and sex, 2022** — Vega-Lite heatmap with numeric cell labels.
3. **Main health conditions, 2022** — Vega treemap with physical vs mental/behavioural groups.
4. **Assistance needs by Australian state, 2016 and 2021** — interactive Vega-Lite choropleth map (ABS Census).
5. **NDIS active participants, 30 June 2026** — Vega-Lite proportional-symbol map with primary disability selector (NDIA).
6. **NDIS budget utilisation by state, 1 October 2025–31 March 2026** — Vega-Lite tile-grid map with SIL-group selector (NDIA).
7. **Health service use, 2022** — Vega-Lite custom pictogram grid (AIHW).
8. **Unmet health services by disability group, 2022** — Vega-Lite annotated heatmap (AIHW).
9. **Reasons for unmet care, 2022** — Vega weighted bipartite node–link diagram (AIHW).
10. **Who helps with daily activities, 2022** — Vega-Lite waffle chart (AIHW).
11. **NDIS participant growth, June 2022–June 2026** — Vega-Lite area/line chart (NDIA).
12. **National plan utilisation by living-support group, 2024–2026** — Vega-Lite layered interactive multi-line chart (NDIA).

## Open it in Visual Studio Code

1. Unzip the project; keep all files in their folders.
2. In **VS Code**, choose **File → Open Folder** and select the extracted `FIT3179_Disability_Complete_12_Charts` folder.
3. Install the **Live Server** VS Code extension, if necessary.
4. Right-click `index.html` → **Open with Live Server**. (Don't double-click `index.html` from Finder: browsers often block local CSV/JSON loading through `file://`.)
5. Ensure you have internet access: Vega, Vega-Lite, Vega-Embed and the fonts are loaded from CDNs.
6. Hover over points, heatmap cells or treemap rectangles to inspect the data. Use the three-dot menu above charts for export/source/editor options.

## File structure

```
index.html                              layout and storytelling
style.css                               responsive styling and typography
js/main.js                              load JSON chart specs; size treemap
vega/01_prevalence_trend.vl.json         first Vega-Lite chart
vega/02_age_sex_heatmap.vl.json         second Vega-Lite chart
vega/03_main_conditions_treemap.vg.json third chart; uses Vega, not Vega-Lite
vega/04_assistance_choropleth.vl.json     choropleth with year selector
vega/05_ndis_symbol_map.vl.json          symbol map with primary disability selector
vega/06_ndis_utilisation_tile_map.vl.json tile-grid with participant group selector
data/*.csv                              published data extracted and cleaned
 data/03_treemap_nodes.json             hierarchy derived from main-conditions CSV
 data/ORIGINAL_README.md                source notes and data dictionary
```

## Sources, comparability and limitations

- ABS, *Disability, Ageing and Carers, Australia: Summary of Findings, 2022*: https://www.abs.gov.au/statistics/health/disability/disability-ageing-and-carers-australia-summary-findings/2022
- AIHW, *People with disability in Australia 2026 – How many people have disability?* (analysing ABS 2022 SDAC): https://www.aihw.gov.au/reports/disability/people-with-disability-2026/contents/disability-population/how-many-people-have-disability
- Each `*.csv` includes a `source_url` where applicable. Read `data/ORIGINAL_README.md` for precise column definitions.
- Chart 1 shows **five survey years**, not annual data. These are crude (not age-standardised) prevalence estimates; changes may be influenced by survey methods and awareness.
- Chart 2 measures **prevalence within an age-and-sex subgroup**, not the share of people with disability belonging to that group. Rows in the source are labelled `Male` and `Female` as published.
- Chart 3 represents **one main health condition per person**. It is not a distribution of all conditions. The two `Other` values are computed residuals based on published rounded group totals; they are marked as such in the CSV and tooltip.
- Percentages are published estimates, not exact counts, and original confidence intervals are not reproduced here.
- The draft contains **12 charts**, including three deliberately distinct map idioms. See `SECTION4_SOURCE_NOTES.md` and `RUBRIC_REVIEW_AND_TODO.md` before submitting.

## Update the data / charts

- Edit corresponding CSV values only against the official source tables.
- Change the JSON specs in `vega/` to modify axes, colours, titles, marks, annotations and tooltips.
- For Chart 3, if you edit `03_main_health_conditions_treemap.csv`, update `03_treemap_nodes.json` to reflect the new values, so the rectangles stay accurate.
- `index.html` contains the narratives, and `style.css` controls responsive layout.

## Submission warnings

- As described in **FIT3179 Data Visualisation 2 (v1.2)**, your completed single-scroll page needs **10 or more charts, at least 3 different map idioms**, and data from **at least two sources**. The 12-chart prototype includes ABS/AIHW/NDIA data; browser testing, data verification and submission tasks remain.
- The sketch submitted for marking must be **hand-drawn**, because a digitally created sketch receives 0 marks. Redraw the sketch so it matches the actual final charts.
- Add your name and update the authorship/date. Acknowledge AI assistance as required by your unit.
- Make your Vega JSON, data and page public in the **same GitHub repository** using GitHub Pages.

## Chapter 2 — source and methodological notes

Sources and values:
- Chart 4 uses ABS 2021 Census rates, as published in the state's "Need for assistance by state/territory" 2016/2021 table: https://www.abs.gov.au/articles/profile-people-core-need-assistance-australia . Data is percentage of ALL usual-resident population needing help with CORE activities (self-care, mobility or communication), **not general disability prevalence**.
- Chart 5 uses NDIA *Quarterly Report Q4 2025-26: Appendices*, Table D.1 (overall active participant counts) and Table D.8 (by primary disability), https://www.ndis.gov.au/media/8793/download?attachment= . Figures are as of **30 June 2026**. Separate rows are the eight regular states and territories; National includes 93 participants in Other Territories and 16 with missing state. Schematic anchor points were selected for readable map symbols and are **not locations of participants**.
- Chart 6 uses NDIA *Quarterly Report Q4 2025-26: Appendices*, Table D.29 ("both in SIL and not in SIL - total"; "in SIL - total"; "not in SIL - total"), which measures **1 October 2025 to 31 March 2026**, excludes certain participants and plan types, and is potentially understated due to payment lags. **Not a map of health service access or care quality.** 
- Geography (Charts 4–5) uses third-party state geometry from rowanhogan/australian-states on GitHub, https://github.com/rowanhogan/australian-states . The GeoJSON is loaded at runtime from `https://raw.githubusercontent.com/rowanhogan/australian-states/master/states.geojson`. This adds an external data dependency; if that source fails, download that file to `data/states.geojson` and replace the remote URL in the relevant Vega JSON files. For final submission, **replace it with an official simplified ABS 2021 boundary converted into local TopoJSON where practical** (https://www.abs.gov.au/statistics/standards/australian-statistical-geography-standard-asgs/edition-3-july-2021-june-2026/access-and-downloads/digital-boundary-files). This third-party map data has not been validated against official ABS cartographic boundaries in the present prototype.
- The tile grid is an approximate **schematic cartogram**. Each state/territory gets equal area; grid placement is purposeful but not geospatially precise.
- The 3 chart CSVs in Chapter 2 are cleaned transcriptions of verified tables, not a direct download from the downloadable NDIA bulk microdata.

Key story limitation: Figures from 2021 Census, 2022 disability survey and 2026 NDIA are not a matched cross-sectional dataset. Avoid drawing causal connections or claiming that low utilisation proves services are inaccessible.

Accessibility/testing: The JSON was checked for syntax and record consistency. Browser rendering and mobile behaviour still need to be verified with **VS Code Live Server**, including the external GeoJSON endpoint and the responsive maps.

## Chapter 3 updates

- Four new charts and their Vega-Lite JSONs added: `vega/07_*.vl.json` through `vega/10_*.vl.json`.
- Four CSVs: `data/07_*.csv` through `data/10_*.csv`.
- Definitions, scope, denominator, and source details: `SECTION3_SOURCE_NOTES.md`.
- All new chart data refer to 2022 surveys, described in AIHW 2026.
- The fourth story chapter has been implemented with 2 verified NDIA trends.


## Chapter 4 additions

- New published-data CSVs: `data/11_ndis_participant_trend.csv`, `data/12_ndis_utilisation_trend.csv`.
- Two Vega-Lite JSON files: `vega/11_ndis_participant_growth.vl.json`, `vega/12_ndis_utilisation_trends.vl.json`.
- Source values, comparison windows and caveats are in `SECTION4_SOURCE_NOTES.md`.
- Chart 12 **intentionally compares SIL status rather than Core/Capacity Building/Capital**: class-specific historical utilisation could not be extracted in a consistently reproducible way from published attachments.
- The report's participant counts measure *active plans at 30 June* and are not counts of people with disability across Australia.
- For the 2024–2026 utilisation rates, report years represent successive 1 October–31 March windows, NOT full calendar-year figures.

## Final audit

Check `RUBRIC_REVIEW_AND_TODO.md` for a rubric-specific checklist. This is a draft website, not a fully browser-tested submission. The hand-drawn sketch, author attribution, AI acknowledgement and GitHub Pages hosting remain the student's responsibility.


## October 16 HD review
See `HD_RUBRIC_AUDIT.md` for a figure-by-figure evaluation and required final-submission checks. Figure 7 now has **larger people icons** and **percentages in the panel headers**, using the same original CSV values.


## Figure 9 revision — weighted node-link diagram

Figure 9 was redesigned from ordinary grouped horizontal bars to a **weighted bipartite node-link diagram (full Vega 5)**. This shows six connections from missed-care service groups (GP, specialist, dental) to two reasons (cost; waiting/unavailable). Link thickness encodes **the percent of people who missed that particular service and named that reason**, not absolute numbers of people. A person can miss multiple services; connections are not movements of patients or true flows. Figures and sources are unchanged. The figure is now a **different advanced idiom candidate** rather than a standard bar chart; only the FIT3179 teaching team can confirm rubric treatment.
