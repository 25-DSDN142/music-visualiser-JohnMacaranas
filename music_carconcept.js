let wheel;
let wiper;
let yLights = 450;
let xLights = 620;
let lSize;


// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(150);
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  image(bg, 0, 0);
  
   let bar_spacing = height / 10;
   let bar_height = width / 12;
   let bar_pos_x = width / 2;
 
// changes 
// wheel = int(map(vocal, 0, 100, 0, 3));
// for(let v = 0; v <= 2; v++){
//    image(carWheel[wheel], 0, 0);
// }

// wiper = int(map(drum, 0, 100, 0, 5));
// for(let d = 0; d <= 2; d++){
//    image(carWiper[wiper], 0, 0);
// }
let speed = map(bass, 0, 100, 1, 10); //light post test
let sLights = map(yLights, 400, 100, 1.5, 8);
push();
push();
translate(xLights, yLights);
scale(sLights);
strokeWeight(1);
fill(250);
ellipse(0, 0, 20, 20);
pop();
translate(xLights, yLights);
scale(sLights*2);
strokeWeight();
fill(245, 219, 24, 100);
ellipse(0, 0, 40, 40);
xLights = xLights + speed;
yLights = yLights - speed;
pop();


if(yLights <= 250){
xLights = 620;
yLights = 450;

}

//steering wheel test

let wheelAngle = map(vocal, 50, 100, 1, 180);
translate(1600, 800);
rotate(wheelAngle);
ellipse(0, 0, 200, 400);
}
