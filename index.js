const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-app-navigation");
const tabList = document.querySelectorAll(".tab-list");
let nowTab = document.querySelectorAll(".moon");
const dots = document.querySelectorAll(".dots");
let nowDot = document.querySelectorAll(".commander");

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    document.querySelector(".dots[aria-selected='true']")
      ?.setAttribute("aria-selected", false);
    nowDot.forEach((now) => {
      now.setAttribute("hidden", "");
    });
    nowDot = document.querySelectorAll(`.${dot.getAttribute("id")}`);
    dot.setAttribute("aria-selected", true);
    nowDot.forEach((now) => {
      now.removeAttribute("hidden", "");
    });
  });
});

tabList.forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelector(".tab-list[aria-selected='true']")
      ?.setAttribute("aria-selected", false);
    nowTab.forEach((now) => {
      now.setAttribute("hidden", "");
    });
    nowTab = document.querySelectorAll(`.${tab.getAttribute("id")}`);
    tab.setAttribute("aria-selected", true);
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
