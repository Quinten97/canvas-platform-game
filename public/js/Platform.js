export function drawPlatform(x, y, width, height, type, context) {
  if (type === 1) {
    context.fillStyle = "green";
  }
  //In case there are more types of platforms:
  //Finish Prize
  else if (type === 2) {
    context.fillStyle = "gold";
  }
  context.fillRect(x, y, width, height);
}
