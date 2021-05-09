import React from 'react'
import { Header } from './Header'
import { Navbar } from './Navbar'
import Particles from "react-particles-js"
import {makeStyles,Divider, Box ,Typography, Button,Grid} from "@material-ui/core";
import { Resume } from './Resume';
import { animateScroll as scroll} from "react-scroll";
const useStyles= makeStyles(theme =>({
    particles :{
  position:"absolute",
  opacity:1,
    },
    root:{
        minHeight:"100vh",
      }
  }))


export const Home = ({idioma}) => {


    const classes =useStyles()
    return (
        <div id="home" className={classes.root}>
            <Header idioma={idioma}/>
            <Particles canvasClassName={classes.particles}
                    params={{
                        particles:{
                         number:{
                            value:35,
                                }
                             }
                        }}
            />
            
        </div>
    )
}
