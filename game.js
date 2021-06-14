//class game is created here, creates the background, calls on player and obstacle
class Game {
   constructor() {
        this.backgroundImage;
    }

    setup() {
        this.player = new Player();
        this.background = new Background();
       // this.obstacles = [];
    }

    preload() {
        this.backgroundImage = loadImage('../Assets/background/Background.jpg');
        this.playerImage = loadImage('../Assets/player/Jump.gif');
        //add obstacles images
    }

draw() {
    clear();
    this.background.draw();
    this.player.draw();
    //here logic for pushing the obstacles
}
}