class Chicken extends MovableObject {

    
    
    constructor() {
        super().loadImage('img_pollo_locco/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png')

        this.x = 200 + Math.random()*500; //Math.random wählt eine zufällige Zahl zwischen 0,0 und 1,0
     }
    
}