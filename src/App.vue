<template>
  <div id="app">
    <div class="wrapper">
      <h3>vue-window-portal demo</h3>

      You may need to check for blocked popups!

      <p>
        Text: <input v-model="text">
      </p>

      <p>
        Window open: <input
          v-model="open"
          type="checkbox"
        >
      </p>
    </div>

    <VueWindowPortal
      class="wrapper"
      :open.sync="open"
      :left="600"
      :top="20"
    >
      <h3>I'm a new window!</h3>

      Text: <input v-model="text">
    </VueWindowPortal>

    <VueWindowPortal
      class="wrapper"
      :open.sync="open"
      :left="600"
      :top="600"
      no-style
    >
      <h3>I'm a new window, but I have no style!</h3>

      Text: <input v-model="text">
    </VueWindowPortal>

    <VueWindowPortal
      class="wrapper"
      :open.sync="open2"
      inline
      :left="800"
      :top="400"
    >
      <h3>This content gets rendered inline whenever the window isn't open!</h3>
      
      <button @click="open2 = true">Pop out</button>
    </VueWindowPortal>
  </div>
</template>

<script>
import Vue from 'vue'
import VueWindowPortal from './components/VueWindowPortal'

export default Vue.extend({
  components: {
    VueWindowPortal,
  },
  data () {
    return {
      text: 'magic!',
      open: false,
      open2: false,
    }
  },
})
</script>

<style>
h3::before {
  content: '';
  padding-right: .25rem;
  margin-right: .3rem;
  background-color: green;
}

.wrapper {
  background-color: #ddd;
  padding: .5rem;
  border-radius: .25rem;
  margin-bottom: 1rem;
}
</style>
