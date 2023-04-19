/* function draw() {
    // Canvas Initialization
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d'); */

    /* 

    // Rectangles

    ctx.fillStyle = 'purple'; 

    // .fillStyle => sets the background colour 
    of filled elements (like rectangles); 
    
    // 'black' is the default value;
    
    ctx.fillRect(135, 135, 30, 30);  
    
    // .fillRect => creates a rectangle that 
    // starts on x= 135px and y=135px with 
    // width: 30px and height: 30px;

    */

    // More Rectangles

    /* 
    
    ctx.fillStyle='black';
    ctx.strokeStyle='black'; // .strokeStyle => sets the stoke color 
    // of a canvas element.

    ctx.fillRect(25,25, 100, 100);
    ctx.clearRect(45,45,60,60); // => .clearRect => clears a rectangle 
    // within a given rectangle.

    // => PARAMETERS: clearRect(x,y,width,height);

    ctx.strokeRect(50, 50, 50, 50); // => .strokeRect => it outlines a
    // rectangle. 

        // => PARAMETERS: strokeRect(x,y,width,height);

    */

    /*
    // Paths
    
    // First Line

    ctx.beginPath(); // => .beginPath() => begins the Path
    ctx.moveTo(50,50); // => .moveTo() => moves the "canvas'pen"
    to 50px on X-axis and 50px on Y-axis. 

        // => PARAMETERS: moveTo(50, 50);

    ctx.lineTo(250,50); // .lineTo() => draws a line to 250px on X-axis.

    ctx.stroke(); // => .stroke() => calls a function to draw the line.

    // Style
    ctx.lineWidth ="5.0"; // => .lineWidth => gives more or less 
    // width to the line. 
    ctx.lineCap="round"; // => sets the appearance of the last line. 

    // Second Line
    ctx.moveTo(250, 50);
    ctx.lineTo(250, 100);
    ctx.stroke();
    
    ctx.closePath(); // => closes the Path.
    
    */
    
    /*

    // Arcs

    // First Circle
    ctx.beginPath();
    ctx.arc(150, 170, 75, 0, Math.PI * 2); // .arc() => creates a circle

        // => PARAMETERS: arc(x, y, radius, 0, Math.PI * 2);

    ctx.lineWidth = '20';
    ctx.strokeStyle = 'green'; // .strokeStyle => gives color to 
    // the border of circle.
    ctx.stroke();
    ctx.closePath();

    // Second Cicle 
    ctx.beginPath();
    ctx.arc(150, 170, 35, 0, Math.PI * 2);
    ctx.fillStyle = 'red'; // .fillStyle => gives color to the 
    // background of circle. 
    ctx.fill();
    ctx.closePath();
    
    */

    /*

    // Text
    ctx.fillStyle = 'orange'; // => gives color to the text.
    ctx.font = '30px Arial'; // .font => gives font-size 
    // and font-family to text

    ctx.fillText("Hello, world!", 20, 40); => creates Text. 
        
        // => PARAMETERS: fillText(text, x, y);
    */
    
    /*
    // Image

    const catImg = new Image();

    let catX = 0;
    let catY = 0;

    catImg.src="./images/angrycat.jpg";

    catImg.onload = function(){
        ctx.drawImage(catImg, catX, catY, 50, 50);
    };   
}
*/

/*
draw();
*/