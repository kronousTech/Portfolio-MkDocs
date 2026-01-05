document$.subscribe(() => {
  document.querySelectorAll(".slider").forEach(slider => {
    const images = slider.querySelectorAll("img");
    if (images.length === 0) return;

    let index = 0;

    // Counter
    const counter = slider.querySelector(".counter");
    function updateCounter() {
      if (counter) {
        counter.textContent = `${index + 1} / ${images.length}`;
      }
    }

    images[index].classList.add("active");
    updateCounter();

    const prev = slider.querySelector(".prev");
    const next = slider.querySelector(".next");

    function show(i) {
      images[index].classList.remove("active");
      index = (i + images.length) % images.length;
      images[index].classList.add("active");
      updateCounter();
    }

    prev.addEventListener("click", () => show(index - 1));
    next.addEventListener("click", () => show(index + 1));
  });
});
