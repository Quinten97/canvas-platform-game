// setInterval(gameLoop, 33); // 33 milliseconds = ~ 30 frames per sec
import { drawTilemap, helpGetPlatforms, levelSelect } from "./js/Tilemap.js";
import { input, movePlayer, drawPlayer } from "./js/Player.js";
//get platform array
let currentPlatforms = helpGetPlatforms();

//Assigning canvas and context vars
const canvas = document.getElementById("game-window");
const context = canvas.getContext("2d");
input();

function drawCanvas() {
  // console.log(player.upKey);
  //Clear canvas
  context.fillStyle = "white";
  context.fillRect(0, 0, 720, 1280);
  drawTilemap(levelSelect(1), context);
  drawPlayer(context);
}

//Start game loop
setInterval(() => {
  movePlayer(currentPlatforms);
  drawCanvas();
}, 1000 / 30);
