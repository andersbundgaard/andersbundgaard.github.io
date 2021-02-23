function Bat_2 () {
let x = 0-20;
let y = height/2;
    //laver positionen for vektoren 
        // constructor(x,y) {

    //Lav en vektor med koordinater 
        this.pos = createVector(x,y);
    
    //tegner bat_1
        this.show = function(){
            fill ('green')
        ellipse(this.pos.x, this.pos.y, diameter*7, diameter*7);
    }
}