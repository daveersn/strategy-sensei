import { slider as Slider, util as u } from "uikit";

export default class ReviewsSlider {
  constructor(element) {
    this.$el = element;
    this.slider = Slider(this.$el);
    this.navigation = u.$$(".slider-navigation > *", this.$el);

    this._init();
  }

  _init() {
    u.on(this.$el, "itemshow", () => this.updateNavigation());
  }

  updateNavigation() {
    let next = this._getNavigationItemByIndex(this._getNextIndex());
    let previous = this._getNavigationItemByIndex(this._getPreviousIndex());

    this.navigation.forEach((item) => {
      u.removeClass(item, "previous-item next-item");

      if (item === next) {
        u.addClass(item, "next-item");
      } else if (item === previous) {
        u.addClass(item, "previous-item");
      }
    });
  }

  _getNavigationItemByIndex(index) {
    return this.navigation.find(
      (item) => parseInt(u.attr(item, "uk-slider-item")) === index,
    );
  }

  _getNextIndex() {
    let index = this.slider.getIndex() + 1;
    return index > this.navigation.length - 1 ? 0 : index;
  }

  _getPreviousIndex() {
    let index = this.slider.getIndex() - 1;
    return index < 0 ? this.navigation.length - 1 : index;
  }
}
