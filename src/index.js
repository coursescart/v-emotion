import { css, hydrate } from 'emotion';
import {
  renderStylesToString,
  renderStylesToNodeStream,
  extractCritical,
} from 'emotion-server';

export default {
  install(Vue, { theme } = {}) {
    Vue.prototype.$emotion = {
      css(styles, ...args) {
        return css(styles, ...args);
      },
      theme,
    };

    Vue.directive('css', (el, { value }) => {
      el.className = css(value);
    });
  },
};

export {
  css,
  hydrate,
  renderStylesToString,
  renderStylesToNodeStream,
  extractCritical,
};
