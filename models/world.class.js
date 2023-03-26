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
        new BackgroundObjects('img_pollo_locco/img/5_background/layers/air.png', 0, 0),
        new BackgroundObjects('img_pollo_locco/img/5_background/layers/3_third_layer/1.png', 0, 0),
        new BackgroundObjects('img_pollo_locco/img/5_background/layers/2_second_layer/1.png', 0, 0),
        new BackgroundObjects('img_pollo_locco/img/5_background/layers/1_first_layer/1.png', 0, 0),
    ]

    ctx;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);

        this.addObjectsToMap(this.backgrounds);
        this.addObjectsToMap(this.clouds);
        this.addObjectsToMap(this.enemies);
        this.addToMap(this.character);

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
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    }
}