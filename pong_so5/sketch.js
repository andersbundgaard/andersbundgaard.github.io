
let bold;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ball = new ball (200, 200);
}


function draw() {
  background(40);
  //Linjer som bat er på
  line (100,0,100,height);
  line (width-100,0,width-100,height);  

  //bolden bliver tegnet
  ball.move();
  ball.show();

}
