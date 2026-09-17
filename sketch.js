let song
async function setup() {
  //song = await loadSound('assets/Full Hearts.mp3')
  createCanvas(400, 400);
  fill(0,0,0,0)
  stroke(0,0,0)
  rect(0,0,400,400)
}

function soappret(xpos,ypos){
  xpos=xpos-100-113.75
  ypos=ypos-158.5-37.5
  beginShape()
  vertex(xpos+100,ypos+200)
  bezierVertex(xpos+145,ypos+145)
  bezierVertex(xpos+245,ypos+145)
  bezierVertex(xpos+300,ypos+200)
  bezierVertex(xpos+400,ypos+300)
  bezierVertex(xpos+200,ypos+125)
  bezierVertex(xpos+100,ypos+200)
  endShape(CLOSE)
  //shape is 300,100
}
function draw() {
  background(255,255,255,5);
  fill(0,0,0)
  soappret(mouseX,mouseY)
  fill(0,0,0)
  //rect(86.25,162.5,227.5,75)
  // debug schteuph
}
/*function mousePressed() {
  song.play();
}*/
