import React,{useEffect} from 'react'
import {makeStyles,Divider, Box ,Typography} from "@material-ui/core";
import {Navbar} from "./Navbar"
import Particles from "react-particles-js"
import Aos from "aos";
import "aos/dist/aos.css"

const useStyles = makeStyles(theme =>({

    timeLine:{
        position:"relative",
        padding:"1rem",
        margin:"0 auto",
        "&:before":{
            content:"''",
            position:"absolute",
            height :"100%",
            right:"40px",
            border:"1px solid tan",
            top : 0
        },
        "&:after":{
            content:"''",
            display:"table",
            clear:"both"
        },
        [theme.breakpoints.up("md")]:{
            padding:"2rem",
            "&:before":{
                left:"calc(50% - 1px)",
                right:"auto"
            }
        }
    },

    timeLineItem:{
        padding:"1rem",
        borderBottom:"2px solid tan",
        position:"relative",
        margin:"1rem 3rem 1rem 1rem",
        clear:"both",
        "&:after":{
            content:"''",
            position:'absolute',
        },
        "&:before":{
            content:"''",
            position:'absolute',
            right:"-0.625rem",
            top:"calc(50%-5px)",
            borderStyle:"solid",
            borderColor:"tomato tomato transparent transparent",
            borderWidth:"0.625rem",
            transform:"rotate(45deg)",
        },
        [theme.breakpoints.up("md")]:{
            width :"44%",
            margin:"1rem",
            "&:nth-of-type(2n)":{
                float:"right",
                margin:"1rem",
                borderColor:"tan"
            },
            "&:nth-of-type(2n):before":{
                right:"auto",
                left:"-0.625rem",
                borderColor:"transparent transparent tomato tomato",
            }
        }
    },

    timeLineYear:{
        textAling: "center",
        maxWidth:"9.375rem",
        margin : "0 3rem 0 auto",
        fontSize:"1.8rem",
        background:"tomato",
        color:"white",
        lineHeight:1,
        padding:"0.5rem 0 1rem",
        "&:before":{
            display:"none"
        },
        [theme.breakpoints.up("md")]:{
            textAlign:"center",
            margin:"0 auto ",
            "&:nth-of-type(2n)":{
                float:"none",
                margin:"0 auto",
            },
            "&:nth-of-type(2n):before":{
                display:"none"
            }
        }
        
    },
    title:{
        display:"flex", 
        justifyContent:"center",
        color:"tomato",
        textTransform:'uppercase',
        padding:"4rem 0",
    },
    letter:{
        fontFamily:"Georgia, 'Times New Roman', Times, serif"
    },
    heading:{
        color:"tomato",
    },

    subheading:{
        color:"white",
        padding:0,
        textTransform:"uppercase"
    },
    particles :{
        position:"absolute",
        opacity:2,
    }
}))

