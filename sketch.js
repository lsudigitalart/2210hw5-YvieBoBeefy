  var ex = 300;
  var ey = 300;
  var r = 0;

  var direction = 1;
  var speed = 20;

  var lx = 0;
  var ly = -20;
  var ly2 = 600;
  var lx2 = 600;

function setup() {
  createCanvas(600, 600);
    background(0);
      ellipseMode(CORNER);

}

function draw() {


  ex += speed * direction
  ey += speed * direction
  lx += speed * direction
  lx2 += speed * direction

stroke(255);
 strokeWeight(1);
  line(lx, ly, lx2, ly2);


  if((ex > width+200) || (ex < -200)) {
   direction = -direction;
   ey = random(-50, 650);
   rotate(360, ex);
  }

  if((lx > width+20) || (lx < -20)){
   lx = random(-20, 620);
  }

  if((lx2 > width+20) || (lx2 < -20)){
    lx2 = random(-20, 620);
  }

fill(random(0));
 stroke(random(0, 255));
  strokeWeight(1);
  translate(5, 10);
  ellipse(ex, ey, random(200, 250));

}
