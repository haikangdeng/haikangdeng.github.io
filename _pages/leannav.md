---
layout: single
title: "LeanNav: Graph Navigation for Agent-Guided Search in Formal Mathematics"
permalink: /publication/leannav
author_profile: false
---

**Haikang Deng**, Jia-Chen Gu, Yuxuan Lu, Di Wu, Yihan Xu, Weichen Winston Yin, Junyi Zhang, Nanyun Peng

{% assign preview_url = '/files/LeanNav-preview.pdf' | relative_url %}

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/pdfjs-dist@6.5.438/legacy/web/pdf_viewer.css">
<style>
  .leannav-preview__toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  #leannav-preview-zoom {
    min-height: 2rem;
    font-size: 0.8em;
  }
  .leannav-preview {
    position: relative;
    height: clamp(24rem, 80vh, 60rem);
    background: #e4e5e7;
    border: 1px solid var(--global-border-color);
  }
  .leannav-preview__reader {
    position: absolute;
    inset: 0;
    overflow: auto;
  }
  .leannav-preview .pdfViewer > .page {
    float: none;
    padding: 0;
  }
</style>

<p class="leannav-preview__toolbar">
  <strong id="leannav-preview-label">Preview draft (PDF)</strong>
  <select id="leannav-preview-zoom" aria-label="PDF zoom" hidden>
    <option value="page-width">Fit width</option>
    <option value="0.75">75%</option>
    <option value="1">100%</option>
    <option value="1.5">150%</option>
    <option value="2">200%</option>
  </select>
</p>
<p id="leannav-preview-status" role="status" hidden></p>
<div class="leannav-preview" hidden>
  <div class="leannav-preview__reader" data-pdf-url="{{ preview_url }}" role="region" aria-labelledby="leannav-preview-label" tabindex="0">
    <div class="pdfViewer"></div>
  </div>
</div>
<p id="leannav-preview-fallback" hidden><a href="{{ preview_url }}">Open the preview PDF</a></p>
<noscript>
  <object class="leannav-preview" data="{{ preview_url }}" type="application/pdf" aria-labelledby="leannav-preview-label" width="100%">
    <a href="{{ preview_url }}">Open the preview PDF</a>
  </object>
</noscript>
<script type="module" src="{{ '/assets/js/leannav-preview.js' | relative_url }}"></script>
