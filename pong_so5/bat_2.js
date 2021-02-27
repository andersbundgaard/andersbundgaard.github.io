function Bat_2 () {
//Variabler
let x = -110;
let y = height/2;

//Laver en vektor med koordinater 
this.pos = createVector(x,y);
    
//Tegner bat_1
this.show = function(){
     fill ('green') //Fylder venstre bat med grøn farve
        ellipse(this.pos.x, this.pos.y, diameter*15, diameter*15); //Tegner venstre bat
    }

//Collision mellem bold og venstre bat
this.collision_2 = function(){
     const distance = this.pos.dist(ball.pos) //Laver konstant med afstand mellem bold og venstre bat 
         if (distance < diameter/2 + (diameter*7.5)){
         const surfaceNormla = p5.Vector.sub(this.pos, ball.pos); //Laver midtnormla ud fra venstre bat og bolden
         ball.vel.reflect(surfaceNormla); //Reflektere bolden omkring midtnormalen
         }
     }
}