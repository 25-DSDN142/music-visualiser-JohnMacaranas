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
  // push();
  // blendMode(OVERLAY);
  // image(texture, 0, 0);
  // pop();
  
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

//steering wheel test

let wheelAngle = map(other, 50, 100, 1, 180);
push();
translate(1600, 800);
rotate(wheelAngle);
ellipse(0, 0, 200, 400);
pop();

if(wheelAngle > 90){
  xLights = xLights - 2;
} else {
  xLights = xLights + 5;
}

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

//traditional visualizer test (could be the speedometer/ dashboard? or radio)
let vocalMap = int(map(vocal, 0, 100, 1, 12));
let drumMap = int(map(drum, 0, 100, 1, 12));
let bassMap = int(map(bass, 0, 100, 1, 12));
let otherMap = int(map(other, 0 ,100, 1, 12));
let lineStart = 850;
let lineLength = 50;
let lineEnd = lineStart - lineLength;
let lineY = 750;

for(i = 1; i < vocalMap; i++){
  let lineStep = lineY+(i*15);
  strokeWeight(10);
  line(lineStart, lineStep, lineEnd, lineStep);
}
for(i = 1; i < drumMap; i++){
  let lineStep = lineY+(i*15);
  strokeWeight(10);
  line(lineStart+75, lineStep, lineEnd+75, lineStep);
}
for(i = 1; i < bassMap; i++){
  let lineStep = lineY+(i*15);
  strokeWeight(10);
  line(lineStart+150, lineStep, lineEnd+150, lineStep);
}
for(i = 1; i < otherMap; i++){
  let lineStep = lineY+(i*15);
  strokeWeight(10);
  line(lineStart+225, lineStep, lineEnd+225, lineStep);
}

let speedo = int(map(vocal, 0 , 100, 95, 110));

textFont(font);
textSize(100);
text(speedo, 400, 400,);

}
