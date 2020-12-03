const ballCount = 100
let d = new Array(ballCount);
let x = new Array(ballCount);
let y = new Array(ballCount);

let xSpeed = new Array (ballCount);
let ySpeed = new array (ballCount);

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < ballCount; i++) {
    d[i] = random(6, 50);
    x[i] = random(0,width);
    y[i] = random(0,height);
  }
}

function draw() {
  background(220);
  for (let i = 0; i < ballCount; i++) {
    circle(x[i], y[i], d[i]);
    
  }
}

