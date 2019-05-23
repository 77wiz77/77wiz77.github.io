var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

//Основной прямоугольник
ctx.beginPath();
ctx.rect(50, 100, 800, 600);
ctx.fillStyle = 'white';
ctx.fill();
ctx.stroke();

//Прорисовка большого красного креста
ctx.beginPath();
ctx.rect(400, 100, 100, 600);
ctx.fillStyle = 'red';
ctx.fill();
ctx.beginPath();
ctx.rect(50, 350, 800, 100);
ctx.fillStyle = 'red';
ctx.fill();

//Прорисовка маленьких красных крестов
ctx.beginPath();
ctx.rect(150, 200, 150, 50);
ctx.fillStyle = 'red';
ctx.fill();
ctx.beginPath();
ctx.rect(200, 150, 50, 150);
ctx.fillStyle = 'red';
ctx.fill();

ctx.beginPath();
ctx.rect(600, 200, 150, 50);
ctx.fillStyle = 'red';
ctx.fill();
ctx.beginPath();
ctx.rect(650, 150, 50, 150);
ctx.fillStyle = 'red';
ctx.fill();

ctx.beginPath();
ctx.rect(150, 550, 150, 50);
ctx.fillStyle = 'red';
ctx.fill();
ctx.beginPath();
ctx.rect(200, 500, 50, 150);
ctx.fillStyle = 'red';
ctx.fill();

ctx.beginPath();
ctx.rect(600, 550, 150, 50);
ctx.fillStyle = 'red';
ctx.fill();
ctx.beginPath();
ctx.rect(650, 500, 50, 150);
ctx.fillStyle = 'red';
ctx.fill();