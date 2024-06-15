import "@styles/Head.css"
import "@styles/Particles.css"
import { useEffect } from "react";
import logo from "@assets/Logo.png"

export default function Head(){
    return (
        <div className="rounded-sm p-4 flex items-center justify-center relative overflow-hidden">
            <Personal name="Game Developer"/>
            
        </div>
    )
}

function Personal({name}){
    return(
        <div className="flex flex-col text-primary items-center gap-2">
            <h1 className="text-6xl lg:text-9xl title selection:bg-none flex mb-8 items-center">AHMED <img src={logo} className="invert mx-1 ml-4 w-24 lg:w-52" alt="" /><span className="md:block hidden">STAFA .</span></h1>
            <h1 className="text-xl lg:text-3xl z-20">{name} & Software Engineer</h1>
            <h1 className="text-xl">Owner of Star Plus Games</h1>
            
            <p className="text-lg">
                Student at faculty of computers and AI - Cairo university
            </p>

            <p className="text-lg">
                Volunteer at IEEE Cairo branch - Computer commitee
            </p>
        </div>
    );
}