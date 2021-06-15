//set up for player
class Player {
    constructor() {
        this.width = 200;
        this.height = 260;
        this.x = 0;
        this.y = height - this.height;
        this.velocity = 0;
        this.gravity = 0.6;

    }
    draw() {
		image(game.playerImage, this.x, this.y, this.width, this.height);
                //if player moves, here should be the logic
        this.velocity += this.gravity;
        this.y += this.velocity;
        if (this.y >= height - this.height) {
			// we reset the y to it's starting position
			this.y = height - this.height;
		}
        if (this.y <= 0) {
            this.y = 0;
        }
        this.x = constrain(this.x, 0, (width - 300))
        
            //if (keyIsDown (UP_ARROW)) {
              //  this.velocity = -10;
            //}
            //if (keyIsDown (LEFT_ARROW)) {
              //  this.x -= 10;
            //}
            //if (keyIsDown (RIGHT_ARROW)) {
              //  this.x += 10;
            //}
        }
    
    jump() {
        this.velocity = -10;  
    }
      
    moveLeft() {
       this.x -= 10;
    }
    
    moveRight() {
        this.x += 10;
    }

}