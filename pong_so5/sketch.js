let diameter = 20;
let bat_1;
let bat_2;
let ball;
var score_v = 0;
var score_h = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ball = new Ball (width/2, height/2);
  bat_1 = new Bat_1 (width, height/2);
  bat_2 = new Bat_2 (0, height/2);
}

function draw() {
  background(0);
  //bolden bliver tegnet
  ball.move();
  ball.show();
  //bat_1 bliver tegner (til højre)
  bat_1.show();
  //bat _2 bliver tegner (til venstre)
  bat_2.show();

  //giver point hvis bolden kommer bag baglinjen
  if (ball.pos.x + diameter > width){
    score_v ++
    ball.pos = createVector(width/2, height/2);
  }
    else if (ball.pos.x + diameter < 0){
      score_h ++
      ball.pos = createVector(width/2, height/2);
    }
  
  //viser score
  textSize (24);
  fill('white');
  text(score_v, width/2+100,40);
  text(score_h, width/2-100,40);

}

function keyPressed(){
    //får venstre bat til at bevæge sig 
    if (keyCode == 40){ //ArrowDown
      bat_1.pos.y +=50}
    else if (keyCode == 38){ //ArrowUp
      bat_1.pos.y -=50}
      
    // får højre bat til at bevæge sig
    if (keyCode == 83){ //w
      bat_2.pos.y +=50}
    else if ( keyCode == 87){ //s
      bat_2.pos.y -=50}
  }