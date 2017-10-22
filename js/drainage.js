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
    },
    computed: {
      getImage() {
        return `../img/drainage/${this.selectedType}-banner.png`
      }
    }
  })
}())