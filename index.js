const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-app-navigation");
const tabList = document.querySelector('[role="tab-list"]');
const tabs = tabList.querySelectorAll('[role="tab"]');

tabs.forEach((tab) => {
  tab.addEventListener("click", changePanelTab);
});

tabList.addEventListener("keydown", changeTabFocus);
// ------------------------------------------------------------------------------------------

let tabFocus = 0;
function changeTabFocus(e) {
  const keydownLeft = 37;
  const keydownRight = 39;

  if (e.keyCode === keydownLeft || e.keyCode === keydownRight) {
    tabs[tabFocus].setAttribute("tabindex", -1);
  }

  if (e.keyCode === keydownRight) {
    tabFocus++;
    if (tabFocus >= tabs.length) {
      tabFocus = 0;
    }
  }

  if (e.keyCode === keydownLeft) {
    tabFocus--;
    if (tabFocus < 0) {
      tabFocus = tabs.length - 1;
    }
  }

  tabs[tabFocus].setAttribute("tabindex", 0);
  tabs[tabFocus].focus();
}

// ------------------------------------------------------------------------------------------

function changePanelTab(e) {
  const tab = e.target;
  const article = document.getElementById(
    `${e.target.getAttribute("aria-controls")}`
  );
  const picture = document.getElementById(
    `${e.target.getAttribute("data-image")}`
  );

  document
    .querySelector('[aria-selected="true"]')
    .setAttribute("aria-selected", false);

  document.querySelectorAll(`[role="tab-panel"]`).forEach((article) => {
    article.setAttribute("hidden", "");
  });
  document.querySelectorAll(`picture`).forEach((article) => {
    article.setAttribute("hidden", "");
  });

  tab.setAttribute("aria-selected", true);
  picture.removeAttribute("hidden");
  article.removeAttribute("hidden");
}

// ------------------------------------------------------------------------------------------

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
