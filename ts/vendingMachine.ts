/// <reference path="./coin.ts" />


class VendingMachine {
    private paid = ko.observable(0);
    acceptedCoins: Quarter[] = [new Quarter()];
    acceptCoin = (coin: Quarter) => {
        // Works the same but the code is shorter.
        // this.paid(this.paid() + coin.Value);

        let oldTotal = this.paid();
        this.paid(oldTotal + coin.Value);
    }
}