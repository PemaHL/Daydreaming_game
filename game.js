//class game is created here, creates the background, calls on player and obstacle

class Game {
   constructor() {
        this.backgroundImage;
        this.score = 0;
        this.song;
    }

    setup() {
        this.player = new Player();
        this.background = new Background();
        this.obstacles = [];
    }

    preload() {
        soundFormats('ogg');
        this.song = loadSound('Assets/Music/jingles_PIZZI00.ogg');
        this.backgroundImage = loadImage('../Assets/background/Background.jpg');
        this.playerImage = loadImage('../Assets/player/Jump.gif');
        //add obstacles images
        this.usefulObstImages = [
			{ src: loadImage('../Assets/obstacleUseful/beer.png'), y: 0, speed: 2 },
			//{ src: loadImage('../Assets/obstacleUseful/club.png'), y: 0, speed: 2 },
			{ src: loadImage('../Assets/obstacleUseful/cherry.png'), y: 0, speed: 2 },
			{ src: loadImage('../Assets/obstacleUseful/cupcake.png'), y: 0, speed: 2 },
			{ src: loadImage('../Assets/obstacleUseful/euro_screen.png'), y: 0, speed: 2 },
            { src: loadImage('../Assets/obstacleUseful/pizza_screen.png'), y: 0, speed: 2 },
            { src: loadImage('../Assets/obstacleUseful/wineWhite.png'), y: 0, speed: 2 },
            { src: loadImage('../Assets/obstacleUseful/wineRed.png'), y: 0, speed: 2 },
            { src: loadImage('../Assets/obstacleUseful/cake.png'), y: 0, speed: 2 }
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
            return true;
            //Text("score:")
            
        }
     obstacle.collision(this.player);
    })
    document.querySelector('h3').querySelector('span').innerText = this.score;
}
}