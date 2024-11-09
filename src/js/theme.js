import UIkit from "uikit";
import "@fontsource-variable/raleway";
import InfiniteTextSlider from "./components/InfiniteTextSlider.js";
import ReviewsSlider from "./components/ReviewsSlider.js";

window.uikit = UIkit;

const u = UIkit.util;

u.ready(() => {
  u.$$("[infinite-text-slider]").forEach(
    (element) => new InfiniteTextSlider(element),
  );

  u.$$(".reviews-slider").forEach((element) => new ReviewsSlider(element));
});
