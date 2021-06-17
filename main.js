//where the main final functions would go
const game = new Game();
var timerValue = 120;
var winMusic;
var loseMusic;
var button;
var mode;

function preload() {
	game.preload();
    soundFormats('ogg');
    winMusic = loadSound('../Assets/Music/win.ogg');
    loseMusic = loadSound('../Assets/Music/lose.ogg');
}

function setup() {
    mode = 0;
    createCanvas(1000, 1000);
    game.setup();
    textAlign(CENTER, CENTER);
    textSize(100);
    setInterval(timeIt, 1000);
    //button = createButton('Click to play');
    //button.position(0, 0);
    //button.mousePressed(start);
   // song.play();
}


function draw() {
  clear();
  if (mode == 0) {
    text('Press ENTER to start', 500, 500);
    textSize(50);
    textAlign(CENTER, CENTER);
    fill(187, 87, 65);
  }

  if (mode == 1) {
    game.draw();
    if (timerValue <= 60 && timerValue >= 10) {
        text("0:" +timerValue, width / 2, height / 2);
        fill('black')
      }
     if (timerValue < 10) {
         text('0:0' + timerValue, width / 2, height / 2);
         fill('red')
      }
      if (game.score >= 50) {
          clear();
        textSize(60);
        fill(187, 87, 65);
        text('Hey winner, enjoy the weekend!', width / 2, height / 2);
        winMusic.play().duration(2);
     }
      if (timerValue == 0 && game.score < 50) {
          clear();
        textSize(50);
        fill(35, 117, 67);
        text('Oh well my friend, next time', width / 2, height / 2 );
        loseMusic.play().duration(2);
      }
    }
}



//function keyPressed() {
//	if (keyCode === 38) {
//		game.player.jump();
	//}
    //if (keyCode === 37) {
      //  game.player.moveLeft();
    //}
    //if (keyCode === 39) {
      // game.player.moveRight();
    //}
//}

function keyPressed() {
  if (keyCode === ENTER) {
    mode = 1;
  }
}

function timeIt() {
    if(timerValue > 0) {
        timerValue--;
    }
    console.log('timer')
}
//want to change to keyIsDown