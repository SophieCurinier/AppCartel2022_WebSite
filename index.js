var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Sophie!'
    }
  })

//app.message="shit"

var app2 = new Vue({
    el: '#app-2',
    data: {
      message: 'You loaded this page on ' + new Date().toLocaleString()
    }
  })

  var app3 = new Vue({
    el: '#app-3',
    data: {
      seen: true
    }
  })  

  app3.seen = false