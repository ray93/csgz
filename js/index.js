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
            url: '../img/index/banner/banner01_1920.png',
            url_1366: '../img/index/banner/banner01.png',
            bgColor: '#0a0b11'
          },
          {
            id: 2,
            url: '../img/index/banner/banner02_1920.png',
            url_1366: '../img/index/banner/banner02.png',
            bgColor: '#fdfdfd'
          },
          {
            id: 3,
            url: '../img/index/banner/banner03_1920.png',
            url_1366: '../img/index/banner/banner03.png',
            bgColor: '#fadc3e'
          }, {
            id: 4,
            url: '../img/index/banner/banner04_1920.png',
            url_1366: '../img/index/banner/banner04.png',
            bgColor: '#FBF8F5'
          }
        ],
        bannerBG: '#0a0b11',
        isOpen: false,
        brands: brands,
        selectedType: "brands",
        carHeight: '440px',
      }
    },
    methods: {
      getImg: function (item) {
        return 'url("' + item.isHover ? item.urlPressed : item.url + '")'
      },
      changeSelected: function (type) {
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
      changeCarousel: function (index) {
        this.bannerBG = this.banners[index].bgColor
      },
      getSrc: function (item) {
        var w = document.documentElement.clientWidth;
        return w > 1366 ? item.url : item.url_1366
      },
      changeCarouselHeight: function () {
        var w = document.documentElement.clientWidth;
        if (w >= 1920) {
          this.carHeight = 440 + 'px';
        } else if (w > 1366 && w < 1920) {
          this.carHeight = w / 1920 * 440 + 'px';
        } else {
          this.carHeight = w / 1366 * 440 + 'px';
        }
      }
    },
    mounted: function () {
      this.changeCarouselHeight()
      var _this = this

      window.addEventListener('resize', function () {
        _this.changeCarouselHeight()
      })

      $("#menuButton").click(function () {
        if ($(this).hasClass("nav-btn-active")) {
          $(this).removeClass("nav-btn-active");
          $(".header02").fadeOut()
          $(this).attr('src', "../img/menubutton_normal.png");
        } else {
          $(this).addClass("nav-btn-active");
          $(".header02").fadeIn()
          $(this).attr('src', "../img/menubutton_pressed.png");
        }
      });
      if ($(document).width() > 980) {
        $(".header02").hide()
        $("#menuButton").removeClass("nav-btn-active");
      }
      $(window).resize(function () {
        if ($(document).width() > 980) {
          $(".header02").hide()
          $("#menuButton").removeClass("nav-btn-active");
        }
      });

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