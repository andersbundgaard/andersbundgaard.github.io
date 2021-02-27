function Ball() {
//Variabler
let x = width/2;
let y = height/2;

//Laver en vektor med koordinater 
this.pos = createVector(x, y);
                
// Laver en vektor med retnignen bolden bevæger sig i
this.vel = createVector(7,0);


//Får bolden til at bevæge sig
this.move = function() {

    // Lægger positionen og hastigheden sammen så bolden bevæger sig
    this.pos.add(this.vel);
    this.vel.limit(7); // Begrænsning for hvor hurtigt bolden kna bevæge sig
    }

//Tegner bolden
this.show = function(){
     fill('red'); //Giver bolden rød farve
     stroke(250); //Giver bolden og battene hvid kant
     strokeWeight(2); //Tykkelsen på kanten
     ellipse (this.pos.x, this.pos.y, diameter, diameter); //Tenger bolden
    }
} 