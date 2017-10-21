(function () {
  window.myVue = new Vue({
    el: '#app',
    data: function () {
      return {
        selectedType: 'queen',
      }
    },
    methods: {
      changeSelected: function (type) {
        this.selectedType = type
      }
    }
  })
}())