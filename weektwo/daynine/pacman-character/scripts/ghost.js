class Ghost {
    constructor(){
        this.x = 25; // original x
        this.y= 25; // original y

    const img = new Image()
    img.addEventListener('load', ()=>{
        this.img = img;
        this.draw();
    });

    img.src="https://media.giphy.com/media/Qr8JE9Hvi7ave/200.gif"
    }

    moveUp() {
        this.y -= 25;
    }

    moveDown(){
        this.y += 25;
    }

    moveLeft(){
        this.x -= 25;
    }

    moveRight(){
        this.x += 25;
    }

    draw(){
       ctx.drawImage(this.img, this.x, this.y, 50, 50); 
    }
}

const ghost = new Ghost();