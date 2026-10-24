/* FIT3179 Sections 1–4 — independently editable Vega-Lite and Vega JSON specs.
   Serve this project with VS Code Live Server, not a file:// URL.
   Requires network access to load the Vega scripts from jsDelivr. */
'use strict';
const chartSpecs = [
  { target: '#chart-1', path: 'vega/01_prevalence_trend.vl.json' },
  { target: '#chart-2', path: 'vega/02_age_sex_heatmap.vl.json' },
  { target: '#chart-3', path: 'vega/03_main_conditions_treemap.vg.json', treemap: true },
  { target: '#chart-4', path: 'vega/04_assistance_choropleth.vl.json' },
  { target: '#chart-4b', path: 'vega/04b_assistance_change_dumbbell.vl.json' },
  { target: '#chart-5', path: 'vega/05_ndis_symbol_map.vl.json' },
  { target: '#chart-5b', path: 'vega/05b_public_hospitals_dot_map.vl.json' },
  { target: '#chart-7', path: 'vega/07_health_service_pictograms.vl.json' },
  { target: '#chart-8', path: 'vega/08_unmet_care_bullet.vl.json' },
  { target: '#chart-9', path: 'vega/09_barriers_weighted_network.vg.json', vega: true },
  { target: '#chart-10', path: 'vega/10_assistance_waffle.vl.json' },
  { target: '#chart-11', path: 'vega/11_ndis_participant_growth.vl.json' },
  { target: '#chart-12', path: 'vega/12_ndis_utilisation_trends.vl.json' }
];
let resizeTimeout;
let treemapView;
let networkView;
const views = [];

async function embedChart(chart) {
  const holder = document.querySelector(chart.target);
  if (!holder) return;
  try {
    if (typeof vegaEmbed !== 'function') throw new Error('The Vega libraries could not load. Check your internet connection.');
    const response = await fetch(chart.path);
    if (!response.ok) throw new Error(`Cannot load ${chart.path} (HTTP ${response.status})`);
    const spec = await response.json();
    if (chart.vega) {
      // Full Vega node-link diagram: its endpoint positions depend on the available width.
      spec.width = Math.max(360, Math.floor(holder.clientWidth) - 14);
    }
    if (chart.treemap) {
      // Vega treemap uses a pixel width calculated from the card container.
      spec.width = Math.max(255, Math.floor(holder.clientWidth) - 1);
      spec.height = window.innerWidth < 680 ? 320 : 420;
    }
    holder.innerHTML = '';
    const result = await vegaEmbed(holder, spec, {
      mode: (chart.treemap || chart.vega) ? 'vega' : 'vega-lite',
      renderer: 'svg',
      actions: { export: true, source: true, compiled: false, editor: true },
      tooltip: true
    });
    views.push(result.view);
    if (chart.treemap) treemapView = result.view;
    if (chart.vega) networkView = result.view;
  } catch (e) {
    console.error('Vega visualisation error:', chart.target, e);
    holder.innerHTML = `<div class="error-panel" role="alert"><strong>Chart unavailable.</strong> Check that you are running this folder through VS Code Live Server and are connected to the internet. Details: ${escapeHtml(e.message)}</div>`;
  }
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
}

async function loadVisualisations() {
  for (const chart of chartSpecs) await embedChart(chart);
}

window.addEventListener('load', loadVisualisations);
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(async () => {
    // Vega-Lite width='container' will adjust naturally. Re-layout Vega treemap on resize.
    const holder = document.querySelector('#chart-3');
    if (treemapView && holder) {
      const newWidth = Math.max(255, Math.floor(holder.clientWidth) - 1);
      // The container's content includes the plot only (embed actions are beneath it).
      await treemapView.width(newWidth).height(window.innerWidth < 680 ? 320 : 420).runAsync();
    }
    const networkHolder = document.querySelector('#chart-9');
    if (networkView && networkHolder) {
      await networkView.width(Math.max(360, Math.floor(networkHolder.clientWidth) - 14)).runAsync();
    }
  }, 250);
});
