class World {

    character = new Character();
    level = level1;
    ctx;
    canvas;
    keyboard;
    camera_x = 0;
    statusBarHealth= new StatusBarHealth();
    statusBarBottles = new StatusBarBottles();
    statusBarCoins = new StatusBarCoins();
    throwableObjects = [];

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    setWorld() {
        this.character.world = this;
    }

    run() {
        setInterval(()=> {
            this.checkCollisionsEnemy();
            this.checkThrowObjects();
            this.checkCollectionCoins();
        }, 200);
    }

    checkThrowObjects() {
        if (this.keyboard.D) {
            let bottle_rotation = new ThrowableObject(this.character.x + 100, this.character.y+100); 
            this.throwableObjects.push(bottle_rotation);
        }
    }

    checkCollisionsEnemy() {
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                if (this.character.isColliding(enemy)) {
                    this.character.hit();
                    this.statusBarHealth.setPercentage(this.character.energy);
                }
            });
        }, 200);
    }

    checkCollectionCoins() {
        this.level.coins.forEach((coin) => {
            if (this.character.isColliding(coin)) {
                console.log('Mit Coin kollidiert');
                //collectCoinSound.play();
                //this.increaseCoinBar();
                //this.coinCollected(coin);
                this.statusBarCoins.setPercentage(this.character.setCoins);
            }
         });
    }

    

    draw() {
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgrounds);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.bottles);
        this.addObjectsToMap(this.throwableObjects);


        this.ctx.translate(-this.camera_x, 0);
        // ------ Space for fixed objects -----
        this.addToMap(this.statusBarHealth);
        this.addToMap(this.statusBarBottles);
        this.addToMap(this.statusBarCoins);
        this.ctx.translate(this.camera_x, 0);

        

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
            this.flipImage(mo);
        }

        mo.draw(this.ctx);
        
        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }

    

}

