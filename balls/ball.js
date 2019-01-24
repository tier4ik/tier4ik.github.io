'use strict';
class Ball {
    constructor(canvas, x, y) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.x = x || this.canvas.width/2;
        this.y = y || this.canvas.height/2;
        this.color = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
        this.rad = 10 + Math.floor(Math.random()*26);
        this.vel = {
                    x: (Math.random()<0.5) ? 4+Math.floor(Math.random()*9) : -(4+Math.floor(Math.random()*9)), 
                    y: (Math.random()<0.5) ? 4+Math.floor(Math.random()*9) : -(4+Math.floor(Math.random()*9))
                    };
    }
    createNewBall() {
        this.ctx.fillStyle = this.color;
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.rad, 0, 2*Math.PI);
        this.ctx.fill();
    }
    checkBorder() {
        var ballEdgeTop = this.y - this.rad - 2,
            ballEdgeBot = this.y + this.rad + 2,
            ballEdgeLeft = this.x - this.rad - 2,
            ballEdgeRight = this.x + this.rad + 2;
        if(ballEdgeTop < topLine) {
            this.vel.y = -this.vel.y;
            this.createAnotherBall();
        }
        if(ballEdgeBot > this.canvas.height) {
            this.vel.y = -this.vel.y;
        }
        if(ballEdgeLeft < 0) {
            this.vel.x = -this.vel.x;
        }
        if(ballEdgeRight > this.canvas.width) {
            this.vel.x = -this.vel.x;
        }
    }
    createAnotherBall() {
        setTimeout(() => {
            if(ballsCounter < 100) {
                ballsArr.push(new Ball(this.canvas, this.x, this.y));
                ballsCounter++;
            }else{
                return false;
            }
        }, 300);
    }
    update() {
        this.x += this.vel.x;
        this.y += this.vel.y;  
    }
    ballsGenerator() {
        this.createNewBall();
        this.checkBorder();
        this.update();
    }
}

