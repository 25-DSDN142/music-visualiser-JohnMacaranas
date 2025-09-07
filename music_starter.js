// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(0, 0, 50);
  textFont('Verdana'); // please use CSS safe fonts
  textSize(24);

  colorMode(HSB);


// changes 
//speedometer/ car speed (drums)\

image(carBG, 0, 0); //car cockpit
let lineStart = 555;
let lineLength = 20;
let lineEnd = lineStart - lineLength;
let lineX = 850; 

let speed = int(map(drum, 0, 100, 100, 110));
let speedMap = map(speed, 100, 110, 20, 30);
for(i = 0; i < speedMap; i++){
   let lineStep = lineX + (i*5);
   if(speedMap > 25){
      stroke(0, 100, 100);
      fill(0, 100, 100)
   } else {
      stroke(0, 0, 0);
      fill(0, 0, 0);
   }
   push();
   strokeWeight(3);
   line(lineStep, lineStart, lineStep, lineEnd);
   pop();
}

   strokeWeight();
   textFont(font);
   textSize(45);
   text(speed, 990, 530);

//fuel gauge (counter)
let count = int(counter/60);

let fuel = map(count, 0, 289, 115, 10);
let fuelColor = map(fuel, 0, 289, 150, 0);
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
let steeringAngle = map(bass, 50, 90, -10, 20);
   push();
      translate(960, 671.5);
      rotate(steeringAngle);
      image(wheel, -960, -671.5);
   pop();

//radio pulsing colours (other)
let B = int(map(other, 0, 100, 39, 90));
push();
fill(107, 51, B);
strokeWeight(0);
beginShape();
vertex(622, 470);
vertex(759, 449);
vertex(759, 524);
vertex(622, 567);
endShape();
pop();

//helmet shake (bass)
let shake = map(other, 0, 100, 10, -20);
translate(0, shake);
image(helmet, 0, 0);


}
