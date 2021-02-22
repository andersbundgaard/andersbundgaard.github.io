let diameter = 20;
let ball;
let bat_1;
let bat_2;
var score_v = 0;
var score_h = 0;

function setup() {
  createCanvas(800, 670);
  var y_1 = height/2;
  var y_2 = height/2;
  ball = new Ball (width/2, height/2);
  bat_1 = createVector (width+diameter, y_2);
  bat_2 = createVector (-diameter,y_1);
}

function draw() {
  background(0);
  
  //bold 1 bliver tegnet
  ball.move();
  ball.show();

  ellipse(bat_1.x, bat_1.y, diameter*7, diameter*7);  
  ellipse(bat_2.x, bat_2.y, diameter*7, diameter*7);

  // //får bolden til at bounce på top og bund
  // if (ball.pos.y-diameter < 0 ){
  //   ball.vel.y = -ball.vel.y}
  //   else if(ball.pos.y+diameter > height){
  //     ball.vel.y = -ball.vel.y
  //   }

  //giver point hvis bolden kommer bag baglinjen
  if (ball.pos.x + diameter > width){
    score_v ++}
    else if (ball.pos.x + diameter < 0){
      score_h ++}
    //viser score
    textSize (24);
    text(score_v, width/2+100,40);
    text(score_h, width/2-100,40);   
    console.log (ball.vel.x) 
    }


function keyPressed(){
  if (bat_1.y || bat_2.y < Width){
    //får venstre bat til at bevæge sig 
    if (keyCode == 40){
      bat_1.y +=50}
    else if (keyCode == 38){
      bat_1.y -=50}
      
    // får højre bat til at bevæge sig
    if (keyCode == 83){
      bat_2.y +=50}
    else if ( keyCode == 87){
      bat_2.y -=50}
  }
}