class Cloud extends MovableObject {

    y = 0;
    width = 720;
    height = 480;

    constructor() {
        super().loadImage('img_pollo_locco/img/5_background/layers/4_clouds/1.png')

        this.x = 0 + Math.random() * 500;
        this.animate();
    }

    animate() {
        this.moveLeft();
    }



}