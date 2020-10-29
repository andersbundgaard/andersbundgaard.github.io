function setup() {
  createCanvas(400, 400);
}

function draw() {
  background (220);
  ellipse (150,60,45,45)//hovede;
  ellipse (140,55,7,7)//højre øje;
  ellipse (160,55,7,7)//venstre øje;
  line (150,82,150,250)//krop; 
  line (150,100,80,55)//venstre arm;
  line (150,100,220,55)// højre arm;
  line (150,250,100,300)//venstre ben;
  line (150,250,200,300)//højre ben;
  arc(150, 70, 15, 15, 0, PI + QUARTER_PI, CHORD)//mund;
}

