
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(20)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  
   let bar_spacing = height / 10;
   let bar_height = width / 12;
   let bar_pos_x = width / 2;
 
// changes 
var col = 0;
var r = 0;
var g = 255;
vHeight = map(vocal, 0, 100, 10, width/2);
r = map(vHeight, 10, width/2, 255, 0);
g = map(vHeight, 10, width/2, 150, 255);
fill(r, g, 0);
rectMode(CORNER);

rect(width/2, width, 50, -vHeight*1.5);
fill(255);
push();
translate(width/2, width);
rotate(270);
text("vocals", 0, 0);
pop();

var dSize = 50;
var opacity = 255;
dSize = map(drum, 0, 100, 20, 100);
opactiy = map(drum, 0, 100, 0, 255);
fill(r, g, 255, opactiy);
strokeWeight(0);
drum = map(drum, 0, 100, width, width*0.75);

rectMode(CENTER);
if(opactiy > 175){
   rect(width/4, drum, dSize, dSize);
} else {
   ellipse(width/4, drum, dSize, dSize);
}

bass = map(bass, 0, 100, 1, 5);
if(bass < 4){
   push();
   fill(255);
   strokeWeight(2);
   stroke(255);
   bezierVertex(50, 50, width, width, width, width, 150, 150);
   pop();
} else {
   fill(255);
   rect(width/2, 50, 150, 50);
}
   // // vocal bar is red
   // fill(200, 0, 0);
   // rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
   // fill(0);
   // text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
   // // drum bar is green
   // fill(0, 200, 0);
   // ellipse(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
   // fill(0);
   // text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
   // // bass bar is blue
   // fill(50, 50, 240);
   // rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
   // fill(0);
   // text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
   // // other bar is white
   // fill(200, 200, 200);
   // rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
   // fill(0);
   // text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
   // fill(255, 255, 0);
 
   // // display "words"
   // textAlign(CENTER);
   // textSize(vocal);
   // text(words, width/2, height/3);
}