import pp from "@assets/images/img2_croped.jpg"
import cv from "@assets/files/Resume.pdf"

export default function AboutPage(){
    return(
        <div id="about" className="inline-block w-screen h-screen lg:p-8 pt-20 overflow-scroll">

            <div className="lg:h-full flex flex-col lg:flex-row relative bg-[#eeeeee54] dark:bg-[#00000093] rounded-xl border-2 lg:p-10 dark:border-[#29292970]">
                
                <PP/>
                <Details/>

            </div>

        </div>
    )
}

function PP(){
    return (
        <div className="w-full h-fit lg:w-1/2 lg:h-full flex items-center justify-center">
            <div className="lg:w-[500px] lg:h-[500px] lg:border-2 border-[#ffffff34] dark:border-[#1a1a1a1e] shadow-2xl overflow-hidden lg:rounded-2xl flex justify-center items-center">
                <img className="w-full h-fit" src={pp} alt="" />
            </div>
        </div>
    )
}

function Details(){
    return (
        <div className="bg-[#ececec79] dark:bg-[#2929293b] w-full lg:w-1/2 lg:h-full p-8 lg:p-12 flex flex-col gap-9 lg:rounded-3xl">
            <h1 className="text-4xl font-bold">Hi, I'm Ahmed Mustafa</h1>
            <p className="text-lg">

            I'm a computer science student at Cairo University with a deep passion for technology and a relentless drive to learn as much as possible about the industry. My journey as a developer began at the age of 14 when I started teaching myself how to code. This self-directed learning experience has cultivated a strong passion for web development, and I am always on the lookout for new challenges to improve my skills and stay ahead in the fast-paced tech world.
            <br/><br/>
            Currently, I am the lead programmer at an indie game studio called Star Plus Games. In this role, I am responsible for addressing technical issues, as well as designing the architecture and algorithms for both our software and games. My passion for video games has been limitless since childhood. Growing up, I dreamed of creating my own games, and this passion eventually led me to build my own team and bring our creative visions to life.
            <br/><br/>
            Throughout my journey in coding and software engineering, I have had the opportunity to learn and master many technologies. This diverse skill set has enabled me to tackle a wide range of projects and contribute effectively to my team. Here is an overview of my current tech stack:
                
            </p>

            <TechStack/>

            <DownloadCV/>

        </div>
    )
}

function TechStack(){
    return (
        <div className="text-lg flex-wrap lg:text-4xl w-full flex justify-center gap-3">
            <i className='bx bxl-javascript'></i>
            <i className='bx bxl-react'></i>
            <i className='bx bxl-tailwind-css'></i>
            <i className='bx bxl-c-plus-plus' ></i>
            <i className='bx bxl-unity' ></i>
            <i className='bx bxl-flutter' ></i>
            <i className='bx bxl-mongodb' ></i>
            <i className='bx bxl-nodejs' ></i>
            <i className='bx bx-git-branch' ></i>
            <i className='bx bxl-python' ></i>
            <i className='bx bxl-django' ></i>
            <i className='bx bxl-postgresql' ></i>
        </div>
    )
}

function DownloadCV(){
    return (
        <div className="w-full flex justify-center">

            <button
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
            >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                className="w-5 h-5 mr-2 -ml-1"
            >
                <path
                d="M12 4v12m8-8l-8 8-8-8"
                strokeWidth="2"
                strokeLinejoin="round"
                strokeLinecap="round"
                ></path>
            </svg>
            <a href={cv} download="Ahmed's Resume.pdf">Download Cv</a>
            </button>

        </div>
    )
}