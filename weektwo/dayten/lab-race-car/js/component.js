class Component {
    constructor(x,y,w,h,img,color,ctx){
        // Prompting X,Y,Width,Height of the Component
        this.x = x; 
        this.y = y; 
        this.w = w;
        this.h = h;
        this.img = img;
        this.color = color; 
        this.ctx = ctx; 

        // Speed of the Component
        this.speedX = 0; 
    }

    // Draw Function 
    draw(){
        // If it's an Image
            if(this.img){
                // Creating new Image and Load
                const img = new Image();
                img.addEventListener('load', ()=>{
                    this.img = img;
                })
                // Source Image
                img.src = "../images/car.png";
                this.ctx.drawImage(img, this.x, this.y,this.w, this.h);
            } else{
                this.ctx.fillStyle = this.color;
                this.ctx.fillRect(this.x, this.y, this.w, this.h);
            }
    }

    // New Position Function 
    newPos(){
        if(this.x <= 0){
            this.x = 0;
        } else if (this.x + 70 >= 500){
            this.x = 430; // => 500-70
        }
        this.x += this.speedX;
    }
    // Info about Top
    top(){
        return this.y;
    }
    // Info about Bottom
    bottom(){
        return this.y + this.h;
    }
    // Info about Left
    left(){
        return this.x;
    }
    // Info about Right
    right(){
        return this.x + this.w;
    }

    crashWith(enemy){
        return(this.top()<enemy.bottom()&&
        this.right()>enemy.left()&&
        this.left()<enemy.right()&&
        this.bottom()>enemy.top())
    }

}