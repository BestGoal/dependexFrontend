import React from "react"
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Background from "../../asset/image/background/hero-gradient.png"
import HomeBottom from "../../asset/image/section/home-bottom-mobile.png"

const useStyles = makeStyles((theme) => ({
  topSection: {
    position: "relative",
    display: "flex",
    "-webkit-box-pack": "center",
    justifyContent: "center",
    "-webkit-box-align": "center",
    alignItems: "center",
    backgroundColor: "rgb(18, 29, 51)",
    overflow: "hidden",
    minWidth: "100%",
    height: '100%'
  },
  topImage: {
    width: '100%', 
    transform: 'rotate(180deg)', 
    position: 'absolute', 
    top: "0"
  },
  navDiv: {
    display: "flex",
    flexDirection: "column",
    "-webkit-box-pack": "center",
    justifyContent: "center",
    "-webkit-box-align": "center",
    alignItems: "center",
    zIndex: '1',
    "&>p": {
      color: 'white', 
      fontWeight: 'bold', 
      fontSize: "3rem"
    },
    "&>button": {
      background: "rgb(12, 108, 242)", 
      color: "white"
    },
    "&>img": {
      width: "25vw"
    },
  }
}));

export default function SectionTwo() {
  const classes = useStyles();

  return (
    <Box className={classes.topSection}>
      <img src={Background} alt='' className={classes.topImage} />
      <Box className={classes.navDiv}>
        <p>From Zero to Crypto in Minutes.</p>
        <Button variant="contained"><p>Get Started</p></Button>
        <img src={HomeBottom} alt=""></img>
      </Box>
    </Box>
  )
}