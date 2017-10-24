(function () {
    var contacts = [{
            url: '../img/about/wechat_normal.png',
            urlPressed: '../img/about/wechat_pressed.png',
            isHover: true,
        },
        {
            url: '../img/about/weibo_normal.png',
            urlPressed: '../img/about/weibo_pressed.png',
            isHover: true,
        },
        {
            url: '../img/about/qq_normal.png',
            urlPressed: '../img/about/qq_pressed.png',
            isHover: true,
        },
        {
            url: '../img/about/phone_normal.png',
            urlPressed: '../img/about/phone_pressed.png',
            isHover: true,
        }
    ];
    window.myVue = new Vue({
        el: '#app',
        data: {
            dialogVisible: false,
            name: "",
            screenWidth: document.body.clientWidth,
            leftOffset: (1366 - document.body.clientWidth) / 2,
            contact: "",
            checkedNames: [],
            contacts: [{
                    id: 'wechat',
                    url: '../img/about/wechat_normal.png',
                    urlPressed: '../img/about/wechat_pressed.png',
                    detail: '扫我关注创思微信',
                    isHover: false,
                },
                {
                    id: 'weibo',
                    url: '../img/about/weibo_normal.png',
                    urlPressed: '../img/about/weibo_pressed.png',
                    detail: 'http://weibo.com/troncell',
                    isHover: false,
                },
                {
                    id: 'qq',
                    url: '../img/about/qq_normal.png',
                    urlPressed: '../img/about/qq_pressed.png',
                    detail: 'qq: 94134124',
                    isHover: false,
                },
                {
                    id: 'phone',
                    url: '../img/about/phone_normal.png',
                    urlPressed: '../img/about/phone_pressed.png',
                    detail: '0510-8538 1098',
                    isHover: false,
                }
            ]
        },
        methods: {
            getImg(item) {
                return item.isHover ? item.urlPressed : item.url
            },
            openWindow(item) {
                if (item.id === 'weibo') {
                    window.open("http://weibo.com/troncell");
                }
            },
            submit() {
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
            openMessage(msg) {
                this.$message({
                    showClose: true,
                    message: msg,
                    type: 'warning'
                });
            }
        },
        watch: {
            screenWidth(val) {
                if (!this.timer) {
                    this.screenWidth = val
                    this.leftOffset = (1366 - this.screenWidth) / 2;
                    this.timer = true
                    let that = this
                    setTimeout(function () {
                        console.log('screenWidth', that.screenWidth)
                        console.log("leftOffset", that.leftOffset)
                        // that.init()
                        that.timer = false
                    }, 400)
                }
            }
        },
        mounted: function () {
            console.log(document.body.clientWidth);
            const that = this
            window.onresize = () => {
                return (() => {
                    window.screenWidth = document.body.clientWidth
                    that.screenWidth = window.screenWidth
                    that.leftOffset = (1366 - that.screenWidth) / 2;
                })()
            }
        }
    });
}())