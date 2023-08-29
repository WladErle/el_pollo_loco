
class Bottles extends DrawableObject {

    x = 100;
    y = 150;
    height = 70;
    width = 50;

    offset = {
        top: 0,
        left: 25,
        right: 25,
        bottom: 0
    };

    IMAGE_BOTTLE = [
        'img_pollo_locco/img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
        'img_pollo_locco/img/6_salsa_bottle/2_salsa_bottle_on_ground.png',
    ];

    constructor(x) {
        super();
        this.loadImages(this.IMAGE_BOTTLE);
           this.setImage();
        this.x = x + Math.random() * 500;
    }

    setImage() {
        let path = this.IMAGE_BOTTLE[this.randomizer()];
        this.img = this.imageCache[path];
    }

    randomizer() {
        return Math.floor(Math.random() * 2);
    }
}