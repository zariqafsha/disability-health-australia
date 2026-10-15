# FIT3179 Munzner What / Why / How — Complete 12-chart draft

## Chapter 1 — Who lives with disability in Australia?

- **Who:** General Australian/Malaysian readers interested in Australian health and accessibility; assume no statistical expertise.
- **Why:** Establish the prevalence and distribution of disability before discussing access to services and support.
- **What:** Official ABS/AIHW estimates derived from the 2022 Survey of Disability, Ageing and Carers (SDAC) and earlier survey years.
- **How:** Present a clearly labelled trend, age/sex heatmap and treemap, with short evidence-grounded annotations, mouse-hover tooltips and a restrained palette.

### Chart 1 — Survey trend

- **What:** Tabular data: survey year (ordered/quantitative) and crude disability prevalence (quantitative).
- **Why:** Discover the long-term national trend and compare 2018 vs 2022.
- **How:** Layered **line chart + filled points**, x-position = year, y-position = prevalence %. Year is numerical to preserve unequal survey gaps. Zero baseline to avoid overstating changes. Endpoint labels support storytelling.
- **Interpretation caution:** Survey rates are estimates and the gap from 2018 to 2022 should not be attributed to a specific cause.

### Chart 2 — Heatmap across age and sex

- **What:** Multidimensional table: age group (ordered), sex (categorical), prevalence (quantitative).
- **Why:** Compare disability prevalence between age/sex groups and discover a strong age gradient.
- **How:** **Heatmap** with rectangular marks; x-position = age group, y-position = sex, sequential colour light-to-dark teal = prevalence rate, text = exact percentage. Tooltip adds detail. Sequential scale rather than diverging scale because prevalence is nonnegative and ordered.
- **Interpretation caution:** The denominator is *the population in each age and sex group*, not all people with disability.

### Chart 3 — Treemap of main health conditions

- **What:** Hierarchical data: condition parent group (categorical), condition subtype (categorical), share of all people with disability (quantitative).
- **Why:** Compare the relative composition of *main health conditions* and distinguish physical vs mental/behavioural groups.
- **How:** **Treemap** (Vega) with area proportional to condition share, hue for the two main-condition groups, labels for larger cells and hover tooltips for all. An area encoding makes each person's mutually exclusive main condition count once.
- **Interpretation caution:** Main health condition is not synonymous with disability type. Residual "Other" condition groups are derived from published rounded totals.

## Visual hierarchy and accessibility

1. Large human-readable question as chapter title.
2. Brief explanatory narrative ahead of each chart (reading guide).
3. Large charts on white cards; teal indicates prevalence/physical main conditions, orange mental/behavioural main conditions.
4. Callouts and visible source links next to data, followed by limitations. No unverified values are used in finished charts.
5. All charts have descriptive `aria-label` text; tooltips are supplementary, not the only way to read the main results.

## Additional chapters

Sections 2, 3 and 4 are now implemented in separate chart specifications. The map boundaries and rendered interactions still require browser testing. Add your own authorship details, check chart values and comply with AI acknowledgment rules before submission.


## Section 2 addition (maps 4–6)
- Map 4 (choropleth): ABS Census rate by state, sequential fill, year selector; comparisons of proportions, not counts.
- Map 5 (proportional circles): NDIA participant count by state and primary disability, fixed area-scale domain and tooltip. Schematic anchor points, not service locations.
- Map 6 (tile-grid cartogram): NDIA plan budget utilisation by state and SIL grouping, equal size tiles, sequential fill and labels; temporal scope 1 Oct 2025–31 Mar 2026.
- Caveat: three mapping idioms count as distinct geographic presentations, but confirm with tutor that a schematic tile-grid cartogram counts as a separate *map idiom* for their marking rubric.
- Chapters 3–4 now have six additional implemented visualisations; see below.

## Chapter 3 (2022 AIHW data)

Charts 7–10 compare health service use, unmet need for care by disability group, weighted service-to-barrier connections, and formal/informal assistance. Chart 8 is now by disability group rather than age; only official explicitly verified values are used. Refer to `SECTION3_SOURCE_NOTES.md`.

## Chapter 4 — NDIS historical changes (Charts 11–12)

### Figure 11: Active participant time trend
- **What:** June year (ordered/temporal) and stock of active participants (quantitative).
- **Why:** Compare long-run NDIS growth from 2022 to 2026.
- **How:** Layered area/line/point idiom with direct endpoint annotation, scaled y axis starting at zero and net-change tooltip.
- **Caution:** Active NDIS plan holders are not everyone with disability. Changes are net, not gross new enrolments.

### Figure 12: Utilisation by SIL status over three comparable windows
- **What:** Report year, SIL-status group (nominal), payments-to-committed-supports utilisation (quantitative).
- **Why:** Compare how budget utilisation varies by support category of participants and over matched October-to-March windows.
- **How:** Multi-line points with a shared quantitative axis and direct 2026 labels; hue for participant group, static legend and point-hover tooltips. The y axis starts at 50% to resolve small differences and its tick labels are displayed.
- **Caution:** This is **by participants' SIL status, not by NDIS plan support class**. It is not a direct measure of health service accessibility, care quality or satisfaction. Different support needs and reporting methods may affect the results. Source links and definitions: `SECTION4_SOURCE_NOTES.md`.

## Final checklist
The 12 chart idioms are implemented; actual browser rendering, responsiveness, public hosting and hand-drawn sketch are pending. Check `RUBRIC_REVIEW_AND_TODO.md`.
