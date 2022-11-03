// setInterval(gameLoop, 33); // 33 milliseconds = ~ 30 frames per sec
//Creating drawing vars
let canvas;
let context;
//Input vars
let upKey;
let rightKey;
let downKey;
let leftKey;
//Game vars
let gameLoop;
let player;

//Runs when canvas is loaded
window.onload = function () {
  //Assigning canvas and context vars
  canvas = document.getElementById("game-window");
  context = canvas.getContext("2d");

  //Setup key listeners
  setupInputs();

  //Create Player
  player = new Player(100, 400);
  step();

  //Start game loop
  gameLoop = setInterval(step, 1000 / 30);
};

function step() {
  //Step player
  player.step();

  //Draw everything
  draw();
}

function draw() {
  //Clear canvas
  context.fillStyle = "white";
  context.fillRect(0, 0, 720, 1280);

  //Draw the player
  player.draw();
}

function setupInputs() {
  document.addEventListener("keydown", function (event) {
    if (event.key === "w" || event.key === "ArrowUp") {
      upKey = true;
    } else if (event.key === "s" || event.key === "ArrowDown") {
      downKey = true;
    } else if (event.key === "a" || event.key === "ArrowLeft") {
      leftKey = true;
    } else if (event.key === "d" || event.key === "ArrowRight") {
      rightKey = true;
    }
  });
  document.addEventListener("keyup", function (event) {
    if (event.key === "w" || event.key === "ArrowUp") {
      upKey = false;
      s;
    } else if (event.key === "s" || event.key === "ArrowDown") {
      downKey = false;
    } else if (event.key === "a" || event.key === "ArrowLeft") {
      leftKey = false;
    } else if (event.key === "d" || event.key === "ArrowRight") {
      rightKey = false;
    }
  });
}
