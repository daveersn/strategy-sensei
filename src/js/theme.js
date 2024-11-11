import UIkit from "uikit";
import "@fontsource-variable/raleway";
import InfiniteTextSlider from "./components/InfiniteTextSlider.js";
import ReviewsSlider from "./components/ReviewsSlider.js";
import Lenis from "lenis";

window.uikit = UIkit;

const u = UIkit.util;

u.ready(() => {
  u.$$("[infinite-text-slider]").forEach(
    (element) => new InfiniteTextSlider(element),
  );

  u.$$(".reviews-slider").forEach((element) => new ReviewsSlider(element));
});

u.on(window, "load", () => {
  configureAnchorScroll();
});

// Smooth Scroll
const lenis = new Lenis({
  autoRaf: true,
  duration: 1,
});

function configureAnchorScroll() {
  let anchors = u.$$('a[href*="#"]');

  const isDesktop = window.matchMedia("(min-width: 960px)");
  let navbarPosition = null;

  u.on(anchors, "click", (e) => {
    e.preventDefault();

    let attr = u.attr(e.currentTarget, "href");

    let targetElement = u.$(attr);
    let targetElementPosition = targetElement
      ? targetElement.getBoundingClientRect()
      : null;

    let top = targetElement
      ? targetElementPosition.top +
        window.scrollY -
        navbarPosition.top -
        navbarPosition.height * 2
      : 0;

    lenis.scrollTo(targetElement, {
      offset: -navbarPosition.top - navbarPosition.height * 2,
    });
  });

  let updateOffset = function (isDesktop) {
    let navbar = u.$(
      isDesktop ? ".navbar-desktop [uk-navbar]" : ".navbar-mobile [uk-navbar]",
    );

    navbarPosition = navbar.getBoundingClientRect();
  };

  updateOffset(isDesktop.matches);
  isDesktop.addEventListener("change", ({ matches }) => updateOffset(matches));
}
