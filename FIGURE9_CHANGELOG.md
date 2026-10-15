# Figure 9 — revised design

- Old chart: grouped bar chart (standard idiom).
- New chart: **weighted bipartite node–link diagram**, authored using **Vega 5** (advanced network idiom candidate).
- Six verified source percentages in `data/09_barriers_cost_wait.csv` remain unchanged.
- Node sets: missed care (GP, medical specialist, dental care) and barrier (waiting/unavailable, cost).
- Link thickness uses the service-specific % (range mapped from 0 to 50 with a true zero baseline in stroke width), not a count. Hover a link to see its service, barrier and value. Labels on the right also provide exact values.
- No flow of individual patients is implied; source cohorts may overlap, unlike a Sankey that displays populations moving between states.
- The graph is drawn using `linkpath` and meaningful node/edge encoding; this is not an ordinary multi-line series.
- Downloadable official source definitions are documented in `SECTION3_SOURCE_NOTES.md`.
- Tutor review recommended: confirm map #6 and acceptability of the network idiom.
