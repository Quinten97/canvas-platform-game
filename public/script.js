// setInterval(gameLoop, 33); // 33 milliseconds = ~ 30 frames per sec
import { drawTilemap, helpGetPlatforms, levelSelect } from "./js/Tilemap.js";
import Player from "./js/controller.js";

//Creating drawing vars
let canvas;
let context;
let currentPlatforms = helpGetPlatforms();

//Assigning canvas and context vars
canvas = document.getElementById("game-window");
context = canvas.getContext("2d");

//Create Player
const player = new Player(320, 1070, currentPlatforms, canvas, context);
//Setup key listeners
player.setupInputs();

function drawCanvas() {
  //Clear canvas
  context.fillStyle = "white";
  context.fillRect(0, 0, 720, 1280);
  drawTilemap(levelSelect(1), context);
  player.draw();
}

//Start game loop
setInterval(() => {
  player.step();
  drawCanvas();
}, 1000 / 30);
