//definitioner på forskellige arrays
//antal bolde
const antB =10
//diameter på bolde
let ds = new Array(antB);
//start koordinat til x og y
let x = new Array(antB);
let y = new Array(antB);
//hastighed til x og y 
let vx = new Array(antB);
let vy = new Array(antB);

function setup() {
  createCanvas(500, 400);
//verdier for forskellige arrays
    for (let i = 0; i < antB; i++) {
        //random diameter
        ds[i] = random(10, 20)
        //spawn location
        x[i] = random(ds[i], width - ds[i]);
        y[i] = random(ds[i], height - ds[i]);
        //hastighed på x og y
        vx[i] = random(-7,7)
        vy[i] = random(-7,7)

    }
}
function draw() {
    background(1);
    fill(255)
//tegning af cirkel.
    for (i = 0; i < antB; i++) {
//cirkler bliver tegnet
        circle(x[i], y[i], ds[i]);
//hastighed til cirkler.
        x[i] += vx[i];
        y[i] += vy[i];
//Borders for balls
        if (x[i] > width - ds[i]) {
            vx[i] = -vx[i];
        }
        if (x[i] < ds[i]) {
            vx[i] = -vx[i];
        }
        if (y[i] > height - ds[i]) {
            vy[i] = -vy[i];
        }
        if (y[i] < ds[i]) {
            vy[i] = -vy[i];
        }
    }
}

