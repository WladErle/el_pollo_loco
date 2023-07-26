class MovableObject {
    x = 100;
    y = 250;
    img;
    height = 120;
    width = 100;
    imageCache = [];
    currentImage = 0;
    speed = 0.3;
    otherDirection = false;


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }


    moveRight() {
        console.log('Moving right');
    }

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 100);
    }
}