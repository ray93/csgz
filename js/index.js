(function () {
  window.myVue = new Vue({
    el: '#app',
    data: function () {
      return {
        banners: [{
            id: 1,
            url: '../img/index/banner/banner01.png',
          },
          {
            id: 2,
            url: '../img/index/banner/banner02.png',
          },
          {
            id: 3,
            url: '../img/index/banner/banner03.png',
          }, {
            id: 4,
            url: '../img/index/banner/banner04.png',
          }
        ],
        isOpen: false,
      }
    },
  })
}())