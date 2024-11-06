import UIkit from "uikit";
import "@fontsource-variable/raleway";
import InfiniteTextSlider from "./components/InfiniteTextSlider.js";

window.uikit = UIkit;

const u = UIkit.util;

u.ready(() => {
  u.$$("[infinite-text-slider]").forEach(
    (element) => new InfiniteTextSlider(element),
  );
});
