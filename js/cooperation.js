(function () {
  var brands = [{
      url: '../img/index/brand/casio_normal.png',
      urlPressed: '../img/index/brand/casio_pressed.png',
      isHover: false,
      bg: '../img/cooperation/brands/casio.png',
    },
    {
      url: '../img/index/brand/五+_normal.png',
      urlPressed: '../img/index/brand/五+_pressed.png',
      isHover: false,
      bg: '../img/cooperation/brands/fiveplus.png',
    },
    {
      url: '../img/index/brand/马克华菲_normal.png',
      urlPressed: '../img/index/brand/马克华菲_pressed.png',
      isHover: false,
      bg: '../img/cooperation/brands/马克华菲.png',
    },
    {
      url: '../img/index/brand/优衣库_normal.png',
      urlPressed: '../img/index/brand/优衣库_pressed.png',
      isHover: false,
      bg: '../img/cooperation/brands/优衣库.png',
    },
    {
      url: '../img/index/brand/美特斯邦威_normal.png',
      urlPressed: '../img/index/brand/美特斯邦威_pressed.png',
      isHover: false,
      bg: '../img/cooperation/brands/美特斯邦威.png',
    },
    {
      url: '../img/index/brand/周大生_normal.png',
      urlPressed: '../img/index/brand/周大生_pressed.png',
      isHover: false,
      bg: '../img/cooperation/brands/周大生.png',
    },
    {
      url: '../img/index/brand/梦芭莎_normal.png',
      urlPressed: '../img/index/brand/梦芭莎_pressed.png',
      isHover: false,
      bg: '../img/cooperation/brands/梦芭莎.png',
    },
    {
      url: '../img/index/brand/chanel_normal.png',
      urlPressed: '../img/index/brand/chanel_pressed.png',
      isHover: false,
      bg: '../img/cooperation/brands/chanel.png',
    },
    {
      url: '../img/index/brand/麦当劳_normal.png',
      urlPressed: '../img/index/brand/麦当劳_pressed.png',
      isHover: false,
      bg: '../img/cooperation/brands/麦当劳.png',
    },
    {
      url: '../img/index/brand/松下_normal.png',
      urlPressed: '../img/index/brand/松下_pressed.png',
      isHover: false,
      bg: '../img/cooperation/brands/松下.png',
    },
    {
      url: '../img/index/brand/通灵珠宝_normal.png',
      urlPressed: '../img/index/brand/通灵珠宝_pressed.png',
      isHover: false,
      bg: '../img/cooperation/brands/通灵珠宝.png',
    },
    {
      url: '../img/index/brand/brookstone_normal.png',
      urlPressed: '../img/index/brand/brookstone_pressed.png',
      isHover: false,
      bg: '../img/cooperation/brands/brookstone.png',
    },
    {
      url: '../img/index/brand/三彩_normal.png',
      urlPressed: '../img/index/brand/三彩_pressed.png',
      isHover: false,
      bg: '../img/cooperation/brands/三colour.png',
    },
    {
      url: '../img/index/brand/gap_normal.png',
      urlPressed: '../img/index/brand/gap_pressed.png',
      isHover: false,
      bg: '../img/cooperation/brands/gap.png',
    },
    {
      url: '../img/index/brand/绿箭_normal.png',
      urlPressed: '../img/index/brand/绿箭_pressed.png',
      isHover: false,
      bg: '../img/cooperation/brands/绿箭.png',
    },
    {
      url: '../img/index/brand/oldnavy_normal.png',
      urlPressed: '../img/index/brand/oldnavy_pressed.png',
      isHover: false,
      bg: '../img/cooperation/brands/oldnavy.png',
    },
    {
      url: '../img/index/brand/素型_normal.png',
      urlPressed: '../img/index/brand/素型_pressed.png',
      isHover: false,
      bg: '../img/cooperation/brands/素型.png',
    },
    {
      url: '../img/index/brand/自然醒_normal.png',
      urlPressed: '../img/index/brand/自然醒_pressed.png',
      isHover: false,
      bg: '../img/cooperation/brands/自然醒.png',
    },
    {
      url: '../img/index/brand/爱慕_normal.png',
      urlPressed: '../img/index/brand/爱慕_pressed.png',
      isHover: false,
      bg: '../img/cooperation/brands/爱慕.png',
    },
    {
      url: '../img/index/brand/一汽丰田_normal.png',
      urlPressed: '../img/index/brand/一汽丰田_pressed.png',
      isHover: false,
      bg: '../img/cooperation/brands/一汽.png',
    }
  ]
  var malls = [{
      url: '../img/index/malls/k11_normal.png',
      urlPressed: '../img/index/malls/k11_pressed.png',
      isHover: false,
      bg: '../img/cooperation/malls/k11.png',
    },
    {
      url: '../img/index/malls/九方_normal.png',
      urlPressed: '../img/index/malls/九方_pressed.png',
      isHover: false,
      bg: '../img/cooperation/malls/九方.png',
    },
    {
      url: '../img/index/malls/环球金融中心_normal.png',
      urlPressed: '../img/index/malls/环球金融中心_pressed.png',
      isHover: false,
      bg: '../img/cooperation/malls/环球金融中心.png',
    }
  ]
  window.myVue = new Vue({
    el: '#app',
    data: function () {
      return {
        selectedType: 'brands',
        brands: brands,
      }
    },
    mounted: function () {
      function loadImage(url) {
        var img = new Image()
        img.src = url
        if (img.complete) {
          return;
        }
        img.onload = function () {}
      }
      brands.forEach(function (item) {
        loadImage(item.urlPressed)
      })
      malls.forEach(function (item) {
        loadImage(item.urlPressed)
      })
    },
    methods: {
      changeSelected: function (type) {
        if (this.selectedType === type) {
          return;
        }
        this.selectedType = type
        if (type === 'brands') {
          this.brands = brands
        } else {
          this.brands = malls
        }
      },
      getbg: function (item) {
        return 'url("' + item.bg + '")'
      },
      getImg: function (item) {
        return 'url("' + item.isHover ? item.urlPressed : item.url + '")'
      },
    },
  })
}())