
import React,{useState, useEffect} from "react"
import {Route} from "react-router-dom"
import {ThemeProvider} from '@material-ui/core/styles'
import theme from "./theme"
import { Home } from "./components/Home"
import { CssBaseline,makeStyles} from "@material-ui/core";
import css from "./App.css"
import soundC from './components/assets/TheChainsmokers-Paris.mp3';
import soundD from './components/assets/ShaneHarperSatellite.mp3';
import soundE from './components/assets/ShaneHarperPOWER.mp3';
import soundF from './components/assets/ShaneHarperHoldYouUp.mp3';
import soundG from './components/assets/ShaneHarperAnythingButLove.mp3';
import soundH from './components/assets/LetsTakeTheWorldTonight.mp3';
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
    src: [soundC, soundD, soundE, soundF, soundG, soundH]
});
useEffect(()=>{
  sound.play();
})

const classes = useStyles()
  return(
    <div>
          <Navbar handleClick={handleClick} idioma={idioma}/>
          <Home idioma={idioma}/>
          <AboutMe idioma={idioma}/>
          <Portfolio idioma={idioma}/>
          <Resume idioma={idioma}/>
          <Contact idioma={idioma}/>
          
    </div>
  )
}
export default App;