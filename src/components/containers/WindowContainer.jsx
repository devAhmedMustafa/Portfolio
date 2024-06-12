import { useState } from "react";
import GameBox from "../portfolio/games/GameBox"
import "@styles/Window.css"

export default function WindowContainer({children, headline, symbol}){

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
        <div className="p-3 minimized" id={id}>

            <div className="flex justify-between">
                <h1 className="text-3xl mb-3 headline hidden">{headline}</h1>

                <div className="flex gap-2">
                    
                    <button onClick={ChangeWindowSize} className="close-btn hidden">
                        <i className="fa-regular fa-window-maximize w-10 h-10 items-center justify-center rounded-full text-sm"></i>
                    </button>
                </div>

            </div>

            <div className="w-28 h-28 flex justify-center items-center">
         
                <button onClick={ChangeWindowSize} className="w-20 h-20 hover:w-24 hover:h-24 transition-all projects-icon">
                    <img src={symbol} className=" max-w-full max-h-full shadow-image"/>
                </button>

            </div>


            <div className="bg-[#1818187a] w-full flex-wrap hidden z-50 content">
                {children}
            </div>
        </div>
        
    )
}