import { css } from 'emotion';

export default {
  install(Vue, { theme } = {}) {
    Vue.prototype.$emotion = {
      theme,
    };

    Vue.directive('css', (el, { value }) => {
      el.className = css(value);
    });
  },
};

export {
  css,
};
