(function () {
  window.myVue = new Vue({
    el: '#app',
    data: function () {
      return {
        userName: '',
        realPassword: '',
        showPass: false,
        password: '',
        isError: false,
      }
    },
    methods: {
      login: function () {
        this.isError = true
        var _this = this

        setTimeout(function () {
          _this.isError = false
        }, 1000)
      }
    },
  })
}())