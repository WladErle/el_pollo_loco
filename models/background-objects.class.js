class BackgroundObjects extends MovableObject{
    y = 0;
    x=0;
    height= 480;
    width=720;



    constructor(imagePath){
        super().loadImage(imagePath);    
    }
}