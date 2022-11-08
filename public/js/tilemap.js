import { drawPlatform } from "./Platform.js";
import levelOne from "../Levels/levelOne.json" assert { type: "json" };

export function levelSelect(level) {
  if (level === 1) {
    return levelOne;
  }
}

export function helpGetPlatforms() {
  const platforms = levelSelect(1);
  return platforms;
}

export function drawTilemap(arr, context) {
  arr.forEach((element) => {
    drawPlatform(...element, context);
  });
}

//Changed this to the original form of checking collision that comnbines both x and y
export function checkCollision(r1, r2) {
  if (r1.x >= r2.x + r2.width) {
    return false;
  } else if (r1.x + r1.width <= r2.x) {
    return false;
  } else if (r1.y >= r2.y + r2.height) {
    return false;
  } else if (r1.y + r1.height <= r2.y) {
    return false;
  } else {
    return true;
  }
}
