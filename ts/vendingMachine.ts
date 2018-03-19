/// <reference path="./coin.ts" />


class VendingMachine {
    private paid = 0;
    
    // acceptCoin(coin: Quarter):void {
    //     this.paid += coin.Value;
    // }

    acceptCoin = (coin: Quarter) => {
        this.paid += coin.Value;
        let element = document.getElementById('total');
        element.innerHTML = this.paid.toString();
    }
}