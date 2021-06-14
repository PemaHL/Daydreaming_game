//set up for player
class Player {
    constructor() {
        this.width = 300;
        this.height = 350;
        this.x = 0;
        this.y = height - this.height;
    }
    draw() {
        //if player moves, here should be the logic
		image(game.playerImage, this.x, this.y, this.width, this.height);
    }
}