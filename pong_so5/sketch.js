let ball_1;
let y_1 = 350;
let y_2 = 350;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ball_1 = new Ball_1 (width/2, height/2);
}

function draw() {
  background(0);
  
  //bold 1 bliver tegnet
  ball_1.move_1();
  ball_1.show_1();

  rect(85, y_1, 30, 80);
  rect(width-115, y_2, 30, 80);
  
}    

//får venstre bat til at bevæge sig
function keyPressed(){
  if (keyCode ==40){
    y_1 ++}
  else if (keyCode == 38){
    y_1 --
  } 
  if (keyCode ==83){
    y_2 ++}
    else if (keyCode == 87){
      y_2 --}
}