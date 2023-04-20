// JS Initialization 
console.log('JS is loaded!');

//Canvas Initalization 
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

document.addEventListener('keydown', e=>{
    switch(e.keyCode){
        case 38:
            ghost.moveUp();
            break;
        case 40:
            ghost.moveDown();
            break;
        case 37: 
            ghost.moveLeft();
            break; 
        case 39: 
            ghost.moveRight();
            break;
    }
    updateCanvas();
});

function updateCanvas(){
    // Clear Canvas
    ctx.clearRect(0, 0, 700, 500);
    // Draw the Character
    ghost.draw();
}