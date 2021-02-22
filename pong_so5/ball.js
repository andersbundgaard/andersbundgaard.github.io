class Ball {

    //laver positionen for vektoren 
        constructor(x,y) {
    
    //Lav en vektor med koordinater 
        this.pos = createVector(x, y);
        
    // lav en vektor med retnignen den bevæger sig i
        this.vel = createVector(3,0);

    }
    
    //får bolden til at bevæge sig
        move() {
        
    // lægger de to vektorer sammen
        this.pos.add(this.vel);

    // // gør det samme som linjen over, bare på en anden måde
    // this.pos.x = this.pos.x + random (-1,1);        
    // this.pos.y = this.pos.y + random (-1,1);
    }

    //tegner bolden
        show(){
        fill(80);
        stroke(255);
        strokeWeight(4);
        ellipse (this.pos.x, this.pos.y, diameter, diameter); 
    }
} 