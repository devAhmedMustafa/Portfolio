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

function App() {
  

  return (
    <BrowserRouter>
    
    <div className='flex flex-col items-center'>
      <div className='flex flex-col w-full p-2 lg:w-[60%] gap-4'>
        <Navbar/>
        <Head/>

        <WindowContainer headline="Games Projects">
          {Games.map((game)=> <GameBox game={game} key={game.name} />)}
        </WindowContainer>

        <WindowContainer headline="Webapps Projects">
          {Webapps.map((app)=> <WebappBox app={app} key={app.name} /> )}
        </WindowContainer>

        <WindowContainer headline="UI Projects">
          {UiDesigns.map((design)=> <UiDesignBox design={design}  key={design.name} />) }
        </WindowContainer>

        <WindowContainer headline="Music Projects">
          {Soundtracks.map((soundtrack)=> <MusicPlayer soundtrack={soundtrack} key={soundtrack.link} />)}
        </WindowContainer>
        <WindowContainer headline="Other Projects"/>

        
      </div>
    </div>

    </BrowserRouter>
  )
}

export default App
