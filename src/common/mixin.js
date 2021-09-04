import BackTop from '../components/content/backtop/BackTop.vue'
export const backtop = {
    components: {
        BackTop,
    },
    data() {
        return {
            top: false,
        }
    },
    methods: {
        backclick() {
            this.$refs.scroll.scrollTo(0, 0, 500);
        },
        topmixin(position) {
            position.y <= -1000 ? (this.top = true) : (this.top = false);
        }
    }
}