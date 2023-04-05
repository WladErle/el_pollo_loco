class Character extends MovableObject {

    y = 175;
    height = 250;
    width = 120;
    IMAGES_WALKING= [
        'img_pollo_locco/img/2_character_pepe/2_walk/W-21.png',
        'img_pollo_locco/img/2_character_pepe/2_walk/W-22.png',
        'img_pollo_locco/img/2_character_pepe/2_walk/W-23.png',
        'img_pollo_locco/img/2_character_pepe/2_walk/W-24.png',
        'img_pollo_locco/img/2_character_pepe/2_walk/W-25.png',
        'img_pollo_locco/img/2_character_pepe/2_walk/W-26.png'
    ];

   

    // Constructor: Wird aufgerufen, wenn ein neues Objekt der Klasse erstellt wird. Sollte in jedem einzelnen Objekt vorhanden sein.
    constructor() {
        super().loadImage('img_pollo_locco/img/2_character_pepe/2_walk/W-21.png'); // super(). : Wird benötigt, um den Constructor von der vererbten Klasse aufzurufen. Erst danach wird der restliche Code im Constructor ausgeführt. Ohne super(). wird die vererbte Klasse nicht korrekt ausgeführt.
        this.loadImages(this.IMAGES_WALKING);

        this.animate();
    }

    animate() {
        setInterval(() => {
        let i =  this.currentImage % this.IMAGES_WALKING.length;
        let path = this.IMAGES_WALKING[i];
        this.img=this.imageCache[path];
        this.currentImage++;
    }, 100
    );

    }


    jump() {

    }
}