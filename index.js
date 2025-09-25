const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-app-navigation");
const tabList = document.querySelectorAll(".tab-list");
let nowTab = document.querySelectorAll(".moon");

tabList.forEach((tab) => {
  tab.addEventListener("click", () => {
    document
      .getElementById(`${nowTab[0].className}`)
      .setAttribute("aria-selected", false);
    nowTab.forEach((now) => {
      now.setAttribute("hidden", "");
      console.log(nowTab);
    });
    nowTab = document.querySelectorAll(`.${tab.getAttribute("id")}`);
    document
      .getElementById(`${nowTab[0].className}`)
      .setAttribute("aria-selected", true);
    nowTab.forEach((now) => {
      now.removeAttribute("hidden", "");
    });
  });
});

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
