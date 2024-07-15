import Projects from "@assets/projects/Projects";
import { createContext, useContext, useState } from "react";
import ButtonUrl from "../elements/ButtonUrl";
import BlobImage from "./BlobImage";


const SectionContext = createContext(undefined);
const SelectContext = createContext(undefined);

export default function ProjectContainer(){

    const [selected, setSelected] = useState(0)
    const [section, setSection] = useState("info")

    return (
        <SelectContext.Provider value={[selected, setSelected]}>

            <div className="border-2 border-[#ffffff3f] w-full h-full rounded-lg bg-[#e6e6e67c] flex flex-col lg:flex-row shadow-2xl dark:border-[#0e0e0e2a] dark:bg-[#13131375]">

                <div className="flex flex-row lg:flex-col gap-2 w-full lg:w-[10%] h-[10%] lg:h-full overflow-auto p-3 lg:p-6">
                    {Projects.map((p, id)=>
                        <button onClick={()=>{
                            setSection("info")
                            setSelected(id);
                        }} className="text-start w-fit whitespace-nowrap text-lg p-2" key={id}>
                            <p>{p.name}</p>
                        </button>
                    )}
                </div>

                <div className="w-full h-full flex flex-col gap-6 bg-[#fdfdfd96] p-3 lg:p-6 dark:bg-[#00000094]">

                    <div className="w-full h-[7%] rounded-full flex items-center p-3 lg:px-7 gap-10 text-lg">

                        <SectionContext.Provider value={[section, setSection]}>

                            <Preview name={"info"}>    
                                <i className="fa-solid fa-folder"></i>
                            </Preview>

                            {
                            Projects[selected].images&&
                            <Preview name={"images"}>
                                <i className="fa-regular fa-image"></i>
                            </Preview>
                            }

                            {
                            Projects[selected].yt&&
                            <Preview name={"youtube"}>
                                <i className="fa-brands fa-youtube"></i>
                            </Preview>
                            }

                            {
                            Projects[selected].embed&&
                            <Preview name={"embed"}>
                                <i className="fa-solid fa-desktop"></i>
                            </Preview>
                            }

                            {
                            Projects[selected].social&&
                            <Preview name={"social"}>
                                <i className="fa-solid fa-globe"></i>
                            </Preview>
                            }

                            {
                            Projects[selected].dev&&
                            <Preview name={"development"}>
                                <i className="fa-solid fa-stairs"></i>
                            </Preview>
                            }

                        </SectionContext.Provider>


                    </div>

                    {
                        section == "info" &&
                        <div className="w-full rounded-xl p-3 lg:p-5 flex flex-col gap-6">
                            <h1 className="text-4xl">
                                {Projects[selected].name}
                            </h1>
                            <p>
                                {Projects[selected].desc}
                            </p>

                            <a className="text-xl w-fit" target="_blank" href={Projects[selected].link}><ButtonUrl content={"Link"}/></a>
                        </div>
                    }

                    {
                        section == "images" &&
                        <ImagesPreview/>
                    }

                    {
                        section == "youtube" &&
                        <YoutubePreview/>
                    }

                    {
                        section == "embed" &&
                        <EmbedPreview/>
                    }

                </div>

            </div>
        </SelectContext.Provider>
    )
}

function Preview({children, name}){

    const [section, setSection] = useContext(SectionContext);

    return (
        <button onClick={()=> setSection(name)} className="w-3 h-3 lg:w-6 lg:h-6 flex justify-center items-center text-lg">    
            {children}
        </button>
    )
}

function ImagesPreview(){

    const [selected, setSelected] = useContext(SelectContext)

    return (
        <div className="w-full h-full rounded-xl p-3 lg:p-5 flex flex-wrap overflow-scroll gap-3">
            {
                Projects[selected].images.map((img, id)=> <BlobImage key={id} url={img}/>)
            }
        </div>
    )
}

function YoutubePreview(){
    const [selected, setSelected] = useContext(SelectContext)
    return (
        <div className="w-full h-full">
            <iframe width="100%" height="100%" src={Projects[selected].yt}/>
        </div>
    )
}

function EmbedPreview(){
    const [selected, setSelected] = useContext(SelectContext)
    return (
        <div className="w-full h-screen lg:h-full flex flex-col justify-center items-center rounded-xl overflow-hidden">
            <iframe src={Projects[selected].embed} className="w-full h-full" frameBorder="0"></iframe>
        </div>
    )
}