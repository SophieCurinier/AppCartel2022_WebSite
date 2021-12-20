new Vue({
    el: '#app',
    data () {
      return {
        info: null
      }
    },
    mounted () {
      axios
        .get('http://cartel2022.cleverapps.io:80/api/ecole')
        .then(response => (this.info = response.data.bpi))
    },
  })
