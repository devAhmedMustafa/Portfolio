import "@styles/Head.css"
import "@styles/Particles.css"
import { useEffect } from "react";

export default function Head(){
    return (
        <div className="bg-primary rounded-sm p-4 flex items-center justify-center relative">
            <Personal name="GAME DEVELOPER"/>
        </div>
    )
}

function Personal({name}){
    return(
        <div className="flex flex-col text-white items-center gap-4">
            <h1 className="text-2xl">Ahmed Mustafa</h1>
            <h1 className="text-6xl lg:text-8xl title z-20">{name}</h1>
            <h1 className="text-md">Owner of Star Plus Games</h1>
            
            <p className="text-sm"></p>
        </div>
    );
}

function ParticleSystem(){

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

        const initialX = Math.random() * 10;
        const initialY = Math.random() * 10;

        particle.style.left = initialX + "px";
        particle.style.top = initialY + "px";

        let velocityX = (Math.random() - 0.5) * 2;
        let velocityY = (Math.random() - 0.5) * 2;

        function moveParticle() {
            const currentX = parseFloat(particle.style.left);
            const currentY = parseFloat(particle.style.top);

            const newX = currentX + velocityX;
            const newY = currentY + velocityY;

            if (newX <= 0 || newX >= 700) {
                velocityX *= -1;
            }
            if (newY <= 0 || newY >= 200) {
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
        <div className="particle-container" id="particle-container"></div>
    )
}