//set up for player
class Player {
    constructor() {
        this.width = 100;
        this.height = 130;
        this.x = 0;
        this.y = height - this.height;
        this.velocity = 0;
        this.gravity = 0.9;

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
        this.x = constrain(this.x, 0, (width - this.width))
        
            //if (keyIsDown (38)) {
              //  this.velocity = -10;
            //}
            if (keyIsDown (37)) {
                this.x -= 10;
            }
            if (keyIsDown (39)) {
                this.x += 10;
            }
        }
    
    jump() {
      if (timerValue > 0) {
        this.velocity = -10;  
      }
    }
      
    //moveLeft() {
      //if (timerValue > 0) {
       //this.x -= 10;
      //}
    //}
    
    //moveRight() {
      //if (timerValue > 0) {
        //this.x += 10;
      //}
    //}
}