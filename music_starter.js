let EnvX = 1040;
let EnvY = 600;
let EnvLength = 250;
let carHeight = 97;
let carWidth = 378;
let poleX = 1920/2;
let poleX2 = 0;
let poleHeight = 500;
let poleTop = 640-poleHeight;
let railLevel = 640+50;
let railX = 0;
let width = 1920;
let baseScale = 1.25;
let MaxScale = 1.5;
let MinScale = 1;
// let EnvMultiplier = 1;

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(0, 0, 50);
  textFont('Verdana'); // please use CSS safe fonts
  textSize(24);

  colorMode(HSB);


// changes 

let count = int(counter/60);
if(count >= 0 && count <= 16 || count > 152 && count <= 231){ //carExt
   //background
   image(gradient, 0, 0);

   let glow = map(bass, 0, 100, 0.5, 1);
   push();
   strokeWeight(0);
   fill(231, 33, 85, 0.2);
   ellipse(width/2, 1080, (width*1.5)*glow, (height*1.5)*glow);
   ellipse(width/2, 1080, (width*1.3)*glow, (height*1.3)*glow);
   ellipse(width/2, 1080, width*glow, height*glow);
   pop();

   //cityscape
   let cityX = map(count, 0, 150, 0, 150);
   push();
      translate(cityX, 0);
      image(city, -960, 150);
   pop();
   //lamp post
   push();
     fill(44, 51, 96, 0.5);
     translate(poleX, 0);
     beginShape(); 
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
     fill(44, 51, 96, 0.5);
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

   let accel = int(map(drum, 0, 100, 5, 10));

   poleX = poleX + accel;
   poleX2 = poleX2 + accel;

   if(poleX > width+100){
     poleX = -100;
   }
   if(poleX2 > width+100){
     poleX2 = -100;
   }

   //ground
   strokeWeight();
   fill(281, 37, 27);
   rect(0, 640, 1920, 640);

   //car
   // let carAccel = int(map(drum, 0, 100, 1, 5));
   let carSpeed = map(count, 0, 60, 1500, 1440);
   let carSwerve = map(other, 0, 100, 1, 1.5);
   let CarTurnL = int(map(carSwerve, 1, 1.5, 0, 2));
   let CarTurnR = int(map(carSwerve, 1, 1.5, 2, 4));
   let carY = carHeight*carSwerve
   let carX = carWidth/2*carSwerve

   push();
   translate(carSpeed-carX, 645+carY);
   scale(carSwerve);
   if(carSwerve > MinScale){
      image(tinyCarL, 0, -carHeight);
   } else if(carSwerve < MaxScale){
      image(tinyCarR, 0, -carHeight);
   } else {
      image(tinyCar, 0, -carHeight);
   }
   console.log(carSwerve);
   pop();

   //railing
   fill(0, 0, 68);  
   rect(0, railLevel+10, width, 30);
   rect(0, railLevel+75, width, 30);

   fill(0, 0, 49);
   rect(0, railLevel+40, width, 35);

   push();
   fill(0, 0, 39);
   translate(railX, 0);
   push();
   translate(-width, 0);
   for(i = 0; i < width*2; i++){
   rect(i*150, railLevel, 50, 150);
   }
   pop();
   pop();
   railX = railX + 10 + accel;

   if(railX > 1957){
     railX = 0
   }
} else { //carInt
   push();
   fill(150);
   rect(0, 375, 1920, 500);
   pop();

   let EnvSpeed = int(map(drum, 0, 100, 10, 40));
   let EnvSize = int(map(EnvX, 1040, 1920, 5, 50));
   let EnvAlpha = int(map(EnvX, 1040, 1920, 50, 0));
   let EnvMultiplier = map(EnvSize, 5, 50, 1, 3);

   push();
      fill(EnvAlpha);
      // strokeWeight(EnvSize);
      translate(EnvX, EnvY)
      rect(0, -EnvLength, EnvSize, EnvLength);

      // if(EnvX > 1400 && EnvX <= 1920){ 
      //    EnvMultiplier = 2;
      // } else {
      //    EnvMultiplier = 1;
      // }

      if(EnvX > 1920){
         EnvX = 1040;
         EnvLength = 250;
      }
      EnvX = EnvX + EnvSpeed*EnvMultiplier;
      EnvLength = EnvLength + EnvSpeed*0.5;
   pop();

   //radio pulsing colours (other)
   let B = int(map(other, 0, 100, 39, 90)); //map to change brightness based on other value
   push();
   fill(107, 51, B);
   strokeWeight(0);
   rect(622, 450, 700, 160);
   pop();

   //background
   image(carBG, 0, 0); //car cockpit

   //speedometer/ car speed (drums)
   let lineStart = 555;
   let lineLength = 20;
   let lineEnd = lineStart - lineLength;
   let lineX = 850; 

   let speed = int(map(drum, 0, 100, 100, 150)); //map for speed display based on drum level
   let speedMap = map(speed, 100, 150, 20, 30); //for colour change to red when approaching rev limiter

   for(i = 0; i < speedMap; i++){
      let lineStep = lineX + (i*5);
      push();
      if(speedMap > 25){
         stroke(0, 100, 100);
         fill(0, 100, 100)
      } else {
         stroke(0, 0, 0);
         fill(0, 0, 0);
      }

         strokeWeight(3);
         line(lineStep, lineStart, lineStep+10, lineEnd);
      pop();
   }

   strokeWeight(0); //speed display
   textFont(font);
   textSize(45);
   text(speed, 990, 530);

   //fuel gauge (counter)
   let count = int(counter/60); //converting counter to seconds
   let fuel = map(count, 0, 289, 115, 10); //mapping count to x length for fuel gauge
   let fuelColor = map(fuel, 0, 289, 150, 0); //map to change colour from green to red
   push();
      fill(fuelColor, 100, 100);
      strokeWeight();
      rect(903, 572, fuel, 7);
   pop();

   push();
      strokeWeight();
      textSize(8);
      text('E', 905, 578);
      text('F', 1012, 578);
   pop();

   //steering wheel (bass)
   let steeringAngle = map(bass, 50, 90, -10, 20); //map to determine steering angle based on bass value
   push();
      translate(960, 671.5);
      rotate(steeringAngle);
      image(wheel, -960, -671.5);
   pop();
   }



   }

