let RoadX = -205;
let RoadY = -303;
let FPPRoadX = 0;
let FPPRoadY = 0;

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(0, 0, 50);
  textFont('Verdana'); // please use CSS safe fonts
  textSize(24);
  colorMode(HSB);


// changes 

let count = int(counter/60);
if(count >= 0 && count <= 16 || count > 152 && count <= 231){ //carExt Shots

   //background
   image(Bg3PP0, 0, 0);

   //city glow
   let glow = map(other, 80, 100, 80, 100);
   push(); 
      tint(0, 0, glow);
      image(Lights3PP, 0, 0);
   pop();

   //road markings
   let zoom = map(drum, 0, 100, 20, 35);
   push();
      translate(RoadX, RoadY);
      strokeWeight(0);
      fill(255);
      beginShape(); //main centre line
         vertex(25, 730);
         vertex(47, 725);
         vertex(75, 770);
         vertex(60, 723);
         vertex(91, 714);
         vertex(249, 993);
         vertex(242, 997);
         vertex(180, 908);
         vertex(224, 1001);
         vertex(200, 1010);
         vertex(174, 970);
         vertex(188, 1012);
         vertex(179, 1016);
      endShape(CLOSE);
   pop();
   
   push();
      fill(5);
      translate(RoadX*2, RoadY);
      translate(200, 0);
      beginShape();
         vertex(25, 234);
         vertex(32, 231);
         vertex(147, 361);
         vertex(141, 367);
      endShape();
      push();
         translate(80, 50);
         beginShape()
            vertex(25, 234);
            vertex(32, 231);
            vertex(70, 285);
            vertex(63, 278);
         endShape();
      pop();
      push();
         translate(500, 150);
         beginShape();
            vertex(25, 234);
            vertex(32, 231);
            vertex(147, 361);
            vertex(141, 367);
         endShape();
      pop();
      push();
         translate(550, 150);
         beginShape();
            vertex(25, 234);
            vertex(32, 231);
            vertex(147, 361);
            vertex(141, 367);
         endShape();
      pop();
   pop();
      
      RoadX = RoadX + zoom;
      RoadY = RoadY + zoom*2;

   if(RoadY > 1020){
      RoadX = -205;
      RoadY = -303;
   }

   
   //shadow
   image(Shadow3PP, 0, 0);
   //tires
   image(Tires3PP, 0, 0);

   //car
   let bump = map(bass, 0, 100, 20, -20);
   push();
      translate(0, bump);
      image(Chasis3PP, 0, 0);
   pop();

   //railing
   strokeWeight(0);
   fill(75);
   push(); 
      fill(50);
      translate(-50, 0);
      beginShape();
         vertex(435, 0);
         vertex(595, 0);
         vertex(1675, 1080);
         vertex(1515, 1080);
      endShape(CLOSE);
   pop();
   beginShape();
      vertex(435, 0);
      vertex(595, 0);
      vertex(1675, 1080);
      vertex(1515, 1080);
   endShape(CLOSE);

} else { //carInt Shot

   //background
   fill(223, 28, 10);
   rect(0, 383, 1920, 700);

   //road markings zooming past
   push();
      translate(FPPRoadX, FPPRoadY);
      translate(105, -26);
      fill(255);
      strokeWeight(0);
       beginShape();
         vertex(569, 382);
         vertex(490, 382);
         vertex(352, 406);
         vertex(428, 406);
       endShape();
   pop();
   
   let zoom = map(drum, 0, 100, 10, 15); //map to determine how fast the markings zoom past
   FPPRoadX = FPPRoadX - zoom*5;
   FPPRoadY = FPPRoadY + zoom;

   if(FPPRoadX <= -550){
      FPPRoadX = 0
      FPPRoadY = 0
   }

   fill(228, 53, 25);
   rect(0, 0, 1920, 382);

   //car cockpit
   image(FPPCar, 0, 0); 

   //screen glow
   let glow = map(other, 0, 100, 0, 0.25); //map to determine alpha of glow
   push();
      strokeWeight(0);
      fill(129, 78, 78, glow);
      ellipse(568, 551, 300*(glow*2), 300*(glow*2));
      ellipse(568, 551, 400*(glow*2), 400*(glow*2));
      ellipse(1350, 551, 300*(glow*2), 300*(glow*2));
      ellipse(1350, 551, 400*(glow*2), 400*(glow*2));
   pop();

   //speedometer/ car speed (drums)
   let lineStart = 623;
   let lineLength = 32;
   let lineEnd = lineStart - lineLength;
   let lineX = 835; 

   let speed = int(map(drum, 0, 100, 100, 150)); //map for speed display based on drum level
   let speedMap = map(speed, 100, 150, 20, 30); //for colour change to red when approaching rev limiter

   for(i = 0; i < speedMap; i++){
      let lineStep = lineX + (i*5);
      push();
      if(speedMap > 25){
         stroke(0, 100, 86);
         fill(0, 100, 100)
      } else {
         stroke(162, 100, 86);
         fill(162, 100, 86);
      }

         strokeWeight(3);
         line(lineStep, lineStart, lineStep+10, lineEnd);
      pop();
   }

   //steering wheel (bass)
   let steeringAngle = map(bass, 50, 90, -10, 20); //map to determine steering angle based on bass value
   push();
      translate(960, 671.5);
      rotate(steeringAngle);
      image(FPPWheel, -960, -671.5);
   pop();
   }



   }



