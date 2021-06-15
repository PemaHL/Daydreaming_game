//where the main final functions would go
const game = new Game();
var timerValue = 120;
var startButton;

function setup() {
    createCanvas(1000, 1000);
    game.setup();
    textAlign(CENTER, CENTER);
    textSize(100);
    setInterval(timeIt, 1000);
}

function draw() {
    game.draw();
    if (timerValue <= 60 && timerValue >= 10) {
        text("0:" +timerValue, width / 2, height / 2);
      }
     if (timerValue < 10) {
         text('0:0' + timerValue, width / 2, height / 2);
      }
      if (game.score >= 10) {
          clear();
        textSize(50);
        text('Hey you have won! Enjoy the weekend!', width / 2, height / 2);
        fill('blue');
     }
      if (timerValue == 0) {
          clear();
        textSize(50);
        text('FREEZE, GAME OVER', width / 2, height / 2 );
        fill('red');
      }
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

function timeIt() {
    if(timerValue > 0) {
        timerValue--;
    }
    console.log('timer')
}
//want to change to keyIsDown