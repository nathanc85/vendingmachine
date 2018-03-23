/// <reference path="productCategory.ts" />

interface Product {
    name: string;
    price: number;
    category?: ProductCategory;
}

class Initial implements Product {
    name = 'Select a product';
    price = 0;
}

class CocaCola implements Product {
    name = 'Coca-Cola';
    price = 5.9;
    category = new SodaCategory();
}

class Peanuts implements Product {
    name = 'Peanuts Best';
    price = 2.2;
    category = new Nuts();
}

class ChipsAhoy implements Product {
    name = 'ChipsAhoy';
    price = 4.1;
    category = new Chips();
}