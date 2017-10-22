(function () {
  window.myVue = new Vue({
    el: '#app',
    data: function () {
      return {
        isOpen: false,
      }
    },
    methods: {
      openMore: function () {
        window.open("http://www.troncell.com/solution/index.html")
      }
    }
  })
}())