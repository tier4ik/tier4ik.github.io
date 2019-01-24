'use strict';
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//
var ballsArr = [new Ball(canvas)];
var topLine = 40;
var ballsCounter = 1;
var interval;
//
function createBackground() {
    ctx.fillStyle = '#00738c';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#d6ead4';
    ctx.fillRect(0, 0, canvas.width, topLine);
    ctx.fillStyle = '#00738c';
    ctx.font = '32px Tahoma';
}
function renderBalls() {
    for(var item of ballsArr) {
        item.ballsGenerator();
    }  
}
function draw() {
    interval = setInterval(function() {
        if(ballsCounter < 100) {
            createBackground();
            ctx.fillText(`You\`ll find friends here :)`, canvas.width/2-200, 30);
            renderBalls();
        }else{
            createBackground();
            ctx.fillText(`You have ${ballsCounter} new friends :)`, canvas.width/2-200, 30);
            renderBalls();
        }
    }, 30);
}
draw();