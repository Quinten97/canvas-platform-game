import { checkCollision } from "../Tilemap/tilemap.js";
let x = 250;
let y = 4300;
let width = 125;
let height = 120;
let xSpeed = 0;
let ySpeed = 0;
let friction = 0.8;
let maxSpeed = 20;
let upKey;
let leftKey;
let rightKey;
let active = true;
let touchingTopPlatform = true;

function input() {
  document.addEventListener("keydown", function (event) {
    if (event.key === "w" || event.key === "ArrowUp") {
      upKey = true;
    } else if (event.key === "a" || event.key === "ArrowLeft") {
      leftKey = true;
    } else if (event.key === "d" || event.key === "ArrowRight") {
      rightKey = true;
    }
  });
  document.addEventListener("keyup", function (event) {
    if (event.key === "w" || event.key === "ArrowUp") {
      upKey = false;
    } else if (event.key === "a" || event.key === "ArrowLeft") {
      leftKey = false;
    } else if (event.key === "d" || event.key === "ArrowRight") {
      rightKey = false;
    }
  });
}

function movePlayer(platforms) {
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
    if (upKey && touchingTopPlatform) {
      if (ySpeed >= -maxSpeed) {
        ySpeed = -40;
        touchingTopPlatform = false;
      }
    } else {
      if (ySpeed <= maxSpeed) {
        ySpeed++;
      }
    }
  }

  //Canvas "Barrier"
  if (x < -1) {
    xSpeed = 1;
  }
  if (x > 985) {
    xSpeed = -1;
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

  for (const element of platforms) {
    // Check for Collisions
    const platformRect = {
      x: element[0],
      y: element[1],
      width: element[2],
      height: element[3],
    };

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
      const topPlatformCollision =
        verticalRect.y + verticalRect.height > platformRect.y;
      if (!topPlatformCollision) {
        touchingTopPlatform = true;
      }
    }
  }

  x += xSpeed;
  y += ySpeed;
}

function drawPlayer(context) {
  context.fillStyle = "blue";
  context.fillRect(x, y, width, height);
}

export { input, movePlayer, drawPlayer, y };
