abstract class ProductCategory {
    protected path = 'img/'
    name: string;
    abstract getImageUrl(): string;
}

class SodaCategory extends ProductCategory{
    name = 'Soda';
    getImageUrl() {
        return this.path + 'SodaCan.png';
    }
}

class Nuts extends ProductCategory{
    name = 'Nuts';
    getImageUrl() {
        return this.path + 'Nuts.png';
    }
}

class Chips extends ProductCategory{
    name = 'Chips';
    getImageUrl() {
        return this.path + 'Chips.png';
    }
}

class CandyBar extends ProductCategory{
    name = 'Candy Bar';
    getImageUrl() {
        return this.path + 'CandyBar.png';
    }
}

class Candy extends ProductCategory{
    name = 'Candy';
    getImageUrl() {
        return this.path + 'Candy.png';
    }
}