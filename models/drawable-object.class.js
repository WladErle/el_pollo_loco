class DrawableObject {
    imageCache = [];
    img;
    x = 100;
    y = 250;
    height = 120;
    width = 100;
    currentImage = 0;
    setCoins=0;

    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    }

    // loadImage('img/test.png');
    loadImage(path) {
        this.img = new Image(); // this.img = document.getElementById('image'); <img id="image" src>
        this.img.src = path;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);       
    }

    
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }


}