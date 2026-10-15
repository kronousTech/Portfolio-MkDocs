// Image slider for the "Media" sections.
// Re-runs on every page load, including Material's instant navigation.
document$.subscribe(() => {
  document.querySelectorAll(".slider").forEach(slider => {
    if (slider.dataset.ready) return;
    slider.dataset.ready = "true";

    const images = slider.querySelectorAll("img");
    if (images.length === 0) return;

    const counter = slider.querySelector(".counter");
    const prev = slider.querySelector(".prev");
    const next = slider.querySelector(".next");
    let index = 0;

    images[index].classList.add("active");

    // Single image (or no buttons): show it and stop here.
    if (images.length < 2 || !prev || !next) {
      if (prev) prev.hidden = true;
      if (next) next.hidden = true;
      if (counter) counter.hidden = true;
      return;
    }

    function updateCounter() {
      if (counter) counter.textContent = `${index + 1} / ${images.length}`;
    }

    function show(i) {
      images[index].classList.remove("active");
      index = (i + images.length) % images.length;
      images[index].classList.add("active");
      updateCounter();
    }

    updateCounter();
    prev.addEventListener("click", () => show(index - 1));
    next.addEventListener("click", () => show(index + 1));

    // Keyboard: left/right arrows when the slider has focus.
    slider.tabIndex = 0;
    slider.addEventListener("keydown", e => {
      if (e.key === "ArrowLeft") show(index - 1);
      if (e.key === "ArrowRight") show(index + 1);
    });

    // Touch: swipe left/right on phones.
    let startX = null;
    slider.addEventListener("touchstart", e => { startX = e.touches[0].clientX; }, { passive: true });
    slider.addEventListener("touchend", e => {
      if (startX === null) return;
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 40) show(index + (dx < 0 ? 1 : -1));
      startX = null;
    });
  });
});
