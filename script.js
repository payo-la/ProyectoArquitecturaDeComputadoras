const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".doc-card");
const emptyState = document.getElementById("emptyState");

filters.forEach((button) => {
  button.addEventListener("click", () => {
    filters.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    const category = button.dataset.filter;
    let visible = 0;
    cards.forEach((card) => {
      const show = category === "todos" || card.dataset.category === category;
      card.hidden = !show;
      if (show) visible++;
    });
    emptyState.hidden = visible !== 0;
  });
});

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});
