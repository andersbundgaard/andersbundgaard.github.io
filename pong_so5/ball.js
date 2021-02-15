    class bold {
    
    //laver positionen for vektoren 
    constructor(x,y){
    this.pos = createVector(x, y);
    }
    
    //får bolden til at bevæge sig
    move (){
        this.pos.x = this.pos.x + random (-1,1);
        this.pos.y = this.pos.y + random (-1,1);
    }

    //tegner bolden
    show(){
        ellipse (this.pos.x, this.pos.y, 40, 40); 
    }
     
} 