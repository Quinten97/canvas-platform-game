export default class Player {
  constructor(x, y, platforms, canvas, context) {
    this.x = x;
    this.y = y;
    this.xspeed = 0;
    this.yspeed = 0;
    this.friction = 0.6;
    this.maxSpeed = 10;
    this.width = 100;
    this.height = 100;
    this.active = true;
    this.upKey;
    this.rightKey;
    this.downKey;
    this.leftKey;
    this.platforms = platforms;
    this.canvas = canvas;
    this.context = context;
  }
  setupInputs() {
    document.addEventListener("keydown", function (event) {
      if (event.key === "w" || event.key === "ArrowUp") {
        this.upKey = true;
      } else if (event.key === "s" || event.key === "ArrowDown") {
        this.downKey = true;
      } else if (event.key === "a" || event.key === "ArrowLeft") {
        this.leftKey = true;
      } else if (event.key === "d" || event.key === "ArrowRight") {
        this.rightKey = true;
      }
    });
    document.addEventListener("keyup", function (event) {
      if (event.key === "w" || event.key === "ArrowUp") {
        this.upKey = false;
      } else if (event.key === "s" || event.key === "ArrowDown") {
        this.downKey = false;
      } else if (event.key === "a" || event.key === "ArrowLeft") {
        this.leftKey = false;
      } else if (event.key === "d" || event.key === "ArrowRight") {
        this.rightKey = false;
      }
    });
  }
  checkCollision(r1, r2) {
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
  step() {
    //Movement
    if (this.active) {
      //Hor. Movement
      if (
        (!this.leftKey && !this.rightKey) ||
        (this.leftKey && this.rightKey)
      ) {
        //Slow down
        this.xspeed *= this.friction;
      }
      if (this.rightKey) {
        //Move Right
        this.xspeed++;
        console.log("right");
      }
      if (this.leftKey) {
        //Move Left
        this.xspeed--;
      }
      //Vert. Movement
      if (this.upKey) {
        //Check if on ground
        this.yspeed -= 15;
      }
      //Apply Gravity
      this.yspeed += 5;

      //Correct Speed
      if (this.xspeed > this.maxSpeed) {
        this.xspeed = this.maxSpeed;
      } else if (this.xspeed < -this.maxSpeed) {
        this.xspeed = -this.maxSpeed;
      }
      if (this.yspeed > this.maxSpeed) {
        this.yspeed = this.maxSpeed;
      } else if (this.yspeed < -this.maxSpeed) {
        this.yspeed = -this.maxSpeed;
      }
      if (this.xspeed > 0) {
        this.xspeed = Math.floor(this.xspeed);
      } else {
        this.xspeed = Math.ceil(this.xspeed);
      }
      if (this.yspeed > 0) {
        this.yspeed = Math.floor(this.yspeed);
      } else {
        this.yspeed = Math.ceil(this.yspeed);
      }

      // //Check for Collisions
      // for (const element of this.platforms) {
      //   //Horizontal Collision Rect
      //   let horizontalRect = {
      //     x: this.x + this.xspeed,
      //     y: this.y,
      //     width: this.width,
      //     height: this.height,
      //   };
      //   //Vertical Collision Rect
      //   let verticalRect = {
      //     x: this.x,
      //     y: this.y + this.yspeed,
      //     width: this.width,
      //     height: this.height,
      //   };
      //   let platformRect = {
      //     x: element.x,
      //     y: element.y,
      //     width: element.width,
      //     height: element.height,
      //   };
      //   if (this.checkCollision(horizontalRect, platformRect)) {
      //     while (this.checkCollision(horizontalRect, platformRect)) {
      //       horizontalRect.x -= Math.sign(this.xspeed);
      //     }
      //     this.x = horizontalRect.x;
      //     this.xspeed = 0;
      //   }
      //   if (this.checkCollision(verticalRect, platformRect)) {
      //     while (this.checkCollision(verticalRect, platformRect)) {
      //       verticalRect.y -= Math.sign(this.yspeed);
      //     }
      //     this.y = verticalRect.y;
      //     this.yspeed = 0;
      //   }
      // }
      this.x += this.xspeed;
      this.y += this.yspeed;
    }
  }
  draw() {
    this.context.fillStyle = "blue";
    this.context.fillRect(this.x, this.y, this.width, this.height);
  }
}
