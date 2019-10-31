import Vue from 'vue'

export default Vue.extend({
	{
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
			}
		},
		render(h) {
			if (this.open) {
				return h('div', this.$slots.default)
			}
		},
		data() {
			return {
				windowRef: null,
			}
		},
		watch: {
			open(newOpen) {
				if(newOpen) {
					this.openPortal();
				} else {
					this.closePortal();
				}
			}
		},
		methods: {
			openPortal() {
				if (this.windowRef) return
			
				const { width, height, left, top } = this
				this.windowRef = window.open('', '', `width=${width},height=${height},left=${left},top=${top}`);
				this.windowRef.addEventListener('beforeunload', this.closePortal);

				// Clone style nodes
				if (!this.noStyle) {
					for (const el of document.head.querySelectorAll('style')) {
						this.windowRef.document.head.appendChild(el.cloneNode(true));
					}
				}

				// Move the component into the window
				const app = document.createElement('div')
				app.id = 'app'
				app.appendChild(this.$el)
				this.windowRef.document.body.appendChild(app);
				this.$emit('update:open', true);
			},
			closePortal() {
				if (!this.windowRef) return
				
				this.windowRef.close();
				this.windowRef = null;
				this.$emit('update:open', false);
			}
		},
		mounted() {
			this.openPortal()
			window.addEventListener('beforeunload', this.closePortal);
		},
		beforeDestroy() {
			this.closePortal();
			window.removeEventListener('beforeunload', this.closePortal);
		}
	}
})
