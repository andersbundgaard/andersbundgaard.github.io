function Bat_1 () {
//Variabler
let x = width + 110;
let y = height/2;

//Laver en vektor med koordinater x og y 
this.pos = createVector(x,y); 
    
//Tegner bat_1
this.show = function(){
     fill ('blue') //Fylder højre bat med blå farve
     ellipse(this.pos.x, this.pos.y, diameter*15, diameter*15); //Tegner højre bat 
    }
    
//Collision mellem bold og højre bat
this.collision_1 = function(){
     const distance = this.pos.dist(ball.pos) //Laver konstant med afstand mellem bold og højre bat
         if (distance < diameter/2 + (diameter*7.5)){
         const surfaceNormal = p5.Vector.sub(this.pos, ball.pos); //Laver normal ud fra højre bat og bolden
         ball.vel.reflect(surfaceNormal); //Reflektere bolden omkring normal
        }
    }
}
