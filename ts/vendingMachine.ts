/// <reference path="./coin.ts" />
/// <reference path="./product.ts" />
/// <reference path="typings/knockout.d.ts" />
/// <reference path="productFactory.ts" />



enum VendingMachineSize {
    small = 6,
    medium = 9,
    large = 12,
}

class Cell {
    constructor(public product: CocaCola) {}

    stock = ko.observable(3);
    sold = ko.observable(false);
}

class VendingMachine {
    private paid = ko.observable(0);
    cells = ko.observableArray([]);
    set size(givenSize: VendingMachineSize) {
        this.cells([]);
        for (let index = 0; index < givenSize; index++) {
            let product = productFactory.GetProduct();
            this.cells.push(new Cell(product));
        }
    }
    acceptedCoins: Quarter[] = [new Quarter()];
    acceptCoin = (coin: Quarter) => {
        // Works the same but the code is shorter.
        // this.paid(this.paid() + coin.Value);

        let oldTotal = this.paid();
        this.paid(oldTotal + coin.Value);
    }
}