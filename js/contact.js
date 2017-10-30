(function () {
  window.myVue = new Vue({
    el: '#app',
    data: {
      dialogVisible: false,
      name: "",
      contact: "",
      checkedNames: []
    },
    methods: {
      getImg: function (item) {
        return item.isHover ? item.urlPressed : item.url
      },
      openWindow: function (item) {
        if (item.id === 'weibo') {
          window.open("http://weibo.com/troncell");
        }
      },
      submit: function () {
        if (this.name.replace(/(^\s*)|(\s*$)/g, "").length == 0)
          this.openMessage('姓名不可以为空');
        else if (this.contact.replace(/(^\s*)|(\s*$)/g, "").length == 0)
          this.openMessage('联系方式不可以为空');
        else if (this.checkedNames === undefined || this.checkedNames.length == 0)
          this.openMessage('需要选择至少一种类别');
        else {
          // 点击提交后处理
          //
          //
          this.dialogVisible = false;
        }

      },
      openMessage: function (msg) {
        this.$message({
          showClose: true,
          message: msg,
          type: 'warning'
        });
      }
    },
  });

  $("#wechat").hover(function () {
    $(this).find("img:first").attr('src', "../img/about/wechat_pressed.png");
    $(this).children(".wechatTooltip").fadeIn();
  }, function () {
    $(this).find("img:first").attr('src', "../img/about/wechat_normal.png");
    $(this).children(".wechatTooltip").fadeOut();
  })

  $("#weibo").hover(function () {
    $(this).find("img:first").attr('src', "../img/about/weibo_pressed.png");
  }, function () {
    $(this).find("img:first").attr('src', "../img/about/weibo_normal.png");
  })

  $("#qq").hover(function () {
    $(this).find("img:first").attr('src', "../img/about/qq_pressed.png");
  }, function () {
    $(this).find("img:first").attr('src', "../img/about/qq_normal.png");
  })

  $("#phone").hover(function () {
    $(this).find("img:first").attr('src', "../img/about/phone_pressed.png");
  }, function () {
    $(this).find("img:first").attr('src', "../img/about/phone_normal.png");
  })
}())