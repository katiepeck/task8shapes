function setup() {
	createCanvas(250, 250);
	noStroke();
	
	r = random(255);
  g = random(255);
  b = random(255);

}

function draw () { 

fill(255,67,89)
beginShape();
vertex(20, 20);
vertex(30, 20);
vertex(40, 40);
vertex(50, 90);
vertex(20, 60);
vertex(20, 60);
vertex(20,40);
endShape(close);

  }


function mousePressed() {
 
  var d = dist(mouseX, mouseY, 100, 100);
  if (d < 250 ) {

    r = random(255);
    g = random(255);
    b = random(255);
  }




fill(105,77,189)
beginShape();
vertex(60, 20);
vertex(30, 20);
vertex(40, 40);
vertex(50, 90);
vertex(40, 60);
vertex(20, 60);
vertex(20,40);
endShape(close);

fill(20,177,49)
beginShape();
vertex(60, 20);
vertex(40, 20);
vertex(40, 40);
vertex(50, 90);
vertex(40, 20);
vertex(10, 60);
vertex(20,40);
endShape(close);

fill(235,77,9,30)
beginShape();
vertex(60, 20);
vertex(40, 20);
vertex(40, 60);
vertex(50, 90);
vertex(10, 20);
vertex(100, 60);
vertex(20,40);
endShape(close);

fill(35,177,9,50)
beginShape();
vertex(60, 20);
vertex(40, 20);
vertex(50, 60);
vertex(90, 100);
vertex(10, 20);
vertex(10, 20);
vertex(70,40);
endShape(close);

fill(255,255,0,150)
beginShape();
vertex(60, 20);
vertex(400, 20);
vertex(50, 60);
vertex(90, 100);
vertex(120, 20);
vertex(10, 20);
vertex(70,40);
endShape(close);

fill(107,44,131,50)
beginShape();
vertex(69, 20);
vertex(400, 20);
vertex(500, 60);
vertex(90, 100);
vertex(125, 20);
vertex(10, 20);
vertex(55,42);
endShape(close);

fill(10,48,121,5)
beginShape();
vertex(69, 20);
vertex(90, 200);
vertex(50, 60);
vertex(90, 100);
vertex(125, 20);
vertex(10, 20);
vertex(55,420);
endShape(close);

fill(248,13,240,5)
beginShape();
vertex(2, 200);
vertex(400, 20);
vertex(20, 60);
vertex(20, 1000);
vertex(25, 20);
vertex(10, 20);
vertex(55,42);
endShape(close);

fill(255,160,10,5)
beginShape();
vertex(2, 200);
vertex(40, 20);
vertex(20, 600);
vertex(2, 100);
vertex(3, 20);
vertex(10, 200);
vertex(5,432);
endShape(close);

fill(235,37,35,3)
beginShape();
vertex(2, 200);
vertex(90, 20,1);
vertex(10, 400);
vertex(2, 1000);
vertex(3, 2000);
vertex(10, 50);
vertex(5,2);
endShape(close);

fill(113,247,155,50)
beginShape();
vertex(2, 200);
vertex(90, 20,1);
vertex(1000, 400,40,100);
vertex(20, 10000);
vertex(30, 2000);
vertex(100, 505,101);
vertex(5,2,4000);
endShape(close);

fill(35,67,54,15)
beginShape();
vertex(12, 200);
vertex(90, 520,1);
vertex(255,0,10, 400);
vertex(2, 1000);
vertex(0,6,3, 2000);
vertex(100, 590);
vertex(5,2);
endShape(close);

fill(25,137,235,43)
beginShape();
vertex(2, 200);
vertex(900, 20,10);
vertex(10, 400);
vertex(27,90,90,10);
vertex(3, 20550);
vertex(150, 530);
vertex(5,2,89);
endShape(close);

fill(25,137,3,1)
beginShape();
vertex(49, 400);
vertex(90, 200,1);
vertex(10, 46);
vertex(2, 10000);
vertex(300, 20);
vertex(10, 50);
vertex(50,2,65);
endShape(close);

fill(99,47,251,2)
beginShape();
vertex(2, 2000);
vertex(90, 20,10);
vertex(120, 4000);
vertex(22, 10000);
vertex(32, 2000);
vertex(10, 50);
vertex(5,20);
endShape(close);

stroke(40,65)
line (60,62)













}

