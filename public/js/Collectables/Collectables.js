import collectablesOne from "./collectablesOne.json" assert { type: "json" };
import { movePlayer } from "../Player/Player.js";
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

function deleteCollectable() {
  if (movePlayer.x == collectablesOne.x) {
    console.log("delete");
  }
}
export { drawCollectables, collectablesLevelSelect, deleteCollectable };
