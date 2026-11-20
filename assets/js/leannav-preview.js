const reader = document.querySelector(".leannav-preview__reader");
const frame = reader.parentElement;
const status = document.getElementById("leannav-preview-status");
const zoom = document.getElementById("leannav-preview-zoom");
const fallback = document.getElementById("leannav-preview-fallback");
const distribution = "https://cdn.jsdelivr.net/npm/pdfjs-dist@6.5.438/";

status.textContent = "Loading PDF preview...";
status.hidden = false;

function showFallback() {
  frame.hidden = true;
  zoom.hidden = true;
  status.textContent = "The inline PDF preview could not load.";
  status.hidden = false;
  fallback.hidden = false;
}

try {
  const { getDocument, GlobalWorkerOptions } = await import(
    distribution + "legacy/build/pdf.min.mjs"
  );
  const { EventBus, PDFLinkService, PDFViewer } = await import(
    distribution + "legacy/web/pdf_viewer.mjs"
  );
  GlobalWorkerOptions.workerSrc = distribution + "legacy/build/pdf.worker.min.mjs";

  const pdf = await getDocument({
    url: reader.dataset.pdfUrl,
    wasmUrl: distribution + "wasm/",
    cMapUrl: distribution + "cmaps/",
    standardFontDataUrl: distribution + "standard_fonts/",
    isEvalSupported: false,
  }).promise;

  frame.hidden = false;
  const eventBus = new EventBus();
  const linkService = new PDFLinkService({ eventBus });
  const viewer = new PDFViewer({ container: reader, eventBus, linkService });
  linkService.setViewer(viewer);

  eventBus.on("pagesinit", () => {
    viewer.currentScaleValue = "page-width";
    zoom.addEventListener("change", () => {
      viewer.currentScaleValue = zoom.value;
    });
    window.addEventListener("resize", () => {
      if (!frame.hidden && zoom.value === "page-width") {
        viewer.currentScaleValue = "page-width";
      }
    });
    zoom.hidden = false;
    status.hidden = true;
  });
  eventBus.on("pagerendered", ({ error }) => {
    if (error) showFallback();
  });

  viewer.setDocument(pdf);
  linkService.setDocument(pdf);
} catch {
  showFallback();
}
