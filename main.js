//where the main final functions would go
const game = new Game();
var timerValue = 120;
//var song;

function preload() {
	game.preload();
   // soundFormats('ogg');
    //song = loadSound('../Assets/Music/jingles_STEEL00.ogg');
    
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
      if (game.score >= 100) {
          clear();
        textSize(60);
        text('Hey winner, enjoy the weekend!', width / 2, height / 2);
        fill(187, 87, 65);
     }
      if (timerValue == 0 && game.score < 50) {
          clear();
        textSize(50);
        text('Oh well my friend, next time', width / 2, height / 2 );
        fill('red');
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