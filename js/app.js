var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Coins;
(function (Coins) {
    var imagePath = 'img/';
    var Coin = (function () {
        function Coin(value) {
            this.value = value;
            this.value = value;
        }
        return Coin;
    }());
    Coins.Coin = Coin;
    var Dime = (function (_super) {
        __extends(Dime, _super);
        function Dime() {
            return _super.call(this, .10) || this;
        }
        Dime.prototype.getImageUrl = function () {
            return imagePath + "Dime.png";
        };
        return Dime;
    }(Coin));
    Coins.Dime = Dime;
    var Quarter = (function (_super) {
        __extends(Quarter, _super);
        function Quarter() {
            return _super.call(this, .25) || this;
        }
        Quarter.prototype.getImageUrl = function () {
            return imagePath + "Quarter.png";
        };
        return Quarter;
    }(Coin));
    Coins.Quarter = Quarter;
    var Half = (function (_super) {
        __extends(Half, _super);
        function Half() {
            return _super.call(this, .50) || this;
        }
        Half.prototype.getImageUrl = function () {
            return imagePath + "Half.png";
        };
        return Half;
    }(Coin));
    Coins.Half = Half;
    var Dollar = (function (_super) {
        __extends(Dollar, _super);
        function Dollar() {
            return _super.call(this, 1) || this;
        }
        Dollar.prototype.getImageUrl = function () {
            return imagePath + "Dollar.jpg";
        };
        return Dollar;
    }(Coin));
    Coins.Dollar = Dollar;
})(Coins || (Coins = {}));
var ProductCategory = (function () {
    function ProductCategory() {
        this.path = 'img/';
    }
    return ProductCategory;
}());
var SodaCategory = (function (_super) {
    __extends(SodaCategory, _super);
    function SodaCategory() {
        var _this = _super.apply(this, arguments) || this;
        _this.name = 'Soda';
        return _this;
    }
    SodaCategory.prototype.getImageUrl = function () {
        return this.path + 'SodaCan.png';
    };
    return SodaCategory;
}(ProductCategory));
var Nuts = (function (_super) {
    __extends(Nuts, _super);
    function Nuts() {
        var _this = _super.apply(this, arguments) || this;
        _this.name = 'Nuts';
        return _this;
    }
    Nuts.prototype.getImageUrl = function () {
        return this.path + 'Nuts.png';
    };
    return Nuts;
}(ProductCategory));
var Chips = (function (_super) {
    __extends(Chips, _super);
    function Chips() {
        var _this = _super.apply(this, arguments) || this;
        _this.name = 'Chips';
        return _this;
    }
    Chips.prototype.getImageUrl = function () {
        return this.path + 'Chips.png';
    };
    return Chips;
}(ProductCategory));
var CandyBar = (function (_super) {
    __extends(CandyBar, _super);
    function CandyBar() {
        var _this = _super.apply(this, arguments) || this;
        _this.name = 'Candy Bar';
        return _this;
    }
    CandyBar.prototype.getImageUrl = function () {
        return this.path + 'CandyBar.png';
    };
    return CandyBar;
}(ProductCategory));
var Candy = (function (_super) {
    __extends(Candy, _super);
    function Candy() {
        var _this = _super.apply(this, arguments) || this;
        _this.name = 'Candy';
        return _this;
    }
    Candy.prototype.getImageUrl = function () {
        return this.path + 'Candy.png';
    };
    return Candy;
}(ProductCategory));
/// <reference path="productCategory.ts" />
var Initial = (function () {
    function Initial() {
        this.name = 'Select a product';
        this.price = 0;
    }
    return Initial;
}());
var CocaCola = (function () {
    function CocaCola() {
        this.name = 'Coca-Cola';
        this.price = 5.9;
        this.category = new SodaCategory();
    }
    return CocaCola;
}());
var Peanuts = (function () {
    function Peanuts() {
        this.name = 'Peanuts Best';
        this.price = 2.2;
        this.category = new Nuts();
    }
    return Peanuts;
}());
var ChipsAhoy = (function () {
    function ChipsAhoy() {
        this.name = 'ChipsAhoy';
        this.price = 4.1;
        this.category = new Chips();
    }
    return ChipsAhoy;
}());
/// <reference path="product.ts" />
var productFactory = (function () {
    function productFactory() {
    }
    productFactory.GetProduct = function () {
        var random = Math.floor(Math.random() * 3);
        switch (random) {
            case 0: return new CocaCola();
            case 1: return new Peanuts();
            case 2: return new ChipsAhoy();
            default:
                break;
        }
    };
    return productFactory;
}());
/// <reference path="./coin.ts" />
/// <reference path="./product.ts" />
/// <reference path="typings/knockout.d.ts" />
/// <reference path="productFactory.ts" />
var VendingMachineSize;
(function (VendingMachineSize) {
    VendingMachineSize[VendingMachineSize["small"] = 6] = "small";
    VendingMachineSize[VendingMachineSize["medium"] = 9] = "medium";
    VendingMachineSize[VendingMachineSize["large"] = 12] = "large";
})(VendingMachineSize || (VendingMachineSize = {}));
var Cell = (function () {
    function Cell(product) {
        this.product = product;
        this.stock = ko.observable(3);
        this.sold = ko.observable(false);
    }
    return Cell;
}());
var VendingMachine = (function () {
    function VendingMachine() {
        var _this = this;
        this.paid = ko.observable(0);
        this.selectedCell = ko.observable(new Cell(new Initial()));
        this.cells = ko.observableArray([]);
        this.canPay = ko.pureComputed(function () { return _this.paid() - _this.selectedCell().product.price >= 0; });
        this.select = function (cell) {
            cell.sold(false);
            _this.selectedCell(cell);
        };
        this.acceptedCoins = [new Coins.Dime(), new Coins.Quarter(), new Coins.Half(), new Coins.Dollar()];
        this.acceptCoin = function (coin) {
            // Works the same but the code is shorter.
            // this.paid(this.paid() + coin.Value);
            var oldTotal = _this.paid();
            _this.paid(oldTotal + coin.value);
        };
        this.pay = function () {
            if (_this.selectedCell().stock() < 1) {
                alert("I'm sorry, we're out of them!");
                return;
            }
            var currentPaid = _this.paid();
            _this.paid(Math.round(((currentPaid - _this.selectedCell().product.price) * 100)) / 100);
            var currentStock = _this.selectedCell().stock();
            _this.selectedCell().stock(currentStock - 1);
            _this.selectedCell().sold(true);
        };
    }
    Object.defineProperty(VendingMachine.prototype, "size", {
        set: function (givenSize) {
            this.cells([]);
            for (var index = 0; index < givenSize; index++) {
                var product = productFactory.GetProduct();
                this.cells.push(new Cell(product));
            }
        },
        enumerable: true,
        configurable: true
    });
    return VendingMachine;
}());
/// <reference path="vendingMachine.ts" />
var machine = new VendingMachine();
machine.size = VendingMachineSize.medium;
ko.applyBindings(machine);
//# sourceMappingURL=app.js.map