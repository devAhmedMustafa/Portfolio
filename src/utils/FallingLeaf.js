import leafImg from "@assets/icons/leaf_b.png"

export default class Leaf {
    constructor(canvas) {
        this.canvas =canvas
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * -canvas.height;
        this.size = Math.random() * 20 + 10;
        this.speed = Math.random() * 0.8 + 0.4;
        this.wind = Math.random() * 1.5 - 1;
        this.angle = Math.random() * Math.PI * 2;
        this.angleSpeed = Math.random() * 0.02 - 0.01;
        this.img = new Image();
        this.img.src = leafImg;
    }

    update() {
        this.y += this.speed;
        this.x += this.wind;
        this.angle += this.angleSpeed;

        if (this.y > canvas.height) {
            this.y = Math.random() * -this.canvas.height;
            this.x = Math.random() * this.canvas.width;
        }
    }

    draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.fillStyle = 'rgba(0, 0, 0, 0.8)'; // Brown color for leaf
        // ctx.beginPath();
        // ctx.moveTo(0, 0);
        // ctx.lineTo(this.size / 2, this.size);
        // ctx.lineTo(-this.size / 2, this.size);
        // ctx.closePath();
        ctx.shadowColor = 'rgba(0,0,0, 0.5)'
        ctx.shadowBlur = 12;
        ctx.shadowOffsetX = 5
        ctx.shadowOffsetY = 5
        ctx.drawImage(this.img, 0, 0);
        ctx.fill();
        ctx.restore();
    }
}