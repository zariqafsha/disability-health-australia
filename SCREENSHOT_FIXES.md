# Visual fixes after browser screenshots (16 October 2026)

The screenshot review confirmed that 10 of 12 chart panels rendered well and identified two blocking defects.

- **Figure 7 (pictogram):** Custom person shape path was specified in large, unnormalised SVG units; Vega scaling generated huge icons that overlapped. Fixed by using the same custom silhouette scaled into normalised coordinates. The underlying data and percentages are unchanged. Panels remain 10 by 10 silhouettes each.
- **Figure 12 (NDIS utilisation):** Vega-Lite selection `chooseGroup` attached to the outer spec of a layered chart generated `Duplicate signal name: chooseGroup_tuple`. Removed the legend selection and its opacity condition. All three trends, hover tooltips and the original data remain available; the legend is now non-clickable. HTML instructions were updated accordingly.
- **Figure 3 (treemap):** Slightly relaxed minimum tile width/height required for labels so more small categories can be annotated without depending on tooltips. No numbers changed.

## Please verify in Safari or Chrome
1. Extract the ZIP into a **new** folder, then open that folder in VS Code; do not leave Live Server pointing at the old project.
2. Choose `Open with Live Server` on the new `index.html`.
3. Force-refresh (`Command + Shift + R` in Safari) in case old JSON specs were cached.
4. Check Figure 7 for 6 grids of separated tiny person icons, and Figure 12 for 3 lines with working tooltips.
5. Check selector controls on Figures 4, 5 and 6, plus layout at laptop width.

The numeric datasets were not revised in this pass. This is a code-level correction; runtime rendering with Vega scripts is not fully verified in this container, so a final Safari screenshot is still useful.

The FIT3179 rubric requires 3 distinct map idioms and a high proportion of advanced chart idioms. Ask your tutor to confirm that the schematic state tile-grid map is accepted as the third map idiom. Finish author credit, hand-drawn A4 sketch, AI acknowledgement and GitHub Pages publication before submission.
