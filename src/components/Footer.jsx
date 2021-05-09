import React from 'react'
import { Box,makeStyles,BottomNavigation,BottomNavigationAction} from '@material-ui/core'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles({
    root:{
        "& .MuiBottomNavigationAction-root":{
            minWidth:0,
            maxWidth:"250px",
        },
        "& .MuiSvgIcon-root":{
            fill:"tan",
            "&:hover":{
                fill:"tomato",
                fontSize:"2rem"
            }
        }
    }
})

export const Footer = () => {
    const classes = useStyles()
    return (
        <BottomNavigation component="a" width="auto" style={{background:"#222"}}>
            <BottomNavigationAction 
            href="https://www.linkedin.com/in/nelsonbarrios/"
            className={classes.root}
            icon={<LinkedInIcon/>}>
            style={{padding:0}}
            </BottomNavigationAction>
            <BottomNavigationAction 
            href="https://github.com/nelsonbarrios"
            className={classes.root}
            icon={<GitHubIcon/>}>
            style={{padding:0}}
            </BottomNavigationAction>
        </BottomNavigation>
    )
}
