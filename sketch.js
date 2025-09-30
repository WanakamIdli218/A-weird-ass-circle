function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(20);
  noFill();
  stroke(200, 200, 255, 150);

  translate(width / 2, height / 2);
  for (let r = 50; r < 250; r += 20) {
    beginShape();
    for (let a = 0; a < TWO_PI; a += 0.1) {
      let x = r * cos(a) + sin(frameCount * 0.01 + a * 3) * mouseX * 0.05;
      let y = r * sin(a) + cos(frameCount * 0.01 + a * 3) * mouseY * 0.05;
      vertex(x, y);
    }
    endShape(CLOSE);
  }
}
