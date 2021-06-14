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