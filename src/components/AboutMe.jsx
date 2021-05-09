import React,{useEffect} from 'react'
import {Typography,Box,Avatar,Grid,makeStyles,withStyles,Divider} from "@material-ui/core"
import Aos from "aos";
import "aos/dist/aos.css"
import cvESP from "./assets/CV-Nelson-Barrios-ESP.pdf"
import cvENG from "./assets/CV-NELSON-BARRIOS-ENG.pdf"
import Particles from "react-particles-js"
import aboutme from "./assets/aboutme.png"
const useStyles = makeStyles((theme) =>({
    container :{
        height:"100%",
        backgroundColor:"#333"
    },
    title:{
        display:"flex", 
        justifyContent:"center",
        color:"tomato",
        paddingTop:"6rem",
        textTransform:"uppercase"
    },
    letter:{
        fontFamily:"Georgia, 'Times New Roman', Times, serif"
    },
    img2:{
        position:"absolute",
         left:"475px",
        top:"-20px",
    },  
    avatar:{
        height:"200px",
        width:"200px",
    },
    divIcons:{
        padding:"1rem",
        textAlign:"center"
    },
    icons:{
        margin:"10px",
        backgroundColor:"tan",
        width:"4rem",
        height:"4rem",
        padding:"16px",
        display:"inline-block",
        textAlign:"center",
        "&:hover":{
            backgroundColor:"tomato "
        }
    },
    particles :{
        position:"absolute",
        opacity:1,
        
    }
}))

const icons =[
    {
        url: "https://i.postimg.cc/ZRJT8Xcn/react.png",
        fade:"fade-down",
        name: "React"
    },
    {
        url:"https://i.postimg.cc/rFwDXR5s/git.png",
        fade:"fade-down",
        name:"GitHub"
    },
    {
        url: "https://i.postimg.cc/VsDNRs28/html-5.png",
        fade:"fade-down",
        name:"Html-5"
    },
    {
        url:"https://i.postimg.cc/VLfCfVPY/css.png",
        fade:"fade-down",
        name:"Css"
    },
    {
        url:"https://i.postimg.cc/HnhdCnC8/sass.png" ,
        fade:"fade-up",
        name:"Sass"
    },
    {
        url:"https://i.postimg.cc/sDxg0dRZ/javascript.png",
        fade:"fade-up",
        name:"Javascript"
    },
    {
        url:"https://i.postimg.cc/T2bdYT4z/redux.png",
        fade:"fade-up",
        name:"Redux"
    },
    {
        url:"https://i.postimg.cc/prNjF4jF/node-js.png",
        fade:"fade-up",
        name:"Node Js"
    },
    {
        url:"https://i.postimg.cc/Pq9pg92R/express.png",
        fade:"fade-up",
        name:"Express Js"
    },
    {
        url:"https://i.postimg.cc/FHG0ttVH/MySQL.png",
        fade:"fade-up",
        name:"MySQL"
    },
]

const Img =withStyles({
    img:{
        objectFit: "fill"
        }
    
})(Avatar)



