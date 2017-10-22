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
    new Vue({
        el: '#app',
        data: {
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
                return `url("${item.isHover?item.urlPressed:item.url}")`
            },
            openWindow(item) {
                if (item.id === 'weibo') {
                    window.open("http://weibo.com/troncell");
                }
            }
        }
    });
}())