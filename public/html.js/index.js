Vue.use(VueTables.ClientTable);

// jQuery.noConflict();      //自定义一个比较短快捷方式

var app = new Vue({
    el: '#app',
    data: {
        info:{},
        busy: false,
        show: 'all',
    },
    methods: {
        load: function () {
            var _this = this
            _this.busy = true

            this.info = sec
        },
        to: function (target) {
            this.show = target
        },
    },
    created: function () {
        this.load()
    }
  })