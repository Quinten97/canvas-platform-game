import { drawTilemap, helpGetPlatforms, levelSelect } from "./js/Tilemap.js";
import { input, movePlayer, drawPlayer, getPlayerY } from "./js/Player.js";
//Get curret levels platforms
let currentPlatforms = helpGetPlatforms();

//Assigning canvas and context vars
const canvas = document.getElementById("game-window");
const context = canvas.getContext("2d");

//add player inputs
input();

function drawCanvas() {
  context.fillStyle = "white";
  context.fillRect(0, 0, 1080, 5000);
}

function drawAll() {
  drawCanvas();
  drawTilemap(levelSelect(1), context);
  drawPlayer(context);
}
//Start game loop
setInterval(() => {
  context.save();
  context.translate(0, getPlayerY() + canvas.height / 2 + 500);
  movePlayer(currentPlatforms);
  drawAll();
  context.restore();
}, 1000 / 30);
