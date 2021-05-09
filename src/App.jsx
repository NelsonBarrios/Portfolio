
import React,{useState} from "react"
import {Route} from "react-router-dom"
import {ThemeProvider} from '@material-ui/core/styles'
import theme from "./theme"
import { Home } from "./components/Home"
import { CssBaseline,makeStyles} from "@material-ui/core";
import css from "./App.css"
import soundC from './components/assets/TheChainsmokers-Paris.mp3'
import {Resume} from "./components/Resume"
import {Portfolio} from "./components/Portfolio"
import {Contact} from "./components/Contact"
import Particles from "react-particles-js"
import { AboutMe } from "./components/AboutMe"
import { Element } from "react-scroll";
import { Navbar } from './components/Navbar';
import { Howl, Howler } from 'howler';

const useStyles = makeStyles(theme=>({
root:{
  background:"gray",
  backgroundSize:"cover",
  backgroundRepeat:"no-repeat"
},
particles :{
  position:"absolute",
  opacity:1,
}
}))

function App(){
  const [idioma, Setidioma] = useState(false)

function handleClick (){
  Setidioma(!idioma)
}
  const sound = new Howl({
  src: ['sound.webm', 'sound.mp3']
});

const classes = useStyles()
  return(
    <div>
          <Navbar handleClick={handleClick} idioma={idioma}/>
          <Home idioma={idioma}/>
          <AboutMe idioma={idioma}/>
          <Portfolio idioma={idioma}/>
          <Resume idioma={idioma}/>
          <Contact idioma={idioma}/>
          <button  onClick={sound.play()} type="button">Play</button>
    </div>
  )
}
export default App;