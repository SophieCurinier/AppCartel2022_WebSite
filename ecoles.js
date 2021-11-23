new Vue({
    el: '#liste_ecoles',
    data() {
        return {
            info: null
        }
    },
    mounted() {
        axios
            .get('https://cartel2022.cleverapps.io/swagger-ui/index.html#/')
            .then(response => (this.info = response.data.bpi))
    }
})

