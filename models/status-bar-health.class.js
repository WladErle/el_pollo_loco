class StatusBarHealth extends DrawableObject {

    IMAGES_STATUS_HEALTH = [
        'img_pollo_locco/img/7_statusbars/1_statusbar/2_statusbar_health/green/0.png',
        'img_pollo_locco/img/7_statusbars/1_statusbar/2_statusbar_health/green/20.png',
        'img_pollo_locco/img/7_statusbars/1_statusbar/2_statusbar_health/green/40.png',
        'img_pollo_locco/img/7_statusbars/1_statusbar/2_statusbar_health/green/60.png',
        'img_pollo_locco/img/7_statusbars/1_statusbar/2_statusbar_health/green/80.png',
        'img_pollo_locco/img/7_statusbars/1_statusbar/2_statusbar_health/green/100.png'
    ];

    percentage = 100;

    constructor() {
        super();
        this.loadImages(this.IMAGES_STATUS_HEALTH);
        this.x = 20;
        this.y = -10;
        this.width = 200;
        this.height = 50;
        this.setPercentage(100);
    }
    

    setPercentage(percentage){
        this.percentage = percentage; // => 0...5
        let path = this.IMAGES_STATUS_HEALTH[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }


    resolveImageIndex() {
        if (this.percentage == 100) {
                return 5;   
            } else if (this.percentage > 80) {
                return 4;
            } else if (this.percentage > 60) {
                return 3;
            } else if (this.percentage > 40) {
                return 2;
            } else if (this. percentage > 20) {
                return 1;
            } else {
                return 0;
            }
        }      
    }

