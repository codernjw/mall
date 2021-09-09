// import { pop } from 'core-js/core/array';
import BackTop from '../components/content/backtop/BackTop.vue'
import { POP, NEW, SELL } from "./const";
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
export const tabControlMixin = {
    data: function() {
        return {
            currentType: POP
        }
    },
    methods: {
        tabClick(index) {
            switch (index) {
                case 0:
                    this.currentType = POP
                    break
                case 1:
                    this.currentType = NEW
                    break
                case 2:
                    this.currentType = SELL
                    break
            }
            // console.log(this.currentType);
        }
    }
}