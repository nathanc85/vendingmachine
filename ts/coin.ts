class Quarter {
    private value= .25;

    get Value() {
        return this.value;
    }

    set Value(newValue) {
        this.value = newValue;
    }
    getImageUrl(): string {
        return "img/Quarter.png";
    }
}

let coin = new Quarter();
