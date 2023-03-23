class World {

    character = new Character();
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken(),
    ]

    ctx;

    constructor(canvas){
        this.ctx = canvas.getContext('2d');
        this.draw();
    }

    

    draw() {

        this.ctx.clearRect(0, 0, canvas.width, canvas.height);

        this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height); // 1. 100 steht für breite, 2. 100 steht für höhe.
        this.enemies.forEach(enemy => {
            this.ctx.drawImage(enemy.img, enemy.x, enemy.y, enemy.width, enemy.height);
        })
        
        
        //Draw wird immer wieder ausgeführt.
        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        });
    
    }
}