(function () {
    window.myVue = new Vue({
        el: '#app',
        data: function () {
            return {
                selectedType: 'virtualcloud',
            }
        },
        methods: {
            changeSelected: function (type) {
                this.selectedType = type
            }
        }
    })
}())