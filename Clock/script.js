var watch = new Image();
watch.src = "clock.gif";
watch.addEventListener("load", () => setInterval(time, 1000));

var myCanvas = document.getElementById("my-canvas");
var ctx = myCanvas.getContext('2d');
var radius = myCanvas.height;

var mpi = Math.PI / 6;
function time() {

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);

    radius = myCanvas.height / 2;
    ctx.translate(radius, radius);
    radius = radius * 0.90

    ctx.drawImage(watch, -250, -250);

    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();

    hourHand(ctx, (hour % 12 + minute / 60 + second / 3600) * mpi);
    minuteHand(ctx, (minute + second  / 60) * mpi / 5);
    secondHand(ctx, second * mpi / 5);
}

function hourHand(ctx, h) {
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.rotate(h);
    ctx.lineTo(0, -radius * 0.3);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 10;
    ctx.closePath();
    ctx.stroke();
    ctx.rotate(-h);
}

function minuteHand(ctx, m) {
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.rotate(m);
    ctx.lineTo(0, -radius * 0.5);
    ctx.lineWidth = 8;
    ctx.closePath();
    ctx.stroke();
    ctx.rotate(-m);
}

function secondHand(ctx, s) {
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.rotate(s);
    ctx.lineTo(0, -radius * 0.6);
    ctx.strokeStyle = "red";
    ctx.lineWidth = 3;
    ctx.closePath();
    ctx.stroke();
    ctx.rotate(-s);
}