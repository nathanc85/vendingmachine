var Quarter = (function () {
    function Quarter() {
        this.value = .25;
    }
    Object.defineProperty(Quarter.prototype, "Value", {
        get: function () {
            return this.value;
        },
        set: function (newValue) {
            this.value = newValue;
        },
        enumerable: true,
        configurable: true
    });
    Quarter.prototype.getImageUrl = function () {
        return "img/Quarter.png";
    };
    return Quarter;
}());
var coin = new Quarter();
/// <reference path="./coin.ts" />
var VendingMachine = (function () {
    function VendingMachine() {
        var _this = this;
        this.paid = 0;
        // acceptCoin(coin: Quarter):void {
        //     this.paid += coin.Value;
        // }
        this.acceptCoin = function (coin) {
            _this.paid += coin.Value;
            var element = document.getElementById('total');
            element.innerHTML = _this.paid.toString();
        };
    }
    return VendingMachine;
}());
/// <reference path="vendingMachine.ts" />
var machine = new VendingMachine();
//ko.applyBindings(machine); 
//# sourceMappingURL=app.js.map