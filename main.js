//where the main final functions would go
const game = new Game();
var timerValue = 120;
var winMusic;
var loseMusic;

function preload() {
	game.preload();
    soundFormats('ogg');
    winMusic = loadSound('../Assets/Music/win.ogg');
    loseMusic = loadSound('../Assets/Music/lose.ogg');
}

function setup() {
    createCanvas(1000, 1000);
    game.setup();
    textAlign(CENTER, CENTER);
    textSize(100);
    setInterval(timeIt, 1000);
   // song.play();
}

function draw() {
    game.draw();
    if (timerValue <= 60 && timerValue >= 10) {
        text("0:" +timerValue, width / 2, height / 2);
      }
     if (timerValue < 10) {
         text('0:0' + timerValue, width / 2, height / 2);
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

function timeIt() {
    if(timerValue > 0) {
        timerValue--;
    }
    console.log('timer')
}
//want to change to keyIsDown