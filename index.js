const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-app-navigation");
const tabList = document.querySelector('[role="tab-list"]')
const tabs = tabList.querySelectorAll('[role="tab"]')

tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    const article = document.getElementById(`${e.target.getAttribute("aria-controls")}`)
    const picture = document.getElementById(`${e.target.getAttribute("data-image")}`)

    document.querySelector('[aria-selected="true"]').setAttribute("aria-selected",false)

    document.querySelectorAll(`[role="tab-panel"]`).forEach(article => {
      article.setAttribute("hidden", "")
    })
    document.querySelectorAll(`picture`).forEach(article => {
      article.setAttribute("hidden", "")
    })

    tab.setAttribute("aria-selected", true)
    picture.removeAttribute("hidden")
    article.removeAttribute("hidden")
  })
})



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
