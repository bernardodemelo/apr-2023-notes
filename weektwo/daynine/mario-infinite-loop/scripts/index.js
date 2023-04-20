//JS Initialization
console.log('JS is loaded!');

//Canvas Iniitalization 
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const img = new Image();
img.src="./images/mario-infinite-background.png";

function updateCanvas(){
    backgroundImage.move();

    ctx.clearRect(0, 0, canvas.width, canvas.heigth);
    backgroundImage.draw();

    requestAnimationFrame(updateCanvas);
}

img.onload = updateCanvas;