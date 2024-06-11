import { useEffect } from "react";

export default function ParticleSystem(){

    useEffect(()=>{
        const particleCount = 10;
        const particlesContainer = document.getElementById("particle-container");

        for (let i = 0; i < particleCount; i++) {
            createParticle();
        }

        function createParticle() {
        const particle = document.createElement("div");
        particle.className = "particle";
        particlesContainer.appendChild(particle);

        const initialX = Math.random() * 1000;
        const initialY = Math.random() * 1000;

        particle.style.left = initialX + "px";
        particle.style.top = initialY + "px";

        let velocityX = (Math.random() - 0.5) * 2;
        let velocityY = (Math.random() - 0.5) * 2;

        function moveParticle() {
            const currentX = parseFloat(particle.style.left);
            const currentY = parseFloat(particle.style.top);

            const newX = currentX + velocityX;
            const newY = currentY + velocityY;

            if (newX <= 0 || newX >= window.innerWidth) {
                velocityX *= -1;
            }
            if (newY <= 0 || newY >= window.innerHeight) {
                velocityY *= -1;
            }

            particle.style.left = newX + "px";
            particle.style.top = newY + "px";
            requestAnimationFrame(moveParticle);
        }

            moveParticle()
        }


    }, [])

    return (
        <div className="particle-container fixed top-500 left-500 w-full h-full" id="particle-container"></div>
    )
}