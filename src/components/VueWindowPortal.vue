<template>
  <div
    v-if="open"
    v-show="windowLoaded"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    width: {
      type: Number,
      default: 600,
    },
    height: {
      type: Number,
      default: 400,
    },
    left: {
      type: Number,
      default: 200,
    },
    top: {
      type: Number,
      default: 200,
    },
    noStyle: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return {
      windowRef: null,
      windowLoaded: false,
    }
  },
  watch: {
    open (newOpen) {
      if (newOpen) {
        this.openPortal()
      } else {
        this.closePortal()
      }
    },
  },
  mounted () {
    if (this.open) {
      this.openPortal()
    }
    window.addEventListener('beforeunload', this.closePortal)
  },
  beforeDestroy () {
    this.closePortal()
    window.removeEventListener('beforeunload', this.closePortal)
  },
  methods: {
    openPortal () {
      if (this.windowRef) return

      const { width, height, left, top } = this

      // Open a nonexistent page to replace the content later
      const windowPath = window.location.origin + window.location.pathname + '_window'
      this.windowRef = window.open(windowPath, '', `width=${width},height=${height},left=${left},top=${top}`)
      this.windowRef.addEventListener('beforeunload', this.closePortal)

      this.windowRef.addEventListener('load', () => {
        this.windowLoaded = true

        // Clear any existing content
        this.windowRef.document.body.innerHTML = ''

        // Move the component into the window
        const app = document.createElement('div')
        app.id = 'app'
        app.appendChild(this.$el)
        this.windowRef.document.body.appendChild(app)
        this.$emit('update:open', true)

        // Clone style nodes
        if (!this.noStyle) {
          for (const el of document.head.querySelectorAll('style, link[rel=stylesheet]')) {
            const clone = el.cloneNode(true)
            this.windowRef.document.head.appendChild(clone)
          }
        }
      })
    },
    closePortal () {
      if (!this.windowRef) return

      this.windowLoaded = false
      this.windowRef.close()
      this.windowRef = null
      this.$emit('update:open', false)
      this.$emit('closed')
    },
  },
}
</script>
