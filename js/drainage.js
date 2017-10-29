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
      },
      getMore: function () {
        window.open("http://game.troncell.com/")
      },
    },
    computed: {
      getImage: function () {
        return '../img/drainage/' + this.selectedType + '-banner.png'
      }
    }
  })
}())