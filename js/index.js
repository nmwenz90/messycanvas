var slider;
var paragraph;
var h3;
var body;

function setup() {
  createCanvas(640, 280);
colorMode(HSB);
    
     h3 = select("h3");
    h3.position(width, 100);
    
    paragraph = select("p");
    paragraph.position(width,580);
    
    slider = createSlider(18,50,18);
    slider.position(width,620);

}

function draw() {
    
    let range = map(mouseX,0,640,0,20)
    let rangeY = map(mouseY,0,480, 180,255)
    let range2 = map(mouseX,0,640,180,210)
    let range3 = map(mouseX,0,240,30,100)
    
    stroke(30,255,100);
    fill(range, 100,255,0.5);
    for(let i = 0; i < 10; i++){
//    stroke(0);
//    line(10 * i,20, 100, 300);
    
    stroke(slider.value()+40,255,100);
    fill(slider.value() -20,255,100);

    beginShape();
    vertex(200, 200);
    bezierVertex(8 * i, 50, 1200, 50, range2 * 5, 75);
    bezierVertex(50, 80, mouseX, 25, 3 * i, 20);
    endShape();
    
    
    stroke(110,255,100);
    fill(rangeY, 100,255,0.5);
    
    beginShape();
    vertex(400,100);
    bezierVertex(12, 40, 45, 60, 45, 300, 100, 40, 20, 400);
    bezierVertex(100, 40, 405, 200, mouseX, 67, 100, mouseY, 140, 5000);
    endShape();
    
    strokeWeight(4);
    stroke(rangeY,255,100,0.2);
    fill(range2, 200,255,0.5);
    beginShape();
    vertex(600,700);
    bezierVertex(180, 200, 400,100, i * 200 + mouseX, 350, 300, 280);
    bezierVertex(180, 200, i * 400,100, 200, 350, 300, 280);
    endShape();
    }
    
    strokeWeight(2);
    stroke(rangeY,255,100,0.2);
    fill(range2, 200,255,0.5);
    beginShape();
    curveVertex(10,100);
    curveVertex(70, 270);
    curveVertex(mouseX-100, 100);
    curveVertex(mouseX-400, 300);
    endShape();
    
    h3.style("font-size", slider.value() + "px");
    
   
    
    
    
    
    
    
    
    
    
    
//  if (mouseIsPressed) {
//    fill(0);
//  } else {
//    fill(255);
//  }
//  ellipse(mouseX, mouseY, 80, 80);
}