const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-app-navigation");

navToggle.addEventListener("click", () => {
  const curr = nav.getAttribute("data-visible");
  if (curr === "false") {
    nav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
    nav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});
