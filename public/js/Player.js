import { checkCollision } from "./Tilemap.js";
let x = 250;
let y = 1000;
let width = 100;
let height = 100;
let xSpeed = 0;
let ySpeed = 0;
let friction = 0.8;
let maxSpeed = 20;
let upKey;
let downKey;
let leftKey;
let rightKey;
let active = true;

export function input() {
  document.addEventListener("keydown", function (event) {
    if (event.key === "w" || event.key === "ArrowUp") {
      upKey = true;
    } else if (event.key === "s" || event.key === "ArrowDown") {
      downKey = true;
    } else if (event.key === "a" || event.key === "ArrowLeft") {
      leftKey = true;
    } else if (event.key === "d" || event.key === "ArrowRight") {
      rightKey = true;
    }
  });
  document.addEventListener("keyup", function (event) {
    if (event.key === "w" || event.key === "ArrowUp") {
      upKey = false;
    } else if (event.key === "s" || event.key === "ArrowDown") {
      downKey = false;
    } else if (event.key === "a" || event.key === "ArrowLeft") {
      leftKey = false;
    } else if (event.key === "d" || event.key === "ArrowRight") {
      rightKey = false;
    }
  });
}

export function movePlayer(platforms) {
  if (active) {
    if ((!leftKey && !rightKey) || (leftKey && rightKey)) {
      xSpeed *= friction;
    }
    if (leftKey) {
      if (xSpeed >= -maxSpeed) {
        xSpeed--;
      }
    }
    if (rightKey) {
      if (xSpeed <= maxSpeed) {
        xSpeed++;
      }
    }
    if (upKey) {
      if (ySpeed >= -maxSpeed) {
        ySpeed--;
      }
    } else {
      if (ySpeed <= maxSpeed) {
        ySpeed++;
      }
    }
  }

  //This gets the seperate X and Y rectangles for collision
  let horizontalRect = {
    x: x + xSpeed,
    y: y,
    width: width,
    height: height,
  };
  let verticalRect = {
    x: x,
    y: y + ySpeed,
    width: width,
    height: height,
  };

  //THIS DOESN'T WORK PROPERLY
  // let playerRect = {
  //   x: x + xSpeed,
  //   y: y + ySpeed,
  //   width: width,
  //   height: height,
  // };

  for (const element of platforms) {
    // Check for Collisions
    //Horizontal Collision Rect
    const platformRect = {
      x: element[0],
      y: element[1],
      width: element[2],
      height: element[3],
    };

    // console.log(checkXCollision(playerRect, platformRect));
    // console.log(checkYCollision(playerRect, platformRect));

    //Console logging the new form
    console.log(checkCollision(horizontalRect, platformRect));
    console.log(checkCollision(verticalRect, platformRect));

    //THIS WAY OF CHECKING MAKES THE COLLISIONS SMOOTHER WHEN LANDING
    if (checkCollision(horizontalRect, platformRect)) {
      while (checkCollision(horizontalRect, platformRect)) {
        horizontalRect.x -= Math.sign(xSpeed);
      }
      x = horizontalRect.x;
      xSpeed = 0;
    }
    if (checkCollision(verticalRect, platformRect)) {
      while (checkCollision(verticalRect, platformRect)) {
        verticalRect.y -= Math.sign(ySpeed);
      }
      y = verticalRect.y;
      ySpeed = 0;
    }

    // if (checkXCollision(playerRect, platformRect)) {
    //   xSpeed = 0;
    // }
    // if (checkYCollision(playerRect, platformRect)) {
    //   ySpeed = 0;
    // }
  }

  x += xSpeed;
  y += ySpeed;
}

export function drawPlayer(context) {
  context.fillStyle = "blue";
  context.fillRect(x, y, width, height);
}
