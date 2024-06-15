import { useEffect, useRef, useState } from "react"

export default function MouseFollower(){

    const boxRef = useRef();

    const [mousePosition, setMousePosition] = useState([])

    useEffect(()=>{
        window.addEventListener("mousemove", (e)=>{
            
            boxRef.current.style.top = `${e.clientY}px`;
            boxRef.current.style.left = `${e.clientX}px`;

            
        });
    })

    function detectBrowser() {
        var userAgent = navigator.userAgent;
        if (userAgent.indexOf("Edg") > -1) {
            return "Microsoft Edge";
        } 
        else if (userAgent.indexOf("Chrome") > -1) {
            return "Chrome";
        } 
        else if (userAgent.indexOf("Firefox") > -1) {
            return "Firefox";
        } 
        else if (userAgent.indexOf("Safari") > -1) {
            return "Safari";
        } 
        else if (userAgent.indexOf("Opera") > -1) {
            return "Opera";
        } 
        else if (userAgent.indexOf("Trident") > -1 || userAgent.indexOf("MSIE") > -1) {
            return "Internet Explorer";
        }
        else if(userAgent.indexOf("Brave") > -1){
            return "Brave"
        }
    
        return "Unknown";
    }

    useEffect(()=>{
        if (detectBrowser() == "Unknown"){
            boxRef.current.style.display = "none"
        }
    }, [])

    return (
        <div ref={boxRef} className="bg-[#87b5e949] -z-10 w-52 h-52 blur-3xl absolute translate-x-[-50%] translate-y-[-50%]">

        </div>
    )
}