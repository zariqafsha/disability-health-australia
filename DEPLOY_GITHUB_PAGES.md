# Publish this FIT3179 webpage using GitHub Pages

**The website files belong at the ROOT of the GitHub repository, not inside a containing folder.**

1. Sign in at https://github.com and make a new PUBLIC repository, e.g. `disability-health-australia`.
2. Extract this ZIP on your Mac. Open its folder and confirm `index.html`, `style.css`, `js/`, `vega/`, and `data/` are side by side.
3. In the GitHub repository, choose **Add file → Upload files**. Drag the CONTENTS of that folder (not the ZIP) onto the page; make sure the `js`, `vega`, and `data` folders are uploaded along with the files. Commit the changes.
4. Repository **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: main → Folder: /(root) → Save**.
5. Wait for the Pages build; choose **Visit site** from Settings → Pages. It will normally use `https://USERNAME.github.io/disability-health-australia/`.
6. Test all 12 charts, the filters and tooltips, and the links at the PUBLIC address rather than localhost. To revise Figure 6 later, edit its Vega-Lite JSON, data and labels in the same repository; your address stays the same.

**Before final submission:** replace the placeholder author, include your hand-drawn sketch PDF on GitHub, confirm third map idiom with tutor, check the map data source and the full rubric.

This repository uses relative local paths, which work on GitHub Pages project URLs. Scripts/fonts and the map geometry still rely on external URLs.
