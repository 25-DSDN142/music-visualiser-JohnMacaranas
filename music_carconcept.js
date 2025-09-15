let carHeight = 97;
let poleX = 1920/2;
let poleX2 = 0;
let poleHeight = 500;
let poleTop = 640-poleHeight;
let railLevel = 640+10;
let railX = 0;

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {

  textFont('Verdana'); // please use CSS safe fonts
  textSize(24);

 
// changes 
let count = int(counter/60);

//background
image(gradient, 0, 0);

let glow = map(drum, 0, 100, 0.5, 1);
push();
strokeWeight(0);
fill(145, 155, 218, 50);
ellipse(width/2, 1080, (width*1.5)*glow, (height*1.5)*glow);
ellipse(width/2, 1080, (width*1.3)*glow, (height*1.3)*glow);
ellipse(width/2, 1080, width*glow, height*glow);
pop();

//cityscape
let cityX = map(count, 0, 150, 0, 150);
translate(cityX, 0);
image(city, -960, 150);

//lamp post
push();
  fill(247, 213, 119, 100);
  translate(poleX, 0);
  beginShape(); //lightcone to do list
  vertex(0, poleTop);
  vertex(15, poleTop);
  vertex(100, 640);
  vertex(-100, 640);
  endShape(CLOSE);
pop();

push();
  translate(poleX, 640);
  rect(0, -poleHeight, 15, poleHeight);
pop();

push();
  fill(247, 213, 119, 100);
  translate(poleX2, 0);
  beginShape();
  vertex(0, poleTop);
  vertex(15, poleTop);
  vertex(100, 640);
  vertex(-100, 640);
  endShape(CLOSE);
pop();

push();
  translate(poleX2, 640);
  rect(0, -poleHeight, 15, poleHeight);
pop();

let accel = int(map(bass, 0, 100, 5, 10));

poleX = poleX + accel;
poleX2 = poleX2 + accel;

if(poleX > width){
  poleX = -100;
}
if(poleX2 > width){
  poleX2 = -100;
}


//ground
strokeWeight();
fill(61, 43, 69);
rect(0, 640, 1920, 640);


// let carAccel = int(map(drum, 0, 100, 1, 5));
let carSpeed = map(count, 0, 60, 1500, 1440);
let carSwerve = map(other, 0, 100, 1, 1.5);
let carY = carHeight*carSwerve

push();
translate(carSpeed, 645);
scale(1);
image(tinyCar, 0, -carHeight);
pop();

//railing
fill(175);  
rect(0, railLevel+10, width, 30);
rect(0, railLevel+75, width, 30);

fill(125);
rect(0, railLevel+40, width, 35);

push();
fill(100);
translate(railX, 0);
push();
translate(-width, 0);
for(i = 0; i < width*2; i++){
rect(i*150, railLevel, 50, 200);
}
pop();
pop();
railX = railX + 10 + accel;

if(railX > 1957){
  railX = 0
}

}
function carConcept1(){
// let wheel;
// let wiper;
// let yLights = 450;
// let xLights = 620;
// let lSize;

// wheel = int(map(vocal, 0, 100, 0, 3));
// for(let v = 0; v <= 2; v++){
//    image(carWheel[wheel], 0, 0);
// }

// wiper = int(map(drum, 0, 100, 0, 5));
// for(let d = 0; d <= 2; d++){
//    image(carWiper[wiper], 0, 0);
// }

// //steering wheel test

// let wheelAngle = map(other, 50, 100, 1, 180);
// push();
// translate(1600, 800);
// rotate(wheelAngle);
// ellipse(0, 0, 200, 400);
// pop();

// if(wheelAngle > 90){
//   xLights = xLights - 2;
// } else {
//   xLights = xLights + 5;
// }

// let speed = map(bass, 0, 100, 1, 10); //light post test
// let sLights = map(yLights, 400, 100, 1.5, 8);
// push();
// push();
// translate(xLights, yLights);
// scale(sLights);
// strokeWeight(1);
// fill(250);
// ellipse(0, 0, 20, 20);
// pop();
// translate(xLights, yLights);
// scale(sLights*2);
// strokeWeight();
// fill(245, 219, 24, 100);
// ellipse(0, 0, 40, 40);
// xLights = xLights + speed;
// yLights = yLights - speed;
// pop();


// if(yLights <= 250){
// xLights = 620;
// yLights = 450;

// }

// //traditional visualizer test (could be the speedometer/ dashboard? or radio)
// let vocalMap = int(map(vocal, 0, 100, 1, 12));
// let drumMap = int(map(drum, 0, 100, 1, 12));
// let bassMap = int(map(bass, 0, 100, 1, 12));
// let otherMap = int(map(other, 0 ,100, 1, 12));
// let lineStart = 850;
// let lineLength = 50;
// let lineEnd = lineStart - lineLength;
// let lineY = 750;

// for(i = 1; i < vocalMap; i++){
//   let lineStep = lineY+(i*15);
//   strokeWeight(10);
//   line(lineStart, lineStep, lineEnd, lineStep);
// }
// for(i = 1; i < drumMap; i++){
//   let lineStep = lineY+(i*15);
//   strokeWeight(10);
//   line(lineStart+75, lineStep, lineEnd+75, lineStep);
// }
// for(i = 1; i < bassMap; i++){
//   let lineStep = lineY+(i*15);
//   strokeWeight(10);
//   line(lineStart+150, lineStep, lineEnd+150, lineStep);
// }
// for(i = 1; i < otherMap; i++){
//   let lineStep = lineY+(i*15);
//   strokeWeight(10);
//   line(lineStart+225, lineStep, lineEnd+225, lineStep);
// }

// let speedo = int(map(vocal, 0 , 100, 95, 110));

// textFont(font);
// textSize(100);
// text(speedo, 400, 400,);

}
