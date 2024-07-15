import { useEffect, useState } from "react";

export default function FlowFields(){

    useEffect(()=>{
        const canvas = document.querySelector('canvas');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const ctx = canvas.getContext('2d');
        ctx.fillStyle = 'white';
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 2;

        const colorPallete = ["#3b88e0", "#0e58c9", "#4458c7"];

        class Particle {
            constructor(effect) {
                this.effect = effect;
                this.maxLength = Math.floor(Math.random()*1000+100);
                this.reset()
            }

            draw(context) {
                context.beginPath();
                context.moveTo(this.history[0].x, this.history[0].y);
                
                for (let i = 1; i < this.history.length; i++) {
                    context.lineTo(this.history[i].x, this.history[i].y);
                }


                context.strokeStyle = this.color;
                context.stroke();

            }

            update() {
                this.timer--;
                if (this.timer > 0) {
                    let x = Math.floor(this.x / this.effect.cellSize);
                    let y = Math.floor(this.y / this.effect.cellSize);
                    let index = y * this.effect.cols + x;
                    this.angle = this.effect.flowField[index];

                    this.speedX = Math.cos(this.angle);
                    this.speedY = Math.sin(this.angle);
                    
                    this.x += this.speedX * this.speedModifier;
                    this.y += this.speedY * this.speedModifier;

                    this.history.push({x: this.x, y: this.y})

                    if (this.history.length > this.maxLength){
                        this.history.shift();
                    }
                } else {
                    this.reset();
                }
            }

            reset() {
                this.x = Math.random() * this.effect.width;
                this.y = Math.random() * this.effect.height;
                this.speedModifier = Math.random() * 5 + 1;
                this.maxLength = Math.floor(Math.random() * 1000 + 100);
                this.timer = this.maxLength*2;
                this.color = colorPallete[Math.floor(Math.random() * colorPallete.length)];
                this.history = [{ x: this.x, y: this.y }];
            }
        }

        class Effect {
            constructor(width, height) {
                this.width = width;
                this.height = height;
                this.particles = [];
                this.numberOfParticles = 150;
                this.cellSize = 20;
                this.cols = 0;
                this.rows = 0;
                this.flowField = [];
                this.curve = Math.random() * 2.1 + 0.05;
                this.zoom = Math.random() * 0.09 + 0.009;
                this.init(width, height);
            }

            init(width, height) {
                this.width = width;
                this.height = height;
                this.particles = [];
                this.cols = Math.floor(this.width / this.cellSize);
                this.rows = Math.floor(this.height / this.cellSize);
                this.flowField = new Float32Array(this.cols * this.rows);

                for (let y = 0; y < this.rows; y++) {
                    for (let x = 0; x < this.cols; x++) {
                        let angle = (Math.cos(x * this.zoom) + Math.sin(y * this.zoom)) * this.curve;
                        this.flowField[y * this.cols + x] = angle;
                    }
                }

                for (let i = 0; i < this.numberOfParticles; i++) {
                    this.particles.push(new Particle(this));
                }
            }

            render(context) {
                this.particles.forEach(p => {
                    p.draw(context);
                    p.update();
                });
            }
        }

        const effect = new Effect(canvas.width, canvas.height)
        effect.init(canvas.width, canvas.height);

        function animate() {

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            effect.render(ctx);
            requestAnimationFrame(animate);
        }

        animate();

        addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            effect.init(canvas.width, canvas.height);
        });
    }, [])

    return (
        <canvas className="absolute -z-20 top-0 left-0">

        </canvas>
    )
}