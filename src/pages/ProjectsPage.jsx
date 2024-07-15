import ProjectContainer from "../components/containers/ProjectsContainer";

export default function ProjectsPage(){
    return(
        <div id="projects" className="inline-block w-screen h-screen lg:p-8 pt-20 overflow-y-scroll overflow-x-visible lg:overflow-visible">

            <div className="lg:h-full relative">
                
                <div className="w-[300px] h-[900px] top-0 left-[10%] -z-50 absolute bg-gradient-to-tr from-emerald-500 to-blue-500 rotate-45 blur-[100px]"></div>
                <div className="w-[300px] h-[900px] top-0 left-[20%] -z-50 absolute bg-gradient-to-br from-blue-700 to-indigo-600 rotate-45 blur-[100px]"></div>

                <ProjectContainer/>

            </div>

        </div>
    )
}
