export default class Platform {
  constructor(x, y, width, height, type, context) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.type = type;
    this.context = context;
  }
  draw() {
    if (this.type === 1) {
      this.context.fillStyle = "green";
    }
    //In case there are more types of platforms:
    // else if (this.type === 2) {
    //   context.fillStyle = "red";
    // }
    this.context.fillRect(this.x, this.y, this.width, this.height);
  }
}
