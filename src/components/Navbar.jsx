import React,{useState} from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import {Typography, Box, ListItem,IconButton,ListItemText,Avatar,List,Divider,ListItemIcon,makeStyles,Drawer,Button} from '@material-ui/core'
import {ArrowBack,AssignmentInd,Home,Apps,ContactMail,EmojiPeople,Face } from "@material-ui/icons"
import avatar from "./assets/avatar.png"
import {Link} from "react-scroll";
import {Footer} from "./Footer.jsx"

var useStyles = makeStyles(theme =>({
    menu:{
        width:"100%",
        background:"#511",
        height:"100%"
    },
    button:{
        display:"flex",
        width:"100%",
        justifyContent:"flex-end"
    },
    listItemColor:{
        color:"tan"
    },
    avatar :{
        display:"block",
        margin:"0.5rem auto",
        width:"10rem",
        height:"10rem"
    },
    fixed:{
        backgroundColor:"#333",
    },
     
    toolbar:theme.mixins.toolbar
}));

const listIconsENG =[
    {
        listIcon:<Home/>,
        listText:"Home",
        path : "home"
    },
    {
        listIcon:<EmojiPeople/>,
        listText:"About Me",
        path:"about"
    },
    {
        listIcon:<Apps/>,
        listText:"Portfolio",
        path: "portfolio"
    },
    {
        listIcon:<AssignmentInd/>,
        listText:"Objectives",
        path : "resume"
    },
    {
        listIcon:<ContactMail/>,
        listText:"Contact Me",
        path: "contact"
    },
]
const listIconsESP =[
    {
        listIcon:<Home/>,
        listText:"Inicio",
        path : "home"
    },
    {
        listIcon:<EmojiPeople/>,
        listText:"Acerca de mi",
        path:"about"
    },
    {
        listIcon:<AssignmentInd/>,
        listText:"Objetivos",
        path : "resume"
    },
    {
        listIcon:<Apps/>,
        listText:"Portafolio",
        path: "portfolio"
    },
    {
        listIcon:<ContactMail/>,
        listText:"Contacto",
        path: "contact"
    },
]

export const Navbar = ({handleClick,idioma}) => {
    const classes = useStyles()
    const [open,Setopen]= useState(false)
    console.log(idioma)
    const slider = () =>{
        Setopen(true)
    }

    const close = () =>{
        Setopen(false)
    }

    return (
        <>
     <Drawer open={open} onClose={close} anchor="right">
        <Box className={classes.menu} component="div">
            <Avatar className={classes.avatar} src={avatar} alt="no esta"/>
            
            <Divider/>
            {
                idioma 
                ?
                <List>
                {listIconsENG.map((i,key)=>(
                    <Link 
                    activeClass="active"
                    to={i.path}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={2000}
                    >
                    <ListItem button key={key} onClick={close} >
                       
                    <ListItemIcon className={classes.listItemColor} >
                    {i.listIcon}
                    </ListItemIcon>
                    <ListItemText className={classes.listItemColor} primary={i.listText}/>
                </ListItem>
                </Link>
                ))}
                </List>
                :
                <List>
                {listIconsESP.map((i,key)=>(
                    <Link 
                    activeClass="active"
                    to={i.path}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={2000}
                    >
                    <ListItem button key={key} onClick={close} >
                       
                    <ListItemIcon className={classes.listItemColor} >
                    {i.listIcon}
                    </ListItemIcon>
                    <ListItemText className={classes.listItemColor} primary={i.listText}/>
                </ListItem>
                </Link>
                ))}
                </List>
            }
               
        </Box>
        <Footer/>

     </Drawer>

        <Box component="nav">
            <AppBar position="fixed"className={classes.fixed}>
              <Toolbar>
                    <IconButton>
                        <ArrowBack onClick={slider} style={{color:"tomato"}}/>
                    </IconButton>
                    {
                        idioma ? 
                    <Typography style={{color:"tan"}} variant="h5">
                        Portfolio
                    </Typography>
                        :
                    <Typography style={{color:"tan"}} variant="h5">
                        Portafolio
                    </Typography>
                    }
                    
                        {
                            idioma 
                            ?  
                            <Box className={classes.button}>
                            <Button style={{color:"tan"}} onClick={handleClick}>esp</Button>
                            </Box>
                            :
                            <Box className={classes.button}>
                            <Button style={{color:"tan"}} onClick={handleClick}>eng</Button>
                            </Box>
                        }
                       
                    
                    
              </Toolbar>
            </AppBar>
        </Box>
        <div className={classes.toolbar}></div>
       
        </>
    )
}
