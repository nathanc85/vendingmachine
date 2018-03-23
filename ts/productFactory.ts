/// <reference path="product.ts" />


class productFactory {
    static GetProduct(): Product {
        let random = Math.floor(Math.random() * 3);
        switch (random) {
            case 0: return new CocaCola();
            case 1: return new Peanuts();
            case 2: return new ChipsAhoy();
            default:
                break;
        }
    }
}