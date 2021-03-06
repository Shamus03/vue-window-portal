# vue-window-portal
[![npm version](http://img.shields.io/npm/v/vue-window-portal.svg?style=flat&logo=npm)](https://npmjs.org/package/vue-window-portal "View this project on npm")
[![build status](https://github.com/shamus03/vue-window-portal/workflows/master/badge.svg)](https://github.com/Shamus03/vue-window-portal "View this project on Github")

Vue component to render content in a new window.


This works by creating the element in the main window and adding it to the newly created child window, which removes it from the main window. The original window handles all processing and logic of the now-moved component, so no script tags need to be copied over, just styles.

### Known limitations

- Hot-reloading during development will cause the windows to close/open.
- Styles **will not work** if your page sets Content Security Policy `style-src 'unsafe-inline'`. Unfortunately this includes Github Pages.
  - You can get around this by adding an empty `_window.html` file to your deployed application.
- Styles cannot hot-reload because they are copied when the window is initially opened.
- Style/link tags not in `document.head` will not be copied to the new window (semi-intentional).

# Demo

[Live demo](https://shamus03.github.io/vue-window-portal/)

Or run locally:
```bash
npm run serve
```

# Example usage
See [App.vue](./src/App.vue) for a more detailed example.

```vue
<template>
  <div>
    Main content

    <vue-window-portal open>
      This content will be rendered in a new window
    </vue-window-portal>
  </div>
</template>
```

The window can be controlled via its `open` prop or via the `openPortal()` and `closePortal()` methods.

Use the `.sync` modifier to propagate changes back into your variable, or the `@closed` event if you only care when the window is closed.

Use the `no-style` option to avoid copying style tags into the new window.