(function () {
  var brands = [
    [{
        url: '../img/index/brand/casio_normal.png',
        urlPressed: '../img/index/brand/casio_pressed.png',
        isHover: false,
      },
      {
        url: '../img/index/brand/五+_normal.png',
        urlPressed: '../img/index/brand/五+_pressed.png',
        isHover: false,
      },
      {
        url: '../img/index/brand/马克华菲_normal.png',
        urlPressed: '../img/index/brand/马克华菲_pressed.png',
        isHover: false,
      },
      {
        url: '../img/index/brand/素型_normal.png',
        urlPressed: '../img/index/brand/素型_pressed.png',
        isHover: false,
      },
      {
        url: '../img/index/brand/自然醒_normal.png',
        urlPressed: '../img/index/brand/自然醒_pressed.png',
        isHover: false,
      }
    ],
    [{
        url: '../img/index/brand/美特斯邦威_normal.png',
        urlPressed: '../img/index/brand/美特斯邦威_pressed.png',
        isHover: false,
      },
      {
        url: '../img/index/brand/周大生_normal.png',
        urlPressed: '../img/index/brand/周大生_pressed.png',
        isHover: false,
      },
      {
        url: '../img/index/brand/梦芭莎_normal.png',
        urlPressed: '../img/index/brand/梦芭莎_pressed.png',
        isHover: false,
      },
      {
        url: '../img/index/brand/麦当劳_normal.png',
        urlPressed: '../img/index/brand/麦当劳_pressed.png',
        isHover: false,
      },
      {
        url: '../img/index/brand/松下_normal.png',
        urlPressed: '../img/index/brand/松下_pressed.png',
        isHover: false,
      }
    ],
    [{
        url: '../img/index/brand/通灵珠宝_normal.png',
        urlPressed: '../img/index/brand/通灵珠宝_pressed.png',
        isHover: false,
      },
      {
        url: '../img/index/brand/brookstone_normal.png',
        urlPressed: '../img/index/brand/brookstone_pressed.png',
        isHover: false,
      },
      {
        url: '../img/index/brand/三彩_normal.png',
        urlPressed: '../img/index/brand/三彩_pressed.png',
        isHover: false,
      },
      {
        url: '../img/index/brand/gap_normal.png',
        urlPressed: '../img/index/brand/gap_pressed.png',
        isHover: false,
      },
      {
        url: '../img/index/brand/绿箭_normal.png',
        urlPressed: '../img/index/brand/绿箭_pressed.png',
        isHover: false,
      }
    ],
    [{
        url: '../img/index/brand/oldnavy_normal.png',
        urlPressed: '../img/index/brand/oldnavy_pressed.png',
        isHover: false,
      },
      {
        url: '../img/index/brand/优衣库_normal.png',
        urlPressed: '../img/index/brand/优衣库_pressed.png',
        isHover: false,
      },
      {
        url: '../img/index/brand/chanel_normal.png',
        urlPressed: '../img/index/brand/chanel_pressed.png',
        isHover: false,
      },
      {
        url: '../img/index/brand/爱慕_normal.png',
        urlPressed: '../img/index/brand/爱慕_pressed.png',
        isHover: false,
      },
      {
        url: '../img/index/brand/一汽丰田_normal.png',
        urlPressed: '../img/index/brand/一汽丰田_pressed.png',
        isHover: false,
      }
    ]
  ]
  var malls = [
    [{
        url: '../img/index/malls/k11_normal.png',
        urlPressed: '../img/index/malls/k11_pressed.png',
        isHover: false,
      },
      {
        url: '../img/index/malls/九方_normal.png',
        urlPressed: '../img/index/malls/九方_pressed.png',
        isHover: false,
      },
      {
        url: '../img/index/malls/环球金融中心_normal.png',
        urlPressed: '../img/index/malls/环球金融中心_pressed.png',
        isHover: false,
      },
    ]
  ]
  window.myVue = new Vue({
    el: '#app',
    data: function () {
      return {
        banners: [{
            id: 1,
            url: '../img/index/banner/banner01.png',
            bgColor: '#0a0b11'
          },
          {
            id: 2,
            url: '../img/index/banner/banner02.png',
            bgColor: '#ffffff'
          },
          {
            id: 3,
            url: '../img/index/banner/banner03.png',
            bgColor: '#fadc3e'
          }, {
            id: 4,
            url: '../img/index/banner/banner04.png',
            bgColor: '#FBF8F5'
          }
        ],
        bannerBG: '#0a0b11',
        isOpen: false,
        brands: brands,
        selectedType: "brands"
      }
    },
    methods: {
      getImg(item) {
        return `url("${item.isHover?item.urlPressed:item.url}")`
      },
      changeSelected(type) {
        if (this.selectedType === type) {
          return;
        } else if (type === "brands") {
          this.selectedType = type
          this.brands = brands
        } else {
          this.selectedType = type
          this.brands = malls
        }
      },
      changeCarousel(index) {
        this.bannerBG = this.banners[index].bgColor
      }
    },
    mounted() {
      function loadImage(url) {
        var img = new Image()
        img.src = url
        if (img.complete) {
          return;
        }
        img.onload = function () {}
      }
      brands.forEach(function (items) {
        items.forEach(function (item) {
          loadImage(item.urlPressed)
        })
      })
      malls.forEach(function (items) {
        items.forEach(function (item) {
          loadImage(item.urlPressed)
        })
      })
    }
  })
}())