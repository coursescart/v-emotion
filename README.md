# v-emotion
> Use [Emotion](https://emotion.sh) CSS-in-JS library with
> [Vue.js](https://github.com/vuejs/vue)

## Installation

```
npm install v-emotion --save
```

## Usage

**Client/Server:**

```js
import Vue from 'vue';
import VueEmotion from 'v-emotion';

// Use as a Vue plugin.
Vue.use(VueEmotion);
```

**Optional with theme**
```js
import Vue from 'vue';
import VueEmotion from 'v-emotion';

// Use as a Vue plugin.
Vue.use(VueEmotion, {
  theme: {
    palette: {
      primary: 'blue',
    },
  },
});
```

**Directive:**

```vue
<template>
  <div v-css="styles">
    Hello!
  </div>
</template>

<script>
export default {
  data() {
    return {
      styles: {
        color: 'red',
        padding: 10,
        // with a defined theme
        backgroundColor: this.$emotion.theme.palette.primary
      },
    };
  },
}
</script>
```

**Component:**

```vue
<template>
  <div :class="componentClass">
    Hello!
  </div>
</template>

<script>
export default {
  data() {
    const componentClass = this.$emotion.css({
      color: 'red',
    });

    return { componentClass };
  },
}
</script>
```

**SSR API**
```js
import {
  hydrate,
  renderStylesToString,
  renderStylesToNodeStream,
  extractCritical,
} from 'v-emotion';
```
