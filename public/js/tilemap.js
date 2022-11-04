import Platform from "./platforms.js";
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
    let platforms = [];
    platforms.push(new Platform(...element, context));
    platforms.forEach((element) => {
      element.draw();
    });
  });
}
