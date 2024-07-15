import { useEffect } from "react"
import Leaf from "@utils/FallingLeaf"

export default function Leaves(){

    useEffect(()=>{
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');

        
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        addEventListener('resize', ()=>{
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        })

        let leaves = [];
        for (let i = 0; i < 50; i++) {
            leaves.push(new Leaf(canvas));
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let leaf of leaves) {
                leaf.update();
                leaf.draw(ctx);
            }
            requestAnimationFrame(animate);
        }

        animate();
    }, [])

    return (
        <canvas id="canvas" className="-z-40 absolute top-0 left-0 leaves w-screen h-screen">

        </canvas>
    )
}