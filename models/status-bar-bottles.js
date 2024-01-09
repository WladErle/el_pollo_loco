class StatusBarBottles extends DrawableObject {

    IMAGES_STATUS_BOTTLES = [
        'img_pollo_locco/img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/0.png',
        'img_pollo_locco/img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/20.png',
        'img_pollo_locco/img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/40.png',
        'img_pollo_locco/img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/60.png',
        'img_pollo_locco/img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/80.png',
        'img_pollo_locco/img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/100.png',
    ];

    percentage = 0;

    constructor() {
        super();
        this.loadImages(this.IMAGES_STATUS_BOTTLES);
        this.x = 20;
        this.y = 30;
        this.width = 200;
        this.height = 50;
        this.setPercentageBottles(0);
    }
    

    setPercentageBottles(percentageBottles){
        this.percentageBottles = percentageBottles; // => 0...5
        let path = this.IMAGES_STATUS_BOTTLES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.percentageBottles == 100) {
                return 5;   
            } else if (this.percentageBottles >= 80) {
                 return 4;
            } else if (this.percentageBottles >= 60) {
                return 3;
            } else if (this.percentageBottles >= 40) {
                return 2;
            } else if (this. percentageBottles >= 20) {
                return 1;
            } else {
                return 0;
            }
        }      


    collectBottle() { 
        this.percentageBottles = this.percentageBottles + 20; 
        if (this.percentageBottles > 100) {
            this.percentageBottles = 100;
        }
        console.log(this.percentageBottles);
        this.setPercentageBottles(this.percentageBottles);
    }

    }

