let diameter = 20;
var y_1 = 350;
var y_2 = 350;
let ball_1;


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

function keyPressed(){
  //får venstre bat til at bevæge sig
     if (keyCode == 40){
      y_1 ++}
      else if (keyCode == 38){
      y_1 --} 

  // får højre bat til at bevæge sig
  if (keyCode ==83){
    y_2 ++}
  else if (keyCode == 87){
    y_2 --}


}
