import "@styles/Head.css"
import "@styles/Particles.css"
import { useEffect } from "react";

export default function Head(){
    return (
        <div className="rounded-sm p-4 flex items-center justify-center relative overflow-hidden">
            <Personal name="GAME DEVELOPER"/>
            
        </div>
    )
}

function Personal({name}){
    return(
        <div className="flex flex-col text-primary items-center gap-2">
            <h1 className="text-2xl">Ahmed Mustafa</h1>
            <h1 className="text-6xl lg:text-9xl title z-20">{name}</h1>
            <h1 className="text-2xl">&</h1>
            <h1 className="text-3xl">Software Engineer</h1>
            <h1 className="text-xl">Owner of Star Plus Games</h1>
            
            <p className="text-md">
                Student at faculty of computers and AI - Cairo university
            </p>

            <p className="text-md">
                Volunteer at IEEE Cairo branch - Computer commitee
            </p>
        </div>
    );
}