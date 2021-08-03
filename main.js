const TEST = {

    data() {
        return {
            H1text: 'TitreH1',
            H2temp: '',
            H2text: '',
            isChecked: false,
            color: 'red',
            seen: true
        }
    },
    methods: {
        changeH2: function () {
            this.H2text = this.H2temp
        },
        changeColor: function () {

        }
    },
}

Vue.createApp(TEST).mount('#main')
