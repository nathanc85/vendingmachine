namespace Coins {
    let imagePath = 'img/';

    export abstract class Coin {
        constructor(public value: number) {
            this.value = value;
        }
        abstract getImageUrl(): string;
    }

    export class Dime extends Coin {
        constructor() {
            super(.10);
        }

        getImageUrl(): string {
            return imagePath + "Dime.png"
        }
    }

    export class Quarter extends Coin {
        constructor() {
            super(.25);
        }

        getImageUrl(): string {
            return imagePath + "Quarter.png";
        }
    }

    export class Half extends Coin {
        constructor() {
            super(.50);
        }

        getImageUrl(): string {
            return imagePath + "Half.png";
        }
    }

    export class Dollar extends Coin {
        constructor() {
            super(1);
        }

        getImageUrl(): string {
            return imagePath + "Dollar.jpg";
        }
    }

}