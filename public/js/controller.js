function Player(x, y) {
  this.x = x;
  this.y = y;
  this.xspeed = 0;
  this.yspeed = 0;
  this.friction = 0.6;
  this.maxSpeed = 10;
  this.width = 100;
  this.height = 100;
  this.active = true;

  this.step = function () {
    //Movement
    if (this.active) {
      //Hor. Movement
      if ((!leftKey && !rightKey) || (leftKey && rightKey)) {
        //Slow down
        this.xspeed *= this.friction;
      } else if (rightKey) {
        //Move Right
        this.xspeed++;
      } else if (leftKey) {
        //Move Left
        this.xspeed--;
      }
      //Vert. Movement
      if (upKey) {
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

      this.x += this.xspeed;
      this.y += this.yspeed;
    }
  };
  this.draw = function () {
    context.fillStyle = "blue";
    context.fillRect(this.x, this.y, this.width, this.height);
  };
}
