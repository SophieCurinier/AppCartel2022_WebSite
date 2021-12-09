new Vue({
    el: '#liste_ecoles',
    data() {
        return {
            info: null
        }
    },
    mounted() {
        axios
            .get('http://localhost:8080/api/ecole')
            .then(response => (this.info = response.data.bpi))
    }
})

