class Coins extends DrawableObject {
    static lastX = 400;  // Eine statische Variable, die die letzte x-Position speichert
    y = 150;
    width = 120;
    height = 120;

    offset = {
        top: 40,
        left: 40,
        right: 40,
        bottom: 40
    };

    constructor() {
        super().loadImage('img_pollo_locco/img/8_coin/coin_1.png');

        // Verwenden Sie die zuletzt zugewiesene x-Position und fügen Sie einen Abstand von mindestens 10px hinzu
        this.x = Coins.lastX + this.width + 1 + Math.random() * 300;

        // Aktualisieren Sie die statische Variable lastX
        Coins.lastX = this.x;
    }
}