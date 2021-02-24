function Bat_1 () {
    let x = width + 20;
    let y = height/2;

    //Lav en vektor med koordinater 
        this.pos = createVector(x,y);
    
    //tegner bat_1
        this.show = function(){
            fill ('blue')
        ellipse(this.pos.x, this.pos.y, diameter*7, diameter*7);  
    }
}