function carInt(){
push();
fill(150);
rect(0, 375, 1920, 500);
pop();

let EnvSpeed = int(map(drum, 0, 100, 10, 40));
let EnvSize = int(map(EnvX, 1040, 1920, 5, 50));
let EnvAlpha = int(map(EnvX, 1040, 1920, 50, 0));
let EnvMultiplier = map(EnvSize, 5, 50, 1, 3);

push();
   fill(EnvAlpha);
   // strokeWeight(EnvSize);
   translate(EnvX, EnvY)
   rect(0, -EnvLength, EnvSize, EnvLength);
   
   // if(EnvX > 1400 && EnvX <= 1920){ 
   //    EnvMultiplier = 2;
   // } else {
   //    EnvMultiplier = 1;
   // }
   
   if(EnvX > 1920){
      EnvX = 1040;
      EnvLength = 250;
   }
   EnvX = EnvX + EnvSpeed*EnvMultiplier;
   EnvLength = EnvLength + EnvSpeed*0.5;
pop();

//radio pulsing colours (other)
let B = int(map(other, 0, 100, 39, 90)); //map to change brightness based on other value
push();
fill(107, 51, B);
strokeWeight(0);
rect(622, 450, 700, 160);
pop();




//background
image(carBG, 0, 0); //car cockpit

//speedometer/ car speed (drums)
let lineStart = 555;
let lineLength = 20;
let lineEnd = lineStart - lineLength;
let lineX = 850; 

let speed = int(map(drum, 0, 100, 100, 150)); //map for speed display based on drum level
let speedMap = map(speed, 100, 150, 20, 30); //for colour change to red when approaching rev limiter

for(i = 0; i < speedMap; i++){
   let lineStep = lineX + (i*5);
   push();
   if(speedMap > 25){
      stroke(0, 100, 100);
      fill(0, 100, 100)
   } else {
      stroke(0, 0, 0);
      fill(0, 0, 0);
   }
   
      strokeWeight(3);
      line(lineStep, lineStart, lineStep+10, lineEnd);
   pop();
}

strokeWeight(0); //speed display
textFont(font);
textSize(45);
text(speed, 990, 530);

//fuel gauge (counter)
let count = int(counter/60); //converting counter to seconds
let fuel = map(count, 0, 289, 115, 10); //mapping count to x length for fuel gauge
let fuelColor = map(fuel, 0, 289, 150, 0); //map to change colour from green to red
push();
   fill(fuelColor, 100, 100);
   strokeWeight();
   rect(903, 572, fuel, 7);
pop();

push();
   strokeWeight();
   textSize(8);
   text('E', 905, 578);
   text('F', 1012, 578);
pop();

//steering wheel (bass)
let steeringAngle = map(bass, 50, 90, -10, 20); //map to determine steering angle based on bass value
push();
   translate(960, 671.5);
   rotate(steeringAngle);
   image(wheel, -960, -671.5);
pop();



// //helmet shake (bass)
// let shake = map(other, 0, 100, 10, -20);
// translate(0, shake);
// image(helmet, 0, 0);
// push();
// tint(0, 100, 100);
// image(test, 0, 0);
// pop();
//environment zooming past
}

function carExt(){

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
