var canvas = document.getElementById('add');
var ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.arc(450, 35, 7, 0, 2 * Math.PI);
ctx.fillStyle = 'white';
ctx.fill();

ctx.beginPath();
ctx.arc(475, 35, 7, 0, 2 * Math.PI);
ctx.fillStyle = 'white';
ctx.fill();

ctx.beginPath();
ctx.arc(500, 35, 7, 0, 2 * Math.PI);
ctx.fillStyle = 'white';
ctx.fill();