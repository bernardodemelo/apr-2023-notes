class Game {
    constructor(ctx, width, height, player){
        // Canvas
        this.ctx = ctx;
        // Canvas Width, Height
        this.width = width; 
        this.height = height;
        // Player
        this.player = player;
        // Obstacles / Enemies
        this.enemies = [];
        // SetInterval
        this.intervalId = null;
        // Frames
        this.frames = 0;
        // Score
        this.score = 0;
    }

    // Start Function 
    start(){
        this.intervalId = setInterval(this.update, 10);
    }

    // Stop Function 
    stop(){
        clearInterval(this.intervalId);
    }

    // Arrow Function that Updates the Game Logic
    update = () => {
        // Updating Frames
        this.frames ++; // 100 * 10 = 1s ; 200 * 10 = 2s
        // Updating Score
        this.score += 5;
        // Clearing the Canvas
        this.clear();
        // Create our Background
        this.createBackground();
        this.player.newPos();
        this.player.draw();
        this.updateEnemies();
        this.checkGameOver();
    }

    // Clear Background
    clear(){
        this.ctx.clearRect(0,0,this.width, this.height);
    }

    createBackground(){
        const img = new Image();
        img.addEventListener('load', ()=>{
            this.img = img;
        });

        img.src= "../images/road.png";
        this.ctx.drawImage(img, 0, 0, this.width, this.height);

        ctx.fillStyle = 'white';
        ctx.font = '30px Helvetica';
        ctx.fillText(`Score ${this.score}`, 80, 30)
    }

    updateEnemies(){
        let originalY = 0;
        for (let i = 0; i<this.enemies.length; i++){
            // enemies's y ++
            this.enemies[i].y +=1; 
            // enemies' draw function
            this.enemies[i].draw();
        }
        // each 2 seconds, a enemy is updated
        if(this.frames % 200 === 0){
            let minWidth = 50; // at least of 50px of width
            let maxWidth = 400; // max width of 400px

            let width = Math.floor(Math.random()*(maxWidth - minWidth + 1) + minWidth);

            let randomX = Math.floor(Math.random() * width);

            this.enemies.push(new Component(randomX, originalY, width, 40, false, 'brown', this.ctx))
        }
    }

    checkGameOver(){
        const crashed = this.enemies.some((enemy)=>{
            return this.player.crashWith(enemy);
        })
        if(crashed){
            ctx.fillStyle = 'black';
            ctx.fillRect(50, 200, 400, 250);
            ctx.font = '32px Helvetica';
            ctx.fillStyle = 'red';
            ctx.fillText('Game Over', 150, 300);
            ctx.fillStyle = 'white';
            ctx.fillText('Your final score', 135, 350);
            this.ctx.fillText(`${this.score}`, 230, 400);
            this.stop();
        }
    }


}