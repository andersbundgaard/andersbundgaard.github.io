function Ball() {
let x = width/2;
let y = height/2;
    //Lav en vektor med koordinater 
        this.pos = createVector(x, y);
        
    // lav en vektor med retnignen den bevæger sig i
        this.vel = createVector(7,0);
    
    //får bolden til at bevæge sig
        this.move = function() {
        
    // lægger de to vektorer sammen
        this.pos.add(this.vel);
        this.vel.limit(7);
    }

    // p5.Vector.fromAngle(25);

    //tegner bolden
        this.show = function(){
        fill('red');
        stroke(250);
        strokeWeight(2);
        ellipse (this.pos.x, this.pos.y, diameter, diameter); 
    }
} 

// 80 * PI/180