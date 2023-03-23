let canvas;
let world;

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas);
    
    console.log('My character is', world.character, 'and my enemies are', world.enemies);
}