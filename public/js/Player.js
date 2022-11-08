import { checkXCollision, checkYCollision } from "./Tilemap.js";
let x = 50;
let y = 1000;
let width = 100;
let height = 100;
let xSpeed = 0;
let ySpeed = 0;
let friction = 0.6;
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

  let playerRect = {
    x: x,
    y: y,
    width: width,
    height: height,
  };
  for (const element of platforms) {
    // Check for Collisions
    //Horizontal Collision Rect
    const platformRect = {
      x: element[0],
      y: element[1],
      width: element[2],
      height: element[3],
    };
    console.log(
      checkXCollision(playerRect, platformRect),
      checkYCollision(playerRect, platformRect)
    );

    if (checkXCollision(playerRect, platformRect)) {
      xSpeed = 0;
    }
    if (checkYCollision(playerRect, platformRect)) {
      ySpeed = 0;
    }
  }

  x += xSpeed;
  y += ySpeed;
}

export function drawPlayer(context) {
  context.fillStyle = "blue";
  context.fillRect(x, y, width, height);
}