export const AboutMe = ({idioma}) => {
    useEffect(()=>{
        Aos.init({ duration:2000})
    },[])
const classes=useStyles()

    return (
        <Box component="id" id="about">
        {idioma ? 
      
                 <Box component="div"  className={classes.container}>
                 <Grid container>
                     <Grid  item xs={12} sm={6} md={6} >
                     <Box component="div" className={classes.title}>
                         <Typography data-aos="fade-up" variant="h4" align="center" className={classes.letter}>
                         About me
                         <Divider style={{backgroundColor:"tomato"}}/>
                         </Typography>
                     </Box>
            <Typography align="center" data-aos="fade-up" variant="h6" style={{color:"tan",padding:"1rem"}}>
            Full stack web development specialist.
             <Typography variant="h6" data-aos="fade-up"  style={{marginTop:"5px"}}>
             If you need me in your work team or for your business to have a presence on the web, do not hesitate to contact me!
             </Typography>
             <Typography variant="h6" data-aos="fade-up"  style={{marginTop:"5px"}}>
             I am passionate about programming with which, through effort and perseverance, challenges or conflicts can be resolved.
             </Typography>
             <Typography data-aos="fade-up" style={{marginTop:"5px"}} variant="h6">
             Always motivated to continue learning day by day since I consider that it is the only way to constantly improve myself. I feel very comfortable with the "learning by doing" philosophy.
             </Typography>
             <Typography data-aos="fade-up" style={{marginTop:"5px"}} variant="h6">
             If you want to know more <a style={{color:"tomato",textDecoration:"none"}} download="" href={cvENG}>Download my CV!!</a>
             </Typography>
                         </Typography>
                     </Grid>
                     <Grid item xs={12} sm={6} md={6} >
                         <Box component="div">
                     <Box component="div" className={classes.title}>
                         <Typography data-aos="fade-up" variant="h4" align="center"  className={classes.letra}>
                         technologies
                         <Divider style={{backgroundColor:"tomato"}}/>
                         </Typography>
                     </Box>
                
                     
                     <Box component ="div" className={classes.divIcons} >
                             {
                                 icons.map(i => 
                                     
                                 <Box component="div" style={{width:"6rem",height:"6rem",display:"inline-block",margin:"10px"}}>
                                 <Box style={{display:"inline-block"}}>
                                  <Img data-aos={i.fade}  className={classes.icons}  src={i.url} />
                                     <Typography variant="body1"  style={{color:"tan"}}> {i.name}</Typography>
                                 </Box>
                                 </Box>
                                 )
                             }
                         </Box>
                     
                     
                         </Box>
                     </Grid>
                 </Grid>
                 
                 </Box>

            :
            <Box component="div"  className={classes.container}>
     
            <Grid container>
                <Grid  item xs={12} sm={6} md={6} >
                <Box component="div" className={classes.title}>
                    <Typography data-aos="fade-up" variant="h4" align="center"  className={classes.letter}>
                        Acerca de Mi 
                        <Divider style={{backgroundColor:"tomato"}}/>
                  </Typography> 
                  </Box>
            <Typography align="center" data-aos="fade-up" variant="h6" style={{color:"tan",padding:"1rem"}}>
            Especialista en desarrollo web full stack. 
            <Typography variant="h6" data-aos="fade-up"  style={{marginTop:"5px",opacity:"1"}}>
            Si me necesitas en tu equipo de trabajo o para que tu negocio tenga presencia en la web no dudes en contactarme!
            </Typography>
            <Typography variant="h6" data-aos="fade-up"  style={{marginTop:"5px"}}>
            Me apasiona la programación con la cual a través de esfuerzo y constancia se puedan resolver desafíos o conflictos.
            </Typography>
            <Typography data-aos="fade-up" style={{marginTop:"5px"}} variant="h6">
            Motivado siempre a seguir aprendiendo día a día ya que considero que es la única manera de superarme constantemente. Me siento muy cómodo con la filosofía "aprender haciendo"
            </Typography>
            <Typography data-aos="fade-up" style={{marginTop:"5px"}} variant="h6">
            Si queres saber mas, <a style={{color:"tomato",textDecoration:"none"}} download="" href={cvESP}>Descarga mi CV!!</a>
            </Typography>
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={6} >
                    <Box component="div">
                <Box component="div" className={classes.title}>
                    <Typography data-aos="fade-up" variant="h4" align="center"  className={classes.letter}>
                        tecnologias
                        <Divider style={{backgroundColor:"tomato"}}/>
                    </Typography>
                </Box>
            
                
                <Box component ="div" className={classes.divIcons} >
                        {
                            icons.map(i => 
                                
                            <Box component="div" style={{width:"6rem",height:"6rem",display:"inline-block",margin:"10px"}}>
                            <Box style={{display:"inline-block"}}>
                             <Img data-aos={i.fade}  className={classes.icons}  src={i.url} />
                                <Typography variant="body1"  style={{color:"tan"}}> {i.name}</Typography>
                            </Box>
                            </Box>
                            )
                        }
                    </Box>
                
                
                    </Box>
                </Grid>
            </Grid>
            </Box>
            
}
        </Box>
    )
}
