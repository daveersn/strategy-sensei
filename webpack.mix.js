let mix = require("laravel-mix");

mix
  .less("src/less/theme.less", "css")
  .js("src/js/theme.js", "js")
  .setPublicPath("dist");
