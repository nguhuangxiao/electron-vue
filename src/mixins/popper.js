//const stop = e => e.stopPropagation();

export default {
    props: {
        placement: {
            type: String,
            default: 'bottom'
        }
    },

    data() {
        return {
            parent: this.$parent,
            dropdownWidth: ''
        };
    },

    watch: {

    },

    methods: {

    },

    updated() {

    },

    beforeCreate(){
        document.addEventListener("click", function (event) {
            console.log(event)
        });
    },
    mounted() {
        this.$el.addEventListener('click', function (e) {
            e.stopPropagation();
        })
        //this.$parent.popperElm = this.popperElm = this.$el;
    },

    created() {
        console.log(this.$el)
        this.$on('visible', (val, inputWidth) => {
            this.dropdownWidth = inputWidth + 'px';
            this.showPopper = val;
        });
    }
}