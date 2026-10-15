# Chapter 2 sources and chart checks

## Map 4 - choropleth
Source: ABS "Profile of people with a core need for assistance in Australia", 2021 census, state and territory percent table. URL: https://www.abs.gov.au/articles/profile-people-core-need-assistance-australia
Values: NSW 5.4/5.8, VIC 5.1/5.9, QLD 5.2/6.0, SA 6.0/6.7, WA 3.9/4.6, TAS 6.4/6.8, NT 3.0/3.6, ACT 4.2/4.6 (2016/2021).
2016 and 2021 are separate census dates. County-level denominator and 2021 raw count come from published ABS data. The chart does not show disability prevalence.

## Map 5 - proportional symbols
Source: NDIA Quarterly Report Q4 2025-26 Appendix Tables D.1 and D.8. URL: https://www.ndis.gov.au/media/8793/download?attachment=
Data as at 30 June 2026. 8-jurisdiction counts add to 781,904. National 782,013 includes other territories 93, missing 16. Disability categories are PRIMARY disability only. Marker coordinates are schematic anchors inside states.

## Map 6 - tile-grid cartogram
Source: NDIA Quarterly Report Q4 2025-26, Table D.29 and footnotes 13-16. URL: https://www.ndis.gov.au/media/8793/download?attachment=
Utilisation measured from 1 Oct 2025 to 31 Mar 2026; not the June 2026 quarter, despite report publication date. Values rounded by NDIA to whole percentages. Group labels map exactly to rows: "Both in SIL and not in SIL - Total", "in SIL - Total", "Not in SIL - Total". The measure is plan level utilisation and excludes some in-kind support/plans; do not equate to unmet need.

## Map geometry
https://raw.githubusercontent.com/rowanhogan/australian-states/master/states.geojson
The remote source is a third-party GeoJSON geometry; file is 639KB and contains eight polygons/features with `properties.STATE_NAME`. It is not the official ABS 2021 boundary and must be properly attributed. Simplify and host an authoritative boundary locally for final submission if possible.
