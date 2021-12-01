new Vue({
    el: '#liste_ecoles',
    data() {
        return {
            info: null
        }
    },
    mounted() {
        axios
            .get('https://cartel2022.cleverapps.io/api/ecole')
            .then(response => (this.info = response.data.bpi))
    }
})

