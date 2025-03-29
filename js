let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'beige';
ctx.strokeStyle = 'green';
ctx.arc(150,150,100,1.75*Math.PI,0.0*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'beige';
ctx.strokeStyle = 'green';
ctx.arc(150,150,100,1.0*Math.PI,1.25*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'beige';
ctx.strokeStyle = 'green';
ctx.arc(150,150,75,1.0*Math.PI,2.0*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'beige';
ctx.strokeStyle = 'green';
ctx.arc(150,300,70,1.0 *Math.PI,1.5*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'beige';
ctx.strokeStyle = 'green';
ctx.arc(150,300,58,1.5 *Math.PI,0.0*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.fillRect(0,0,50,50);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'red';
ctx.fillRect(250,0,50,50);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'black';
ctx.fillRect(265,225,75,150);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'black';
ctx.fillRect(225,270,200,200);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.fillRect(0,270,75,200);
ctx.closePath();

ctx.beginPath();                                    
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.fillRect(0,225,37,75);
ctx.closePath();

ctx.beginPath();                                    
ctx.lineWidth = 2;
ctx.fillStyle = 'aqua';
ctx.fillRect(0,120,30,60);
ctx.closePath();

ctx.beginPath();                                    
ctx.lineWidth = 2;
ctx.fillStyle = 'aqua';
ctx.fillRect(270,135,30,30);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'green';
ctx.moveTo(300,150);
ctx.lineTo(0,150);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'blue';
ctx.moveTo(150,150);
ctx.lineTo(0,0);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
ctx.moveTo(150,150);
ctx.lineTo(300,0);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'black';
ctx.moveTo(150,150);
ctx.lineTo(150,300);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'red';
ctx.fillRect(99,151,50,50);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'aqua';
ctx.strokeStyle = 'blue';
ctx.arc(150,100,15,1.5*Math.PI,4.0*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'green';
ctx.arc(75,225,15,1.5*Math.PI,4.0*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'green';
ctx.arc(225,225,15,1.5*Math.PI,4.0*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'aqua';
ctx.strokeStyle = 'green';
ctx.arc(150,300,40,0.0*Math.PI,4.0*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();
