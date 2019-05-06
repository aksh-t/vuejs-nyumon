var items = [
    {
        name: '鉛筆',
        price: 300,
        quantity: 1
    },
    {
        name: 'ノート',
        price: 400,
        quantity: 1
    },
    {
        name: '消しゴム',
        price: 500,
        quantity: 1
    }
]

var vm = new Vue({
    el: '#app',
    data: {
        items: items
    },
    filters: {
        numberWithDelimiter: function (value) {
            if (!value) {
                return '0'
            }
            return value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')
        }
    },
    computed: {
        totalPrice: function () {
            return this.items.reduce(function (sum, item) {
                console.log(sum)
                return sum + (item.price * item.quantity)
            } ,0)
        },
        totalPriceWithTax: function () {
            return Math.floor(this.totalPrice * 1.08)
        },
        someFunc: function () {
            return this.items[0].quantity * 3
        }
    }
})