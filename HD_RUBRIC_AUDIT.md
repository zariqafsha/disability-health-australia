# FIT3179 — Detailed HD Rubric Audit

Reviewed against **FIT3179 Data Visualisation 2 v1.2**, especially the rubric on pages 5–6, the mandatory requirements on pages 1–4, plus the browser screenshots supplied on 16 October 2026. This audit does **not** predict a grade; tutors decide whether idioms are appropriate and effective.

## At-a-glance verdict

- **12 individually numbered figures** in four clearly structured chapters. More than 10 charts (the assignment says small multiples count as one chart; Figure 7's six panels are treated as **one**).
- **9 candidate advanced chart instances:** #2 heatmap, #3 treemap, #4 choropleth, #5 proportional-symbol map, #6 tile-grid cartogram, #7 pictogram, #8 heatmap, #9 weighted bipartite node–link diagram, #10 waffle chart. There are 9 advanced chart instances and **8 distinct advanced families** if Figure 6 counts as a map. Distinct families: heatmap, treemap, choropleth, symbol map, tile cartogram, pictogram, weighted node–link, waffle = **eight**, assuming Figure 6 is accepted as a map. Not guaranteed full idiom marks.
- **3 conventional chart instances:** #1 line, #11 area/line, #12 multi-line. Their story purposes are legitimate; the rubric says advanced idioms must be applied meaningfully, not that every chart must be complex.
- **Three claimed map idioms:** #4 geospatial choropleth, #5 mapped proportional symbols, #6 state tile-cartogram. **Risk: Figure 6 uses ordinal rectangle tiles with schematic positions rather than actual geographic features or projections.** Please obtain tutor confirmation. If Figure 6 is not accepted as a map, your 'Idioms and Complexity' mark is capped at **4/8** (rubric page 4 and page 5).
- **Known remaining submission blockers:** GitHub Pages publication and checking of all public embedded elements; handwritten A4 sketch matching the final twelve figures, scanned to PDF; author's name and date; explicit AI use acknowledgement; verification of downloadable map boundary availability/credit; testing small-screen width and real interactions. No live Chromium rendering was possible in this environment because localhost navigation returned `ERR_BLOCKED_BY_ADMINISTRATOR`.

## Individual idiom review

| Figure | Idiom | Rubric classification | Function / improvement |
|---|---|---|---|
| 01 | Yearly line with points | Basic | Good chronological opener; unequal survey-year gaps need quantitative/temporal x. Keep annotations. |
| 02 | Age-by-sex heatmap | Advanced candidate | Good use of ordered age and sequential colour for prevalence; labels readable in user screenshots. |
| 03 | Main-health-condition treemap | Advanced candidate | Suitable part-to-whole hierarchy; ensure small tiles remain understandable through hover, and avoid conflating conditions with disability types. |
| 04 | State choropleth | Advanced / map 1 | Appropriate for prevalence of need (rates), not raw counts; verify 2016/2021 dropdown. |
| 05 | Proportional symbol geographic map | Advanced / map 2 | Appropriate for absolute NDIA participant counts; label small states or explain centroids are schematic. Distinguish count from population-standardised rates. |
| 06 | Equal-tile state cartogram | Advanced **if accepted** / map 3 candidate | Clear comparison of percentages, but geographic recognition and definition of a “map idiom” require tutor review. It is not a projected geoshape map. |
| 07 | Pictogram small multiples (6 services) | Advanced candidate | New larger icons and percentage-labelled facet headers; each 100-icon panel counts as one small-multiple chart, not six charts. |
| 08 | Disability group × care type heatmap | Advanced candidate | Appropriate two-dimensional comparison, but disability groups may overlap and should not be added together. |
| 09 | Weighted bipartite node–link network (Vega) | Advanced candidate | Six service-to-barrier links; link thickness is conditional percentage, **not an absolute patient flow**. Labels show exact values and tooltips; unusual idiom should be justified as a relationship view, not decorative complexity. |
| 10 | 10×10 waffle | Advanced candidate | Appropriate mutually exclusive part-to-whole decomposition (57/33/10); keep no-help takeaway. |
| 11 | NDIA growth area/line | Basic | Good time story. Claim active count change, not number of people newly joining. |
| 12 | Multi-line utilisation trend | Basic | Three group comparisons render in latest Safari screenshot. Chart is **not support-class trend**, it is SIL vs non-SIL vs all participants; axis at 50% is explicitly disclosed. |

## HD rubric categories (page 5–6)

| Criterion | Strength | Need before submission |
|---|---|---|
| Sketch (2%) | Four chapters and 12 sketched positions available in a digital reference | **Hand draw** final version on A4. Digitally produced sketches earn zero under the explicit rubric. Include actual Figures 7 and 12 and the current state tile cartogram. |
| Idioms/complexity (8%) | 12 figures, 9 plausible advanced *instances* (8 distinct advanced families including the third-map candidate) | Resolve Map 3 risk with tutor. The contested tile cartogram could still affect HD evaluation, including the three-map requirement. |
| Layout/colour/figure-ground (3%) | Screenshots show clear single-column story, spacing, repeatable cards, restrained teal/amber | Verify compact laptop widths without horizontal scrolling; ensure enlarged Fig 7 remains clear. |
| Typography (2%) | Distinct large chapter headings and consistent legible labels | Small source notes at ~11px and tiny map legends may need enlargement; avoid overlong annotations. |
| Storytelling, annotations, grammar (5%) | Informative question-led headings and insight cards; story moves prevalence → geography → health access → NDIS trends | Verify strong causal-sounding claims are qualified. Figure 7 now has directly labelled percentages. |
| What/Why/How domain explanation (2%) | Existing `VISUALISATION_DESIGN_NOTES.md` provides Munzner analysis | Copy a concise Who/Why/What/How explanation into Moodle template; distinguish sources and years. |
| Interview (3%) | Clear documented encodings and denominators | Practise explaining why each idiom is appropriate, why SIL is not a proxy for healthcare access, how map data are joined, and how the percentages were calculated. |

## Validation before publication

1. Open **this revised folder** using VS Code Live Server. In Figure 7, inspect whether larger icons are distinct and all **six percentage-labelled panels** fit without overlap. Confirm Figure 12 continues to show 3 lines.
2. Hover all six weighted links in Figure 9 and verify their labelled percentages (8.8%, 43%, 24%, 26%, 46%, 8.5%). Test 2016/2021 selector in Figure 4, disability selector in Figure 5, and participant-group selector in Figure 6. Test hover text on Figures 2, 3, 8, 11, 12.
3. Test a **small laptop** browser viewport (e.g., 1280×800), at 100% zoom, and a narrower screen for overflow.
4. Check the availability and licensing of the **external state GeoJSON** (`raw.githubusercontent.com/rowanhogan/australian-states`), used by Figures 4–5; for a robust, acknowledged final submission, replace with a compact official or properly credited locally hosted boundary dataset. All data downloads should total less than a few MB.
5. Add authorship details; keep an AI acknowledgement compliant with Monash guidance. Do not submit an unmodified AI-produced draft without checking sources and authenticity.
6. Draw final sketch **by hand**, scan into PDF, place PDF link in GitHub repo and Moodle template. Hosting must be public: failure to make the web page and embedded figures accessible carries a zero under the assignment.
7. Validate all source URLs and claims against the original ABS / AIHW / NDIA tables; current review was based on files and screenshots, not independent cell-by-cell source re-extraction.

**Questions for tutor:** “Does my eight-tile state cartogram qualify as one of the three required *different map idioms*? Does the weighted service-to-barrier node–link diagram count as an advanced idiom, given that the link widths represent service-specific percentages rather than patient flows?”


## Updated Figure 9 assessment

Figure 9 is a **weighted node–link diagram**, constructed in Vega 5 using the `linkpath` transform and a quantitative stroke-width scale. This is a distinct idiom from both bars and heatmaps. It shows relationships between service types and reported barriers, but **does not depict actual patients moving** or equal-size cohorts. Each percentage has its own missed-service denominator, which is stated on the figure and in the source notes. This change increases candidate advanced idiom diversity, but does not eliminate the unresolved map-3 grading risk or guarantee an HD.
