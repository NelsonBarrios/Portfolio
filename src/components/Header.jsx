import React from 'react'
import {Typography,Box,Avatar,Grid,makeStyles, Divider} from "@material-ui/core"
import Typed from "react-typed"
import avatar from "./assets/avatar.png"
import { Resume } from './Resume'

const useStyles = makeStyles(theme =>({

    avatar:{
        margin:theme.spacing(1),
        width:theme.spacing(15),
        height:theme.spacing(15)
    },

    title:{
        color:"tomato",
        fontFamily:"Georgia"
    },

    subtitle:{
        color :"tan",
        fontFamily:"Georgia, 'Times New Roman', Times, serif"

    },

    container:{
        position:"absolute",
        top:"50%",
        left:"50%",
        transform:"translate(-50%,-50%)",
        textAlign:"center",
        zIndex:1
        
    },

    bakcground:{
        backgroundColor:"gray",
    }
}))

export const Header = ({idioma}) => {

const classes = useStyles()

    return (
        <>
        <Box className={classes.container}>
            <Grid container justify="center">
                <Avatar className={classes.avatar} src={avatar} alt="no esta"/>
            </Grid>
            <Typography className={classes.title} variant="h4">
                <Typed strings={["Nelson Barrios"]} typeSpeed={120} ></Typed>
               
            </Typography>
            <br/>
            {
                idioma ?
             <Typography className={classes.subtitle} variant="h4">
                <Typed strings={["Full Stack Developer","Front-End","Back-End"]} typeSpeed={120} loop backSpeed={60}></Typed>
            </Typography>

            :

        <Typography className={classes.subtitle} variant="h4">
            <Typed strings={["Desarrollador Web Full Stack","Front-End","Back-End"]} typeSpeed={120} loop backSpeed={60}></Typed>
        </Typography>

            }
            
        </Box>
        </>
    )
}
