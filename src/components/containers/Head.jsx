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
            
            <p className="text-sm">
                Student at faculty of computers and AI - Cairo university
            </p>
        </div>
    );
}