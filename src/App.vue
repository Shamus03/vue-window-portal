<template>
  <div>
    <div class="wrapper">
      <h3>vue-window-portal demo</h3>

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
      open: true,
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
}
</style>
