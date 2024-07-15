import { useEffect, useState, useRef } from 'react'
import './App.css'
import Head from './components/containers/Head'
import WindowContainer from './components/containers/WindowContainer'
import Games from './assets/projects/Games'
import GameBox from './components/portfolio/games/GameBox'
import Webapps from './assets/projects/Webapps'
import WebappBox from './components/portfolio/webapps/WebappBox'
import UiDesignBox from './components/portfolio/ui designs/UiDesignBox'
import UiDesigns from './assets/projects/UiDesigns'
import MusicPlayer from './components/portfolio/music/MusicPlayer'
import Soundtracks from './assets/projects/Music'
import { BrowserRouter } from 'react-router-dom'
import ParticleSystem from './components/graphics systems/Particle System'
import MouseFollower from './components/graphics systems/MouseFollower'
import LandingPage from './pages/LandingPage'
import ProjectsPage from './pages/ProjectsPage'
import AboutPage from './pages/AboutPage'
import DarkModeSwitch from './components/elements/DarkModeSwitch'

function Navigator(){

  const [current, setCurrent] = useState("home")
  const NavRef = useRef();
  
  useEffect(()=>{
    addEventListener('resize', ()=>{
      navigate("home");
    })
  }, )

  const navigate = (id)=>{

    setCurrent(id);

    const container = document.querySelector('#container');
    const x = document.getElementById(id).offsetLeft;
    
    const animate = ()=>{
      container.style.transform = `translateX(-${x}px)`;
      container.style.transition = "transform 0.8s ease-in-out";
    }

    animate()
    // console.log(id)
  }

  return (
    <>
      <div className="navigator bg-[#ffffff79] dark:bg-[#08080886] fixed z-50 top-2 rounded-full left-1/2 -translate-x-1/2 px-6 py-3">
        <ul className="flex gap-10 text-lg text-black">
          <button onClick={()=> navigate('home')}><i className="fa-solid fa-house text-black dark:text-white"></i></button>
          <button onClick={()=> navigate('projects')}><i className="fa-solid fa-briefcase text-black dark:text-white"></i></button>
          <button onClick={()=> navigate('about')}><i className="fa-solid fa-user text-black dark:text-white"></i></button>
        </ul>
      </div>

    </>
  )
}


function App() {
  

  return (
    <BrowserRouter>

    
    <div>

        <Navigator/>
        <DarkModeSwitch/>

        <div id='container' className='fixed top-0 left-0 w-fit h-fit flex items-start justify-start'>

        
          <LandingPage/>
          <ProjectsPage/>
          <AboutPage/>
          
        </div>

        {/* <Head/> */}

        {/* <div className='flex justify-around lg:py-36 lg:w-[60%] flex-col sm:flex-row'>
          <WindowContainer headline="Games Projects" symbol={gamepad}>
            {Games.map((game)=> <GameBox game={game} key={game.name} />)}
          </WindowContainer>

          <WindowContainer headline="Webapps Projects" symbol={web}>
            {Webapps.map((app)=> <WebappBox app={app} key={app.name} /> )}
          </WindowContainer>

          <WindowContainer headline="UI Projects" symbol={ux}>
            {UiDesigns.map((design)=> <UiDesignBox design={design}  key={design.name} />) }
          </WindowContainer>

          <WindowContainer headline="Music Projects" symbol={music}>
            {Soundtracks.map((soundtrack)=> <MusicPlayer soundtrack={soundtrack} key={soundtrack.link} />)}
          </WindowContainer>

          <WindowContainer headline="Other Projects" symbol={other}>
            <div className='flex flex-col gap-4'>

              <h1 className="text-3xl">IAM Filter - Photo editing software</h1>

              <p>A school assignment competition in making the best software with GUI in C++</p>

              <iframe width="560" height="315" src="https://www.youtube.com/embed/V9BGwE7q-18?si=2Giaq5DsVVouvlYP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            </div>
          </WindowContainer>
        </div> */}

        {/* <MouseFollower/> */}

    </div>

    </BrowserRouter>
  )
}

export default App
