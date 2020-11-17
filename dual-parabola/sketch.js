function setup() {
  createCanvas(400,400);
  fill(133, 18, 50);
  stroke(10, 10, 500);
  strokeWeight(2);
}

function draw() {
  background(50);
  
  // De tre cirkler med streger mellem
  circle (200, 20, 10);
  circle (50, 350, 10);
  circle (350, 350, 10);

  //streger mellem de tre punkter
  line (200, 20, 50, 350);
  line (200, 20, 350, 350);
   

}
