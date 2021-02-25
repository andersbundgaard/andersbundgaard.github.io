function Bat_2 () {
let x = -110;
let y = height/2;

    //Lav en vektor med koordinater 
        this.pos = createVector(x,y);
    
    //tegner bat_1
        this.show = function(){
            fill ('green')
        ellipse(this.pos.x, this.pos.y, diameter*15, diameter*15);
    }
    this.collision_2 = function(){
        const distance = this.pos.dist(ball.pos) //afstand mellem bold og bat
             if (distance < diameter/2 + (diameter*7.5)){
             const surfaceNormla = p5.Vector.sub(this.pos, ball.pos);
             ball.vel.reflect(surfaceNormla);
            }
        }
}