# Living with Disability in Australia

A data story about disability prevalence and access to health and support services in Australia, built with Vega-Lite and Vega for FIT3179 Data Visualisation 2 (Monash University Malaysia).

**Live site:** https://zariqafsha.github.io/disability-health-australia/
**Author:** Zariq Afsha Bin Zainal Abidin

## The story

The page has four chapters and 12 figures.

| Fig | Chapter | Chart | Shows | Spec |
|---|---|---|---|---|
| 01 | Who lives with disability? | Line chart | Disability prevalence, 2009–2022 | `vega/01_prevalence_trend.vl.json` |
| 02 | | Heatmap | Prevalence by age and sex, 2022 | `vega/02_age_sex_heatmap.vl.json` |
| 03 | | Treemap (Vega) | Main health condition, 2022 | `vega/03_main_conditions_treemap.vg.json` |
| 04 | Where is support needed? | Choropleth map | Need for core-activity assistance by state, 2016 and 2021 | `vega/04_assistance_choropleth.vl.json` |
| 05 | | Proportional symbol map | NDIS participants by state and primary disability, June 2026 | `vega/05_ndis_symbol_map.vl.json` |
| 06 | | Dot map | Open public hospitals | `vega/05b_public_hospitals_dot_map.vl.json` |
| 07 | Can people get the care they need? | Pictogram grid | Health services used, 2022 | `vega/07_health_service_pictograms.vl.json` |
| 08 | | Bullet chart | Unmet care by disability group vs all people with disability, 2022 | `vega/08_unmet_care_bullet.vl.json` |
| 09 | | Node–link diagram (Vega) | Main reasons care was missed, 2022 | `vega/09_barriers_weighted_network.vg.json` |
| 10 | | Waffle chart | Help received with daily activities, 2022 | `vega/10_assistance_waffle.vl.json` |
| 11 | Is support keeping pace? | Area/line chart | NDIS participant growth, 2022–2026 | `vega/11_ndis_participant_growth.vl.json` |
| 12 | | Multi-line chart | NDIS plan utilisation by living-support group, 2024–2026 | `vega/12_ndis_utilisation_trends.vl.json` |

## Data sources

- Australian Bureau of Statistics (ABS), [Disability, Ageing and Carers, Australia: Summary of Findings, 2022](https://www.abs.gov.au/statistics/health/disability/disability-ageing-and-carers-australia-summary-findings/2022)
- ABS, [Census 2016 and 2021, core need for assistance](https://www.abs.gov.au/articles/profile-people-core-need-assistance-australia)
- Australian Institute of Health and Welfare (AIHW), [People with disability in Australia 2026](https://www.aihw.gov.au/reports/disability/people-with-disability-2026)
- AIHW, [MyHospitals API](https://www.aihw.gov.au/hospitals/other-resources/myhospitals-api) (hospital locations)
- National Disability Insurance Agency (NDIA), [Quarterly reports to disability ministers](https://www.ndis.gov.au/about-us/publications/quarterly-reports) (2022–2026)
- State boundaries: [rowanhogan/australian-states](https://github.com/rowanhogan/australian-states), simplified to TopoJSON with mapshaper (`data/aus_states.json`)

Column definitions for the Chapter 1 files are in `data/README.md`.

## Notes on the data

- Survey figures (ABS, AIHW) are estimates for people living in households, not exact counts.
- The 2022 survey, the 2021 Census and the 2026 NDIS reports cover different years and measure different things, so the chapters are not one matched dataset.
- NDIS participants are people with an active NDIS plan, not everyone with disability.
- Map symbol positions in Figure 05 are reference points inside each state, not where participants live.

## Folder structure

```
index.html     page layout and story text
style.css      typography, colours and responsive layout
js/main.js     loads each chart spec with vegaEmbed
vega/          one Vega-Lite or Vega JSON spec per figure
data/          CSV and JSON data used by the specs
```

## Run locally

Serve the folder through a local web server rather than opening `index.html` directly, because browsers block loading the data files over `file://`. In VS Code, right-click `index.html` and choose **Open with Live Server**, or run `python3 -m http.server` in this folder and open http://localhost:8000.
