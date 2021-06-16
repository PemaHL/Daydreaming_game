//set up for obstacle
class Obstacle {
    constructor() {
       // this.image = image;
        this.x = (Math.random() * width);
        this.y = 0;
        this.width = 150;
        this.height = 150;
        this.index = Math.floor(Math.random() * 7)
      //  this.score = 0;

    }

    collision(playerInfo) {
        console.log('collision', playerInfo);
        console.log('collision', playerInfo);
		// get the middle of the obstacle
		const obstacleX = this.x + this.width / 2;
		const obstacleY = this.y + this.height / 2;
		// get the middle of the player
		const playerX = playerInfo.x + playerInfo.width / 2;
		const playerY = playerInfo.y + playerInfo.height / 2;
		// measure the distance between obstacle and player using the dist() function
		if (dist(obstacleX, obstacleY, playerX, playerY) > 50) {
			return false;
		} else {
      if (timerValue > 1 && game.score < 50)
			// we have a collision
			// increment score here
            //console.log(this.score);
            {game.score += 1;
            game.song.play();
            return true;}
		}
    }


    draw() {
       image(game.usefulObstImages[this.index].src, this.x, this.y, 50, 50);
       this.y++; 
        ////image(game.usefulObstImages, this.x, this.y, this.width, this.height);
        //game.usefulObstImages.forEach(function (img) {
		//	image(game.usefulObstImages[0].src, 100, 100, 50, 50);
		//	}) 
            console.log('goodies image');
    }
}