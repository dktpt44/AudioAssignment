function setup() {
  var width = document.getElementById("interactiveSoundarea").offsetWidth;
  var myCanvas = createCanvas(width, 300);
  myCanvas.parent("interactiveSoundarea");
}
var drawline = false;
var startDrawing = false;

$("body").on("keypress", () => {
  startDrawing = true;
  drawline = true;
});
var x = 10;
var y = 200;

function draw() {

  noFill();
  background(51);
  if (!startDrawing)
    return;
  stroke(237, 34, 93);
  strokeWeight(3);
  x += 3;
  y += Math.random() * (5 + 10) - 5;
  if (y >= 200)
    y = 200;

  if (!drawline && y < 185) {
    y += Math.random() * 60;
    if (y > 200)
      y = 200;
  }

  if (drawline) {
    y -= Math.random() * 60;
    if (y <= 80) {
      drawline = false;
    }
  }
  vertex(x, y);

  if (x > width) {
    // to do clean the canvas
    x = 0;
  }
  endShape();




}