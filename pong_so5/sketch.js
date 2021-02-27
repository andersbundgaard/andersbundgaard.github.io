//Variabler
var diameter = 20;
var bat_1;
var bat_2;
var ball;
var score_v = 0;
var score_h = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ball = new Ball (width/2, height/2); //Bolden bliver defineret 
  bat_1 = new Bat_1 (width, height/2); //Højre bat bliver defineret
  bat_2 = new Bat_2 (0, height/2); //Venstre bat bliver defineret
}

function draw() {
  background(0);
  //Bolden bliver tegnet
  ball.move(); //Bevægelse på bolden
  ball.show(); //Tegninge af bold
  
  //bat_1 bliver tegner (til højre)
  bat_1.show(); //Tegning af venstre bat
  bat_1.collision_1(); //Collision mellem venstre bat og bold

  //bat _2 bliver tegner (til venstre)
  bat_2.show(); //Tegning af højre bat
  bat_2.collision_2(); //Collision mellem højre bat og bold

  //Bounce på top og bund
  if (ball.pos.y-diameter < 0 ){
    ball.vel.y = -ball.vel.y //Ændre retning til modsat 
  }
    else if(ball.pos.y+diameter > height){
      ball.vel.y = -ball.vel.y //Ændre retning til modsat
    }

  //Giver point hvis bolden kommer bag baglinjen og resetter bolden
  if (ball.pos.x + diameter > width){
    score_v ++ //Score for venstre spiller
    ball.pos = createVector(width/2, height/2); //Resetter bolden til udgangspunktet
    ball.vel = createVector(7,0); //Retning ved respawn
    ball.vel.limit(7); //Begrænsning for hvor hurtigt bolden kan bevæge sig
  }
    else if (ball.pos.x + diameter < 0){
      score_h ++ //Score for venstre spiller
      ball.pos = createVector(width/2, height/2); //Resetter bolden til udgangspunkt
      ball.vel = createVector(-7,0); //Retning ved respawn
      ball.vel.limit(7); //Begrænsning for hvor hurtigt bolden kan bevæge sig
    }
  
  //Viser score
  textSize (24); //Tekststørelse
  fill('white'); //Farve på tekst
  text(score_h, width/2+100,40); //Hvad der skal stå med tekst 
  text(score_v, width/2-100,40); //Hvad der skal stå med tekst

}

function keyPressed(){
    //Får højre bat til at bevæge sig 
    if (keyCode == 40){ //ArrowDown
      bat_1.pos.y +=50}
    else if (keyCode == 38){ //ArrowUp
      bat_1.pos.y -=50}
      
    // Får venstre bat til at bevæge sig
    if (keyCode == 83){ //w
      bat_2.pos.y +=50}
    else if ( keyCode == 87){ //s
      bat_2.pos.y -=50}
  }