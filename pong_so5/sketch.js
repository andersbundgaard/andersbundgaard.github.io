let ball_1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ball_1 = new Ball_1 (width/2, height/2);
}


function draw() {
  background(40);
  //Linjer som bat er på
  line (100, 0, 100, height);
  line (width-100, 0, width-100, height);  
  
  //bold 1 bliver tegnet
  ball_1.move_1();
  ball_1.show_1();

}