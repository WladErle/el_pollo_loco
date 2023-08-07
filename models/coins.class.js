class Coins extends MovableObject {

    y = 105;
    width = 120;
    height = 120;

    constructor() {
        super().loadImage('img_pollo_locco/img/8_coin/coin_1.png');
        this.x = 600 + Math.random() * 500;
    }

}