import React, { useEffect } from 'react'
import {
    Typography,
    Card,
    CardActionArea,
    Box,
    Grid,
    CardActions,
    CardMedia,
    CardContent,
    Button,
    makeStyles,
    Divider
} from '@material-ui/core'
import { Navbar } from './Navbar'
import project from "./assets/javascript.jpg"
import ml from "./assets/ml.png"
import gh from "./assets/gh.png"
import ed from "./assets/ed.png"
import ECOMMERCE from "./assets/ec.png"
import Particles from "react-particles-js"
import Aos from "aos";
import "aos/dist/aos.css"
const useStyles = makeStyles(theme => ({

    mainContainer: {
        height: "%100",
        position: "relative"
    },
    title: {
        display: "flex",
        justifyContent: "center",
        color: "tomato",
        paddingTop: "6rem",
        textTransform: "uppercase"
    },
    letter: {
        fontFamily: "Georgia, 'Times New Roman', Times, serif"
    },
    cardContainer: {
        maxWidth: 345,
        margin: "5rem auto",
    },
    contentCard: {
        backgroundColor: "#333"
    },
    particles: {
        position: "absolute",
        opacity: 1,
    }
}))

export const Portfolio = ({ idioma }) => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    const classes = useStyles()

    return (

        <Box component="div" id="portfolio" className={classes.mainContainer}>
            <Particles canvasClassName={classes.particles}
                params={{
                    particles: {
                        number: {
                            value: 55,
                        }
                    }
                }}
            />
            <Box component="div" className={classes.title}>
                {
                    idioma ?
                        <Typography data-aos="fade-up" variant="h4" align="center" className={classes.letter}>
                            PORTFOLIO
                    <Divider style={{ backgroundColor: "tomato" }} />
                        </Typography>
                        :
                        <Typography data-aos="fade-up" variant="h4" align="center" className={classes.letter}>
                            PORTAFOLIO
                    <Divider style={{ backgroundColor: "tomato" }} />
                        </Typography>
                }

            </Box>

            {
                idioma
                    ?
                    <Grid container justify="center" align="center" >

                        <Grid item xs={12} sm={6} md={6} >
                            <Card data-aos="fade-up" className={classes.cardContainer}>
                                <CardActionArea>
                                    <CardMedia component="img" alt="project 1" height="170" image={ml} />
                                    <CardContent className={classes.contentCard}>
                                        <Typography gutterBottom variant="h5" style={{ color: "tomato" }}>
                                            Mercado Libre
                                        </Typography>
                                        <Typography variant="body1" color="textSecondary" component="p" style={{ color: "tan" }}>
                                            Project made with NodeJs
                                            Responsive Web made in NodeJs in contrast to Mercado Libre.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <Divider style={{ backgroundColor: "tan" }} />
                                <CardActions className={classes.contentCard}>
                                    <Button size="small" style={{ color: "tomato" }} href="https://mercadoliebre2.herokuapp.com/">
                                        See
                                    </Button>
                                    <Button size="small" style={{ color: "tomato" }} href="https://github.com/NelsonBarrios/MercadoLiebre.v2.0">
                                        GitHub
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={6} md={6} >
                            <Card data-aos="fade-up" className={classes.cardContainer}>
                                <CardActionArea>
                                    <CardMedia component="img" alt="project 1" height="165" image={ECOMMERCE} />
                                    <CardContent className={classes.contentCard}>
                                        <Typography gutterBottom variant="h5" style={{ color: "tomato" }}>
                                            Emilia Cole
                                        </Typography>
                                        <Typography variant="body1" color="textSecondary" component="p" style={{ color: "tan" }}>
                                            Musical Portal made in the Digital House bootcamp, is made with the OOP paradigm and agile methodologies such as SCRUM.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <Divider style={{ backgroundColor: "tan" }} />
                                <CardActions className={classes.contentCard}>
                                    <Button size="small" style={{ color: "tomato" }} href="https://nelsonbarrios.github.io/Emilia-Cole/">
                                        See
                                    </Button>
                                    <Button size="small" style={{ color: "tomato" }} href="https://github.com/nelsonbarrios/Emilia-Cole/">
                                        GitHub
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={6} md={6}>
                            <Card data-aos="fade-down" className={classes.cardContainer}>
                                <CardActionArea>
                                    <CardMedia component="img" alt="project 1" height="165" image={gh} />
                                    <CardContent className={classes.contentCard}>
                                        <Typography gutterBottom variant="h5" style={{ color: "tomato" }}>
                                            Hangedman Game
                                        </Typography>
                                        <Typography variant="body1" style={{ color: "tan" }} component="p">
                                            Project made with HTML5 Canvas.
                                            It consists of an Anciant Game "Hangedman Game" with Game Loading functionality.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <Divider style={{ backgroundColor: "tan" }} />
                                <CardActions className={classes.contentCard}>
                                    <Button size="small" style={{ color: "tomato" }} href="https://nelsonbarrios.github.io/Game-Hanged-/">
                                        See
                                    </Button>
                                    <Button size="small" style={{ color: "tomato" }} href="https://github.com/NelsonBarrios/Game-Hanged-/">
                                        GitHub
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={6} md={6}>
                            <Card data-aos="fade-down" className={classes.cardContainer}>
                                <CardActionArea>
                                    <CardMedia component="img" alt="project 1" height="165" image={ed} />
                                    <CardContent className={classes.contentCard}>
                                        <Typography gutterBottom variant="h5" style={{ color: "tomato" }}>
                                            Automotive agent
                                        </Typography>
                                        <Typography variant="body1" style={{ color: "tan" }} component="p">
                                            Project made with React.
                                            It is used to see all the profile information of an automotive agent.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <Divider style={{ backgroundColor: "tan" }} />
                                <CardActions className={classes.contentCard}>
                                    <Button size="small" style={{ color: "tomato" }} href="https://www.emmanueldelgado.netlify.app">
                                        See
                                    </Button>
                                    <Button size="small" style={{ color: "tomato" }} href="https://github.com/NelsonBarrios/Delgado-Mandatario">
                                        GitHub
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>

                    </Grid>
                    :

                    <Grid container justify="center" align="center" >

                        <Grid item xs={12} sm={6} md={6} >
                            <Card data-aos="fade-up" className={classes.cardContainer}>
                                <CardActionArea>
                                    <CardMedia component="img" alt="project 1" height="170" image={ml} />
                                    <CardContent className={classes.contentCard}>
                                        <Typography gutterBottom variant="h5" style={{ color: "tomato" }}>
                                            Versión sitio de Mercado Libre
                                        </Typography>
                                        <Typography variant="body1" component="p" style={{ color: "tan" }}>
                                            Proyecto realizado con NodeJs.
                                            Web Responsive realizado en NodeJs en contraste de Mercado Libre. 
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <Divider style={{ backgroundColor: "tan" }} />
                                <CardActions className={classes.contentCard}>
                                    <Button size="small" style={{ color: "tomato" }} href="https://mercadoliebre2.herokuapp.com/">
                                        Ver
                                    </Button>
                                    <Button size="small" style={{ color: "tomato" }} href="https://github.com/NelsonBarrios/MercadoLiebre.v2.0">
                                        GitHub
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={6} md={6} >
                            <Card data-aos="fade-up" className={classes.cardContainer}>
                                <CardActionArea>
                                    <CardMedia component="img" alt="project 1" height="165" image={ECOMMERCE} />
                                    <CardContent className={classes.contentCard}>
                                        <Typography gutterBottom variant="h5" style={{ color: "tomato" }}>
                                            Emilia Cole
                                        </Typography>
                                        <Typography variant="body1" color="textSecondary" component="p" style={{ color: "tan" }}>
                                            Portal Musical realizado en el bootcamp de Digital House, esta realizado con el paradigma POO y metodologias agiles como SCRUM.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <Divider style={{ backgroundColor: "tan" }} />
                                <CardActions className={classes.contentCard}>
                                    <Button size="small" style={{ color: "tomato" }} href="https://nelsonbarrios.github.io/Emilia-Cole/" >
                                        Ver
                                    </Button>
                                    <Button size="small" style={{ color: "tomato" }} href="https://github.com//nelsonbarrios/Emilia-Cole/">
                                        GitHub
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={6} md={6} >
                            <Card data-aos="fade-up" className={classes.cardContainer}>
                                <CardActionArea>
                                    <CardMedia component="img" alt="project 1" height="175" image={gh} />
                                    <CardContent className={classes.contentCard}>
                                        <Typography gutterBottom variant="h5" style={{ color: "tomato" }}>
                                            Juego del Ahorcado
                                        </Typography>
                                        <Typography variant="body1" color="textSecondary" component="p" style={{ color: "tan" }}>
                                            Proyecto realizado con HTML5 Canvas.
                                            Consiste en un Anciant Game "Juego del Ahorcado" con funcionalidad Game Loading.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <Divider style={{ backgroundColor: "tan" }} />
                                <CardActions className={classes.contentCard}>
                                    <Button size="small" style={{ color: "tomato" }} href="https://nelsonbarrios.github.io/Game-Hanged-/">
                                        Ver
                                    </Button>
                                    <Button size="small" style={{ color: "tomato" }} href="https://github.com/NelsonBarrios/Game-Hanged-/">
                                        GitHub
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={6} md={6}>
                            <Card data-aos="fade-down" className={classes.cardContainer}>
                                <CardActionArea>
                                    <CardMedia component="img" alt="project 1" height="165" image={ed} />
                                    <CardContent className={classes.contentCard}>
                                        <Typography gutterBottom variant="h5" style={{ color: "tomato" }} >
                                            App de Mandatario Automotor
                                        </Typography>
                                        <Typography variant="body1" component="p" style={{ color: "tan" }}>
                                            Proyecto realizado con React.
                                            Sirve para ver toda la informacion de perfíl de un mandatario automotor.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <Divider style={{ backgroundColor: "tan" }} />
                                <CardActions className={classes.contentCard}>
                                    <Button size="small" style={{ color: "tomato" }} href="https://www.emmanueldelgado.netlify.app">
                                        Ver
                                    </Button>
                                    <Button size="small" style={{ color: "tomato" }} href="https://github.com/NelsonBarrios/Delgado-Mandatario">
                                        GitHub
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>


                    </Grid>
            }


        </Box>
    )
}
