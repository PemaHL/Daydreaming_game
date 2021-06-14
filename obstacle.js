//set up for obstacle
class Obstacle {
    constructor() {
       // this.image = image;
        this.x = (Math.random() * width) / 2.5;
        this.y = (height);
        this.width = 100;
        this.height = 100;
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
		if (dist(obstacleX, obstacleY, playerX, playerY) > 25) {
			return false;
		} else {
			// we have a collision
			// increment score here
			return true;
		}
    }

    draw() {
       // //this.y--; what does this mean?

        ////image(game.usefulObstImages, this.x, this.y, this.width, this.height);
        game.usefulObstImages.forEach(function (img) {
			image(img.src, img.x, 0, 50, 50);
			})
    }
}