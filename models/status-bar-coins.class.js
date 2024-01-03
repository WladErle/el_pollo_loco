class StatusBarCoins extends DrawableObject {

    IMAGES_STATUS_COINS = [
        'img_pollo_locco/img/7_statusbars/1_statusbar/1_statusbar_coin/orange/0.png',
        'img_pollo_locco/img/7_statusbars/1_statusbar/1_statusbar_coin/orange/20.png',
        'img_pollo_locco/img/7_statusbars/1_statusbar/1_statusbar_coin/orange/30.png',
        'img_pollo_locco/img/7_statusbars/1_statusbar/1_statusbar_coin/orange/40.png',
        'img_pollo_locco/img/7_statusbars/1_statusbar/1_statusbar_coin/orange/50.png',
        'img_pollo_locco/img/7_statusbars/1_statusbar/1_statusbar_coin/orange/60.png'
        
    ];

    percentage = 0;
    collected = 0;

    constructor() {
        super();
        this.loadImages(this.IMAGES_STATUS_COINS);
        this.x = 20;
        this.y = 70;
        this.width = 200;
        this.height = 50;
        this.setPercentage(0);
    }
    

    setPercentage(percentage){
        this.percentage = percentage; // => 0...5
        let path = this.IMAGES_STATUS_COINS[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }


    resolveImageIndex() {
        return Math.min(Math.floor(this.percentage / 20), 5);
    }

    

}


