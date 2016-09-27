  var ex = 300;
  var ey = 300;
  var r = 0;

  var direction = 1;
  var speed = 1;

  var lx = 300;
  var ly = 0;
  var ly2 = 300;
  var lx2 = 300;

  var lx3 = 0;
  var ly3 = 300;
  var lx4 = 200;
  var ly4 = 200;

  var lx5 = 600;
  var ly5 = 300;
  var lx6 = 100;
  var ly6 = 100;

function setup() {
  createCanvas(600, 600);
    background(0);
      ellipseMode(CORNER);

}

function draw() {

  ex += speed * direction
  ey += speed * direction
  lx2 += speed * direction
  ly2 += speed * direction

stroke(255);
 strokeWeight(1);
  line(lx, ly, lx2, ly2);

  line(lx3, ly3, lx4, ly4);

  line(lx5, ly5, lx6, ly6);

  if((lx < width) || ( lx > 0)){
   direction = -direction;
   lx2 = random(-20, 620);
   ly2 = random(-20, 620);
  }

  if((ly3 < height) || ( ly3 > 0)){
   direction = +direction;
   lx4 = random(-20, 620);
   ly4 = random(-20, 620);
  }

  if((ly5 < height) || ( ly5 > 0)){
   direction = +direction;
   lx6 = random(-20, 620);
   ly6 = random(-20, 620);
  }

}
