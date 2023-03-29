class MovableObject {
    x = 100;
    y = 250;
    img;
    height = 150;
    width = 100;
    imageCache = [];

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        setInterval(
            arr.forEach((path) => {
                let img = new Image();
                img.src = path;
                this.imageCache[path] = path;
            }), 1000)
    }


    moveRight() {
        console.log('Moving right');
    }

    moveLeft() {
        console.log('Moving left');
    }
}