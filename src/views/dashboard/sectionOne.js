import React from "react"
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Background from "../../asset/image/background/hero-gradient.png"

const useStyles = makeStyles((theme) => ({
  container: {
    background: '#040d25',
    paddingTop: "80px"
  },
  navContainer: {
    background: `url(${Background})`, 
    backgroundSize: '100% 100%'
  },
  topSection: {
    maxWidth: "85vw",
    margin: "auto",
    display: "flex",
    justifyContent: "space-between",
    paddingTop: theme.spacing(10)
  },
  appbar: {
    backgroundColor: "transparent",
    boxShadow: "none",
    color: "black",
    "& > div > div > span": {
        background: "#1656b9"
    },
  },
  middleMargin: {
    marginTop: theme.spacing(4)
  },
  rateButton: {
    boxShadow: "none",
    color: "black",
    "&:hover": {
      boxShadow: "none",
    }
  },
  focusButton: {
    boxShadow: "none",
    border: "2px solid #1656b9",
    color: "#1656b9",
    "&:hover": {
      boxShadow: "none",
    }
  },
  inputBorder: {
    "& > div:before": {
      border: "none !important"
    }
  },
  formControl: {
    width: "30%",
    // marginTop: theme.spacing(2)
  },
  root: {
    padding: '1rem',
    marginBottom: "3rem",
  },
  pt1: {
    paddingTop: "1rem"
  },
  ml1: {
    marginLeft: '1rem'
  },
  pl5: {
    paddingLeft: '5rem'
  },
  fLetter: {
    color: 'white', 
    fontWeight: 'bold', 
    fontSize: '2rem'
  },
  sLetter: {
    color: 'white', 
    fontWeight: 'bold', 
    fontSize: '1rem'
  },
  exchangeBtn: {
    background: "rgb(12, 108, 242)", 
    width: '100%', 
    padding: "1rem", 
    color: 'white'
  }
}));

function a11yProps(index) {
  return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function SectionOne() {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);
  const [rateMode, setRateMode] = React.useState(0);

  const handleChange = (event, newValue) => {
      setValue(newValue);
  };

  return (
    <Box className={classes.container}>
      <Box className={classes.navContainer}>
        <Box className={classes.topSection}>
          <Box>
            <Card className={classes.root}>
              <CardContent>
                <AppBar position="static" className={classes.appbar}>
                  <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Exchange" {...a11yProps(0)} />
                    <Tab label="Buy" {...a11yProps(1)} />
                    <Tab label="Sell" {...a11yProps(2)} />
                  </Tabs>
                </AppBar>
                <Box className={classes.middleMargin}>
                  <Button className={rateMode === 0 ? classes.focusButton: classes.rateButton} onClick={()=>setRateMode(0)} variant="contained"> Floating Rate </Button>
                  <Button className={rateMode === 1 ? classes.focusButton: classes.rateButton} onClick={()=>setRateMode(1)} variant="contained"> Fixed Rate </Button>
                </Box>
                <Box>
                  <Box style ={{width: "100%", alignItems: "center"}}>
                    <TextField
                      style = {{width: "70%"}}
                      id="filled-full-width"
                      label="You send"
                      placeholder="0"
                      fullWidth
                      margin="normal"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="filled"
                      type="number"
                      className={classes.inputBorder}
                    />
                    {/* <FormControl variant="filled" className={classes.formControl}>
                      <Button variant="contained">
                        <p>asdf</p>
                      </Button>
                    </FormControl> */}
                  </Box>
                  <Box style ={{width: "100%", alignItems: "center"}}>
                    <TextField
                      style = {{width: "70%"}}
                      id="filled-full-width"
                      label="You send"
                      placeholder="0"
                      fullWidth
                      margin="normal"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="filled"
                      type="number"
                      className={classes.inputBorder}
                    />
                    {/* <FormControl variant="filled" className={classes.formControl}>
                      <Button variant="contained">
                        <p>asdf</p>
                      </Button>
                    </FormControl> */}
                  </Box>
                </Box>
              </CardContent>
              <CardActions>
                <Button variant="contained" className={classes.exchangeBtn}>
                  Exchange now
                </Button>
              </CardActions>
            </Card>
          </Box>
          <Box className={classes.pl5}>
            <Box>
              <p className={classes.fLetter}>The World's Most Popular Way to Buy, Hold, and Use Crypto</p>
              <p className={classes.sLetter}>Fast and secure way to exchange and purchase 150+ cryptocurrencies. 24/7 live-chat support.</p>
              <p className={classes.sLetter}>Trusted by 71M Wallets - with Over $620 Billion in Transactions - Since 2013</p>
            </Box>
            <Box className={classes.pt1}>
                <img src={"https://www.f-cdn.com/assets/main/en/assets/footer/app-store.svg"} alt=""></img>
                <img src={"https://www.f-cdn.com/assets/main/en/assets/footer/google-play.svg"} alt="" className={classes.ml1}></img>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}