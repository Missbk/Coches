var canvas;
var backgroundImage, car1_img, car2_img, track;
var database, gameState;
var form, player, playerCount;
var allPlayers, 
var car1, car2;
var cars = [];

function preload() {
  backgroundImage = loadImage("./assets/background.png");
 // car1_img = loadImage("../assets/car1.png");
 // car2_img = loadImage("../assets/car2.png");
//  track = loadImage("../assets/track.jpg");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {  //Comprueba si gameState es 2, actualiza a 1
    game.update(1);
  }

  if (gameState === 1) { //si es 1 llamammos a game.play
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
