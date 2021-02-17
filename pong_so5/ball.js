class Ball_1 {
    
    //laver positionen for vektoren 
        constructor(x,y) {
    
    //Lav en vektor med koordinater 
        this.pos_1 = createVector(x, y);
        
    // lav en vektor med retnignen den bevæger sig i
        this.vel_1 = createVector(2,0);

    }
    
    //får bolden til at bevæge sig
        move_1() {
        
    // lægger de to vektorer sammen
        this.pos_1.add(this.vel_1);

    // // gør det samme som linjen over, bare på en anden måde
    // this.pos.x = this.pos.x + random (-1,1);        
    // this.pos.y = this.pos.y + random (-1,1);
    }

    //tegner bolden
        show_1(){
        fill(255)
        ellipse (this.pos_1.x, this.pos_1.y, diameter, diameter); 
    }
} 