const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");
const contentEl = document.querySelector(".content");
navToggle.addEventListener("click", function () {
  const visibility = primaryNav.getAttribute("data-visible");
  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
    console.log("clicked");
  } else {
    primaryNav.setAttribute("data-visible", false);
    contentEl.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});
