import levelOne from "./Levels/levelOne.json" assert { type: "json" };
function enemyLevel(level) {
  if (level === 1) {
    return levelOne;
  }
}

function drawEnemy(x, y, width, height, type, context) {
  if (type === 1) {
    context.fillStyle = "Brown";
  }
  //In case there are more types of platforms:
  //Finish Prize
  else if (type === 2) {
    context.fillStyle = "Purple";
  }
  context.fillRect(x, y, width, height);
}

function drawEnemyMap(arr, context) {
  arr.forEach((element) => {
    drawEnemy(...element, context);
  });
}
export { drawEnemy, drawEnemyMap, enemyLevel };
