//where the main final functions would go
const game = new Game();

function setup() {
    createCanvas(1200, 1200);
    game.setup();
}

function draw() {
    game.draw();
}

function preload() {
	game.preload();
}

function keyPressed() {
	if (keyCode === 38) {
		game.player.jump();
	}
    if (keyCode === 37) {
        game.player.moveLeft();
    }
    if (keyCode === 39) {
       game.player.moveRight();
    }
}

//want to change to keyIsDown