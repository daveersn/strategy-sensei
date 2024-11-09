export default class InfiniteTextSlider {
  constructor(element) {
    this.$el = element;
    this.container = this.$el.querySelector(".slider-items");

    this._init();
  }

  _init() {
    this.container.innerHTML =
      this.container.innerHTML +
      this.container.innerHTML +
      this.container.innerHTML +
      this.container.innerHTML;
  }
}
