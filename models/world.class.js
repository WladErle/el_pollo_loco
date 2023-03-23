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
        this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height); // 1. 100 steht für breite, 2. 100 steht für höhe.
    }
}