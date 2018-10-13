var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");


ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();



var FPS = 30;
setInterval(function() {
  update();
  draw();
}, 1000/FPS);


function update() {
    a=0;
}

function draw() {
    ctx.fillStyle = "#000"; // Set color to black
    ctx.fillText("Sup yo!", 50, 50);
}