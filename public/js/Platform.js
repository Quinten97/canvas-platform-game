export function drawPlatform(x, y, width, height, type, context) {
  if (type === 1) {
    context.fillStyle = "green";
  }
  //In case there are more types of platforms:
  // else if (type === 2) {
  //   context.fillStyle = "red";
  // }
  context.fillRect(x, y, width, height);
}
