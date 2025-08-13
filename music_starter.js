let singer;
let drums;
let vocalSize;
let others; 
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(255);
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  
   let bar_spacing = height / 10;
   let bar_height = width / 12;
   let bar_pos_x = width / 2;
 
// changes 

singer = int(map(vocal, 0, 100, 0, 3));
for(let v = 0; v <= 2; v++){
   image(catVocal[singer], 50, 300);
}

drums = int(map(drum, 0, 100, 0, 3));
for(let d = 0; d <= 2; d++){
   image(catDrum[drums], 200, 300);
}


bassist = int(map(bass, 0, 100, 0, 3));
for(let b = 0; b <= 2; b++){
   image(catBass[bassist], 50, 400);
}

others = int(map(other, 0, 100, 0, 10));
if(others < 3){
   image(catOthers[0], 200, 150);
} else if (others > 6){
   image(catOthers[0], 200, 150);
} else {
   image(catOthers[1], 200, 150);
}


   // display "words"
   vocalSize = map(vocal, 0, 100, 30, 70);
   textAlign(CENTER);
   textSize(vocalSize);
   text(words, width/3, height*0.75);

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
 