export const Resume = ({idioma}) => {

    useEffect(()=>{
        Aos.init({ duration:2000})
    },[])
const classes = useStyles()

    return (
        <div id="resume">
            {
            idioma
                 ? 
                 <Box component="header" >
                 <Particles canvasClassName={classes.particles}
                           params={{
                               particles:{
                                number:{
                                   value:35,
                                       }
                                    }
                               }}
                   />
                     <Box component="div" className={classes.title}>
                         <Typography data-aos="fade-up" variant="h4" align="center" className={classes.letter}>
                         Objectivies
                         <Divider style={{backgroundColor:"tomato"}}/>
                         </Typography>
                     </Box>
                   <Box component="div" data-aos="fade-up" className={classes.timeLine}>
                       <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                           2021/2023
                       </Typography>
                       <Box component="div" data-aos="fade-up" className={classes.timeLineItem}>
                           <Typography variant="h5" align="center" className={classes.subheading}>
                           Insert myself in the labor market
       
                           </Typography>
                           <Typography variant ="body1" align="center" style={{color:"tomato"}}>
                               Lear new technologies
                           </Typography>
                           <Typography variant="subtitle1" align="center" style={{color:"tan"}}>
                            To gain experience and continue improving myself
                           </Typography>
                       </Box>
                       <Typography variant="h2" data-aos="fade-up" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                           2023/2025
                       </Typography>
                       <Box component="div" data-aos="fade-up" className={classes.timeLineItem}>
                           <Typography variant="h5" align="center" className={classes.subheading}>
                            Be a featured developer  
                           </Typography>
                           <Typography variant ="body1" align="center" style={{color:"tomato"}}>
                           Entrepreneur
                           </Typography>
                           <Typography variant="subtitle1" align="center" style={{color:"tan"}}>
                           To have acquired the necessary experience to be a great leader
                           </Typography>
                           <Typography variant="subtitle1" align="center" style={{color:"tan"}}>
                           B    e an entrepreneur with big projects
                           </Typography>
                       </Box>
                       <Typography variant="h2" data-aos="fade-up" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                           20..
                       </Typography>
                       <Box component="div" data-aos="fade-up" className={classes.timeLineItem}>
                           <Typography variant="h5" align="center" className={classes.subheading}>
                           Keep doing what i like
                           </Typography>
                           <Typography variant ="body1" align="center" style={{color:"tomato"}}>
                           Lead projects with great impact on social aid
                           </Typography>
                           <Typography variant="subtitle1" align="center" style={{color:"tan"}}>
                                    Dig deeper into IT and dig deeper into the development of your innovations
                           </Typography>
                       </Box>
                       
                   </Box>
                 </Box>
                :

                <Box component="header" >
          <Particles canvasClassName={classes.particles}
                    params={{
                        particles:{
                         number:{
                            value:55,
                                }
                             }
                        }}
            />
              <Box component="div" className={classes.title}>
                         <Typography data-aos="fade-up" variant="h4" align="center" className={classes.letter}>
                         objetivos
                         <Divider style={{backgroundColor:"tomato"}}/>
                         </Typography>
                     </Box>
            <Box component="div" data-aos="fade-up" className={classes.timeLine}>
                <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                    2021/2023
                </Typography>
                <Box component="div" data-aos="fade-up" className={classes.timeLineItem}>
                    <Typography variant="h5" align="center" className={classes.subheading}>
                    Insertarme en el mercado laboral

                    </Typography>
                    <Typography variant ="body1" align="center" style={{color:"tomato"}}>
                        Aprender nuevas tecnologias
                    </Typography>
                    <Typography variant="subtitle1" align="center" style={{color:"tan"}}>
                        Para adiquirir experiencia y seguir perfeccionandome 
                    </Typography>
                </Box>
                <Typography variant="h2" data-aos="fade-up" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                    2023/2025
                </Typography>
                <Box component="div" data-aos="fade-up" className={classes.timeLineItem}>
                    <Typography variant="h5" align="center" className={classes.subheading}>
                        Ser un desarrollador destacado
                    </Typography>
                    <Typography variant ="body1" align="center" style={{color:"tomato"}}>
                        Emprendedor
                    </Typography>
                    <Typography variant="subtitle1" align="center" style={{color:"tan"}}>
                    Poder haber adquirido la experiencia necesaria para  ser un buen líder
                    </Typography>
                    <Typography variant="subtitle1" align="center" style={{color:"tan"}}>
                    Ser un emprendedor con grandes proyectos propios 
                    </Typography>
                </Box>
                <Typography variant="h2" data-aos="fade-up" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                    20..
                </Typography>
                <Box component="div" data-aos="fade-up" className={classes.timeLineItem}>
                    <Typography variant="h5" align="center" className={classes.subheading}>
                        Seguir haciendo lo que me gusta
                    </Typography>
                    <Typography variant ="body1" align="center" style={{color:"tomato"}}>
                       Liderar proyectos con gran impacto en la ayuda social
                    </Typography>
                    <Typography variant="subtitle1" align="center" style={{color:"tan"}}>
                        Profundizar en IT y profundizar más en el desarrollo de sus innovaciones 
                    </Typography>
                </Box>
                
            </Box>
          </Box>
            }
          
        </div>
    )
}
