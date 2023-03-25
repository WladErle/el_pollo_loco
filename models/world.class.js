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
        new BackgroundObjects('img_pollo_locco/img/5_background/layers/air.png'), 
        new BackgroundObjects('img_pollo_locco/img/5_background/layers/3_third_layer/1.png'), 
        new BackgroundObjects('img_pollo_locco/img/5_background/layers/2_second_layer/1.png'),
        new BackgroundObjects('img_pollo_locco/img/5_background/layers/1_first_layer/1.png'),
        
    ]

    ctx;

    constructor(canvas){
        this.ctx = canvas.getContext('2d');
        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.drawBackgroundObjects();  
        this.drawClouds();
        this.drawCharacter();      
        this.drawEnemies(); 
            
                
        //Draw wird immer wieder ausgeführt.
        let self = this;
        requestAnimationFrame(function() {
            self.draw(); // in function in einer Klasse kann man kein this. benutzen. Daher wird this als self Variable angelegt. 
        });
    }

    drawClouds(){
        this.clouds.forEach(cloud => { 
            this.ctx.drawImage(cloud.img, cloud.x, cloud.y, cloud.width, cloud.height);
            }) 
    }

    drawCharacter(){
        this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height); 
    }

    drawEnemies() {
        this.enemies.forEach(enemy => { // "enemy" ist Parameter für "new Chicken"
            this.ctx.drawImage(enemy.img, enemy.x, enemy.y, enemy.width, enemy.height);
        })
    }

    drawBackgroundObjects() {
        this.backgrounds.forEach(background => { // "enemy" ist Parameter für "new Chicken"
            this.ctx.drawImage(background.img, background.x, background.y, background.width, background.height);
        })
    }

}