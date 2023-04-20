// JS Initialization
console.log('JS loaded!');

// Canvas Initialization
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Variable Declaration
let speed1 = 0; 
let speed2 = 0; 
let speed3 = 0;

// Clear Canvas
function clearCanvas(){
    ctx.clearRect(0,0,700,450);
}

// Draws Elemements inside the Cnvas
function drawCanvas(x,y,w,h,color){
    ctx.fillStyle = color;
    ctx.fillRect(x,y,w,h);
}

// Animates the Canvas
function updateCanvas(){
    // Variable Update
    speed1+=1;
    speed2+=2;
    speed3+=3;

    // Clear the Canvas
    clearCanvas();

    //Draw Canvas
    //1st Square 
    drawCanvas(50, speed1, 50, 50, 'red');
    //2nd Square
    drawCanvas(150, speed2, 50, 50, 'green');
    //3d Square
    drawCanvas(250, speed3, 50, 50, 'yellow');

    requestAnimationFrame(updateCanvas);
}

updateCanvas();