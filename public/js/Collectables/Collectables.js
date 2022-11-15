import collectablesOne from "./collectablesOne.json" assert { type: "json" };
import { x } from "../Player/Player.js";
let score = 0;
function drawCollectable(x, y, width, height, type, context) {
  if (type === 1) {
    context.fillStyle = "gold";
  }
  context.fillRect(x, y, width, height);
}

function drawCollectables(arr, context) {
  arr.forEach((element) => {
    drawCollectable(...element, context);
  });
}

function collectablesLevelSelect(level) {
  if (level === 1) {
    return collectablesOne;
  }
}

function pickupCollectable() {
  if (x == collectablesOne[0][0]) {
    score++;
  }
  console.log("Score: " + score);
}

export { drawCollectables, collectablesLevelSelect, pickupCollectable };
