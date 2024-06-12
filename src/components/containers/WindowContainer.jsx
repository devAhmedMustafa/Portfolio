import { useState } from "react";
import GameBox from "../portfolio/games/GameBox"
import "@styles/Window.css"

export default function WindowContainer({children, headline}){

    const id = headline.replace(' ', '-');
    const [maximized, setMaximized] = useState(false);
    const [minimized, setMinimized] = useState(true);

    function ChangeWindowSize(){
        let CustomWindow = document.querySelector(`#${id}`)
        maximized ? CustomWindow.classList.remove('maximized') : CustomWindow.classList.add('maximized');
        setMaximized(!maximized)
    }

    function Minimize(){
        let CustomWindow = document.querySelector(`#${id}`);
        minimized ? CustomWindow.classList.remove('minimized') : CustomWindow.classList.add('minimized');
        setMinimized(!minimized)
    }

    return (
        <div className="border-b-2 border-b-white p-3 minimized" id={id}>

            <div className="flex justify-between">
                <h1 className="text-3xl mb-3 headline">{headline}</h1>

                <div className="flex gap-2">
                    <button onClick={Minimize} className="minimize-btn">
                        <i className="fa-solid fa-minus w-6 h-6 flex items-center justify-center rounded-full text-sm"></i>
                    </button>

                    <button onClick={ChangeWindowSize}>
                        <i className="fa-regular fa-window-maximize w-6 h-6 items-center justify-center rounded-full text-sm"></i>
                    </button>
                </div>

            </div>


            <div className="bg-[#1818187a] w-full flex flex-wrap z-50">
                {children}
            </div>
        </div>
        
    )
}