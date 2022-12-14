import { drawTilemap, levelSelect } from "./js/Tilemap/tilemap.js";
import { input, movePlayer, drawPlayer, y } from "./js/Player/Player.js";
import { drawEnemyMap, enemyLevel } from "./js/Enemy/Enemy.js";
//Get curret levels platforms
let currentPlatforms = levelSelect(1);

//Assigning canvas and context vars
const canvas = document.getElementById("game-window");
const context = canvas.getContext("2d");

//add player inputs
input();

function drawCanvas() {
  context.fillStyle = "white";
  context.fillRect(0, 0, 1080, 6000);
}

function drawAll() {
  drawCanvas();
  drawTilemap(levelSelect(1), context);
  drawEnemyMap(enemyLevel(1), context);
  drawPlayer(context);
}
//Start game loop
setInterval(() => {
  context.save();
  context.translate(0, -y + canvas.height / 2 + 500);
  movePlayer(currentPlatforms);
  drawAll();
  context.restore();
}, 1000 / 30);
