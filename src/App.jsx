import { useState } from 'react'
import './App.css'
import Navbar from './components/containers/Navbar'
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
import background from "@assets/videos/anime.mp4"
import ParticleSystem from './components/graphics systems/Particle System'
import gamepad from "@assets/icons/controller-pad.png"
import web from "@assets/icons/world-wide-web.png"
import ux from "@assets/icons/ux-design.png"
import music from "@assets/icons/music-note.png"
import other from "@assets/icons/idea.png"
import MouseFollower from './components/graphics systems/MouseFollower'



function App() {
  

  return (
    <BrowserRouter>
    
    <div className='flex flex-col items-center min-h-screen'>

      <video className="fixed left-0 min-w-full min-h-full object-cover -z-10 video-back" autoPlay muted loop>
        <source src={background}/>
      </video>

      <ParticleSystem/>

      <div className='flex flex-col w-full p-2 lg:w-[60%] gap-4'>
        <Navbar/>
        <Head/>

        <div className='flex justify-around py-36 flex-col sm:flex-row'>
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
        </div>

        <MouseFollower/>

        
      </div>
    </div>

    </BrowserRouter>
  )
}

export default App
