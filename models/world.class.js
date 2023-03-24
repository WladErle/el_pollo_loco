class World {

    character = new Character();
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken(),
    ]

    cloud = new Cloud();

    ctx;

    constructor(canvas){
        this.ctx = canvas.getContext('2d');
        this.draw();
    }

    draw() {

        this.ctx.clearRect(0, 0, canvas.width, canvas.height);

        this.ctx.drawImage(this.cloud.img, this.cloud.x, this.cloud.y, this.cloud.width, this.cloud.height); // 1. 100 steht für breite, 2. 100 steht für höhe.

        this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height); // 1. 100 steht für breite, 2. 100 steht für höhe.
        this.enemies.forEach(enemy => { // "enemy" ist Parameter für "new Chicken"
            this.ctx.drawImage(enemy.img, enemy.x, enemy.y, enemy.width, enemy.height);
        })
                
        //Draw wird immer wieder ausgeführt.
        let self = this;
        requestAnimationFrame(function() {
            self.draw(); // in function in einer Klasse kann man kein this. benutzen. Daher wird this als self Variable angelegt. 
        });
    
    }
}