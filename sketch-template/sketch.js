function setup() {
  createCanvas(400, 400);
}

function draw() {
  background (220);
  
  line (0,200,400,200)
  line (200,0,200,400)

  let x = mouseX;
  let y = mouseY;

  let circleSize = 50

  let xIslarge = x > 200
  let yIslarge = x > 200
  
  if (xIslarge) {
  circleSize = square(x, y, 55)
  }
  
  circle (x,y,circleSize)

}