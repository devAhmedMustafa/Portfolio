import { useEffect, useState } from "react"

export default function ColliderObject({delta, speed}){

    useEffect(()=>{

        let object = document.querySelector("#moving-object");
        const container = object.parentElement;
        let velocity = {x: 0, y: 0};
        let currentX = 10; let currentY = 10;

        velocity.x = velocity.y = delta * speed;

        function Move(){
            
            currentX += velocity.x
            currentY += velocity.y

            if (currentY >= 500-object.offsetHeight || currentY <= 0) velocity.y *= -1;
            if (currentX >= container.offsetWidth-object.offsetWidth || currentX <= 0)  velocity.x *= -1;
    
            object.style.top = `${currentY}px`;
            object.style.left = `${currentX}px`;

            requestAnimationFrame(Move)
        }

        Move()        

    }, []);

    return(
        <div id="moving-object" className="absolute w-8 h-8 bg-white">

        </div>
    )
}