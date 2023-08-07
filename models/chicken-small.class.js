class ChickenSmall extends MovableObject {

    y = 355;
    width = 65;
    height = 65;

    IMAGES_WALKING = [
        'img_pollo_locco/img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'img_pollo_locco/img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        'img_pollo_locco/img/3_enemies_chicken/chicken_small/1_walk/3_w.png'
    ]

    constructor() {
        super().loadImage('img_pollo_locco/img/3_enemies_chicken/chicken_small/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);

        this.x = 600 + Math.random() * 500; //Math.random wählt eine zufällige Zahl zwischen 0,0 und 1,0
        this.speed = 0.20 + Math.random() * 0.25;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 100);

        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 200);

    }
}