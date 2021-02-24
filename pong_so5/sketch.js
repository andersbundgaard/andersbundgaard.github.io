let diameter = 20;
let bat_1;
let bat_2;
let ball;
var score_v = 0;
var score_h = 0;
let angle;

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

  //får bold til at bounce på bat 1
  var Vdist = p5.Vector.dist(ball.pos, bat_1.pos); //afstand mellem bold og bat
    if (Vdist < diameter/2 + (diameter*3.5)){
      // bat_1.pos.reflect(ball.pos);
      // let angle = bat_1.pos.angleBetween(ball.pos);
      // console.log(angle);

      if (ball.vel.y == 0){
        let ballRandom1 = random(-10,10);
        ball.vel = createVector(-5,ballRandom1);
      }
      if (ball.vel.y > 0){
        let ballRandom3 = random(0,10);
        ball.vel = createVector(-5,ballRandom3);
      }
      if (ball.vel.y < 0){
        let ballRandom4 = random(0,-10);
        ball.vel = createVector(-5,ballRandom4);
      }
  }

  //får bolden til at bounce på bat 2
  var ballBat2 = p5.Vector.dist(ball.pos, bat_2.pos);
  if (ballBat2 < diameter + (diameter*3.5)){
      if (ball.vel.y == 0){
        let ballRandom2 = random(-10,10);
        ball.vel = createVector(5,ballRandom2);
      }
      if (ball.vel.y > 0){
        let ballRandom5 = random(0,10);
        ball.vel = createVector(5,ballRandom5);
      }
      if (ball.vel.y < 0){
        let ballRandom6 = random(0,-10);
        ball.vel = createVector(5,ballRandom6);
      }
    }


  // bounce på top og bund
  if (ball.pos.y-diameter < 0 ){
    ball.vel.y = -ball.vel.y}
    else if(ball.pos.y+diameter > height){
      ball.vel.y = -ball.vel.y
    }

  //giver point hvis bolden kommer bag baglinjen og resetter bolden
  if (ball.pos.x + diameter > width){
    score_v ++
    ball.pos = createVector(width/2, height/2);
    ball.vel = createVector(7,0);
    ball.vel.limit(7);
  }
    else if (ball.pos.x + diameter < 0){
      score_h ++
      ball.pos = createVector(width/2, height/2);
      ball.vel = createVector(-7,0);
      ball.vel.limit(7); 
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