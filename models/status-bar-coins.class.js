class StatusBarCoins extends DrawableObject {

    IMAGES_STATUS_COINS = [
        'img_pollo_locco/img/7_statusbars/1_statusbar/1_statusbar_coin/orange/0.png',
        'img_pollo_locco/img/7_statusbars/1_statusbar/1_statusbar_coin/orange/20.png',
        'img_pollo_locco/img/7_statusbars/1_statusbar/1_statusbar_coin/orange/40.png',
        'img_pollo_locco/img/7_statusbars/1_statusbar/1_statusbar_coin/orange/60.png',
        'img_pollo_locco/img/7_statusbars/1_statusbar/1_statusbar_coin/orange/80.png',
        'img_pollo_locco/img/7_statusbars/1_statusbar/1_statusbar_coin/orange/100.png'
        
    ];

    constructor() {
        super();
        this.loadImages(this.IMAGES_STATUS_COINS);
        this.x = 20;
        this.y = 70;
        this.width = 200;
        this.height = 50;
        this.setPercentageCoins(0);
    }
    

    setPercentageCoins(percentageCoins){
        this.percentageCoins = percentageCoins; // => 0...5
        let path = this.IMAGES_STATUS_COINS[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }


    resolveImageIndex() {
            if (this.percentageCoins == 100) {
                    return 5;   
                } else if (this.percentageCoins > 80) {
                     return 4;
                } else if (this.percentageCoins > 60) {
                    return 3;
                } else if (this.percentageCoins > 40) {
                    return 2;
                } else if (this. percentageCoins > 20) {
                    return 1;
                } else {
                    return 0;
                }
            }      
    

        collectCoin() {
            this.percentageCoins = this.percentageCoins + 10; 
            if (this.percentageCoins > 100) {
                this.percentageCoins = 100;
            }
            console.log(this.percentageCoins);
            this.setPercentageCoins(this.percentageCoins);
        }
    
    }



