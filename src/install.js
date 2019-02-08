import { css } from 'emotion';
import facepaint from 'facepaint';

export default {
  install(Vue, options = {}) {
    const {
      breakpointsInput = {
        xs: 0,
        sm: 600,
        md: 960,
        xl: 1200,
        lg: 1920,
      },
      ...others
    } = options;

    const breakpoints = Object.values(breakpointsInput);
    const mqMin = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`));
    const mqMax = facepaint(breakpoints.map(bp => `@media (max-width: ${bp}px)`));

    Vue.prototype.$theme = {
      breakpoints: {
        values: {
          ...breakpointsInput,
        },
        mqMin,
        mqMax,
      },
      ...others,
    };

    Vue.directive('css', (el, { value }) => {
      el.className = css(value);
    })
  },
};
