let carHeight = 97;
let carWidth = 378;
let baseScale = 1.25;
let MaxScale = 1.5;
let MinScale = 1;
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(150);
  textFont('Verdana'); // please use CSS safe fonts
  textSize(24);

 
// changes 
let count = int(counter/60);
   let carSpeed = map(count, 0, 60, 1500, 1440);
   let carSwerve = map(other, 0, 100, 1, 1.5);
   let CarTurnL = int(map(carSwerve, 1, 1.5, 0, 2));
   let CarTurnR = int(map(carSwerve, 1, 1.5, 2, 4));
   let carY = carHeight*carSwerve
   let carX = carWidth/2*carSwerve

   push();
   translate(carSpeed-carX, 645+carY);
   scale(carSwerve);
   if(MaxScale < carSwerve && carSwerve > 0){
    image(tinyCarL, 0, -carHeight);
   } else if (MinScale < carSwerve && carSwerve < 1.5){
    image(tinyCarR, 0, -carHeight);
   } else {
    image(tinyCar, 0, -carHeight);
   }
   MaxScale = carSwerve;
   console.log(image);
   pop();

}
