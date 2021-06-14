//class game is created here, creates the background, calls on player and obstacle
class Game {
   constructor() {
        this.backgroundImage;
    }

    setup() {
        this.player = new Player();
        this.background = new Background();
        this.obstacles = [];
    }

    preload() {
        this.backgroundImage = loadImage('../Assets/background/Background.jpg');
        this.playerImage = loadImage('../Assets/player/Jump.gif');
        //add obstacles images
        this.usefulObstImages = [
			{ src: loadImage('../Assets/obstacleUseful/beer.png'), y: 0, speed: 2 },
			{ src: loadImage('../Assets/obstacleUseful/club.png'), y: 0, speed: 2 },
			{ src: loadImage('../Assets/obstacleUseful/coconut.png'), y: 0, speed: 2 },
			{ src: loadImage('../Assets/obstacleUseful/cupcake.png'), y: 0, speed: 2 },
			{ src: loadImage('../Assets/obstacleUseful/euro.jpg'), y: 0, speed: 2 },
            { src: loadImage('../Assets/obstacleUseful/grapes.png'), y: 0, speed: 2 },
            { src: loadImage('../Assets/obstacleUseful/pizza.png'), y: 0, speed: 2 },
            { src: loadImage('../Assets/obstacleUseful/redWine.png'), y: 0, speed: 2 },
            { src: loadImage('../Assets/obstacleUseful/whiteWine.png'), y: 0, speed: 2 },
		];
    }

draw() {
    clear();
    this.background.draw();
    this.player.draw();
    //here logic for pushing the obstacles
    if (frameCount % 60 === 0) {
        this.obstacles.push(new Obstacle(this.usefulObstImages));
        console.log(this.obstacles);
    }
    // we iterate over the obstacles array and call their draw function for every obstacle 
    this.obstacles.forEach(function (obstacle) {
        obstacle.draw();
    })
    // we use array filter to remove coins that collide with the player from the array
    this.obstacles = this.obstacles.filter(obstacle => {
        if (obstacle.collision(this.player || (obstacle.x + obstacle.width) < 0)) {
            return false;
        } else {
            return true
        }
        // obstacle.collision(this.player);
    })
}
}