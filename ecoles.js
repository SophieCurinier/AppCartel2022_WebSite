var app = new Vue({
    el: '#main',

    data() {
        return {
            result: "test"
        }
    },
    mounted() {
        axios
            .get("https://cartel2022.cleverapps.io/api/ecole")
            .then(response => {
                this.result = response;
            })
            .catch(err => {
                console.log(err);
            });
    }
})

