let singer;
let drums;
let vocalSize;
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

singer = int(map(vocal, 0, 100, 0, 4));
if(singer <= 1){
   image(catIdle, 70, 300);
}else if (singer == 2){
   image(catSing, 70, 300);
}else {
   image(catBelt, 70, 300);
}

drums = int(map(drum, 0, 100, 0, 4));
if (drums <= 1){
   image(drumIdle, 200, 300);
}else if (drums == 2){
   image(drumPlay1, 200, 300);
}else {
   image(drumPlay2, 200, 300);

}
   // display "words"
   vocalSize = map(vocal, 0, 100, 30, 70);
   textAlign(CENTER);
   textSize(vocalSize);
   text(words, width/2, height*0.75);

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
 
