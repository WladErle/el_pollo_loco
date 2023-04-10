class World {

    character = new Character();
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken()
    ]

    clouds = [
        new Cloud()
    ]

    backgrounds = [
        new BackgroundObjects('img_pollo_locco/img/5_background/layers/air.png', -719, 0),
        new BackgroundObjects('img_pollo_locco/img/5_background/layers/3_third_layer/2.png', -719, 0),
        new BackgroundObjects('img_pollo_locco/img/5_background/layers/2_second_layer/2.png', -719, 0),
        new BackgroundObjects('img_pollo_locco/img/5_background/layers/1_first_layer/2.png', -719, 0),

        new BackgroundObjects('img_pollo_locco/img/5_background/layers/air.png', 0, 0),
        new BackgroundObjects('img_pollo_locco/img/5_background/layers/3_third_layer/1.png', 0, 0),
        new BackgroundObjects('img_pollo_locco/img/5_background/layers/2_second_layer/1.png', 0, 0),
        new BackgroundObjects('img_pollo_locco/img/5_background/layers/1_first_layer/1.png', 0, 0),
        new BackgroundObjects('img_pollo_locco/img/5_background/layers/air.png', 719, 0),
        new BackgroundObjects('img_pollo_locco/img/5_background/layers/3_third_layer/2.png', 719, 0),
        new BackgroundObjects('img_pollo_locco/img/5_background/layers/2_second_layer/2.png', 719, 0),
        new BackgroundObjects('img_pollo_locco/img/5_background/layers/1_first_layer/2.png', 719, 0),

        new BackgroundObjects('img_pollo_locco/img/5_background/layers/air.png', 719*2, 0),
        new BackgroundObjects('img_pollo_locco/img/5_background/layers/3_third_layer/1.png', 719*2, 0),
        new BackgroundObjects('img_pollo_locco/img/5_background/layers/2_second_layer/1.png', 719*2, 0),
        new BackgroundObjects('img_pollo_locco/img/5_background/layers/1_first_layer/1.png', 719*2, 0),
        new BackgroundObjects('img_pollo_locco/img/5_background/layers/air.png', 719*3, 0),
        new BackgroundObjects('img_pollo_locco/img/5_background/layers/3_third_layer/2.png', 719*3, 0),
        new BackgroundObjects('img_pollo_locco/img/5_background/layers/2_second_layer/2.png', 719*3, 0),
        new BackgroundObjects('img_pollo_locco/img/5_background/layers/1_first_layer/2.png', 719*3, 0),
    ]

    ctx;
    canvas;
    keyboard;
    camera_x = 0;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }

    setWorld() {
        this.character.world = this;
    }

    draw() {
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.backgrounds);
        this.addObjectsToMap(this.clouds);
        this.addObjectsToMap(this.enemies);
        this.addToMap(this.character);

        this.ctx.translate(-this.camera_x, 0);

        //Draw wird immer wieder ausgeführt.
        let self = this;
        requestAnimationFrame(function() {
            self.draw(); // in function in einer Klasse kann man kein this. benutzen. Daher wird this als self Variable angelegt. 
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        })
    }

    addToMap(mo) { // mo= MovableObjects
        if (mo.otherDirection) {
            this.ctx.save();
            this.ctx.translate(mo.width, 0);
            this.ctx.scale(-1, 1);
            mo.x = mo.x * -1;    
        }

        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
        if(mo.otherDirection) {
            mo.x = mo.x * -1;
            this.ctx.restore();
        }
    }
}