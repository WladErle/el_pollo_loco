
class Bottles extends DrawableObject {

    static lastX = 400;
    y = 360;
    height = 70;
    width = 50;

    offset = {
        top: 2,
        left: 20,
        right: 20,
        bottom: 2
    };

       IMAGE_BOTTLE = [
        'img_pollo_locco/img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
        'img_pollo_locco/img/6_salsa_bottle/2_salsa_bottle_on_ground.png'
    ];

    constructor(x) {
        super();
        this.loadImages(this.IMAGE_BOTTLE);
         this.setImage();
         this.x = Bottles.lastX + this.width + 1 + Math.random() * 250;
         Bottles.lastX = this.x;
    }

   setImage() {
        let path = this.IMAGE_BOTTLE[this.randomizer()];
        this.img = this.imageCache[path];
    }

    randomizer() {
        return Math.floor(Math.random() * 2);
    }
}0