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
import Background from "../../asset/image/background/download.jpg"

const useStyles = makeStyles((theme) => ({
  navContainer: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.8)), url(/static/media/download.a4fc3413.jpg)`, 
    // background: `url(${Background})`, 
    backgroundSize: '100% 100%',
    paddingTop: "8rem"
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
      <Box classes={{root: classes.navContainer}} id="dashboard-top-section1-bg">
        <Box className="dashboard-top-section1 d-flex justify-content-between">
          <Box>
            <Card className="mb-3 p-1">
              <CardContent>
                <AppBar position="static" className="dashboard-exchange-card">
                  <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Swap" {...a11yProps(0)} />
                    <Tab label="Buy" {...a11yProps(1)} />
                    <Tab label="Sell" {...a11yProps(2)} />
                    <Tab label="Earn" {...a11yProps(3)} />
                  </Tabs>
                </AppBar>
                <Box className="mt-1">
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
                  </Box>
                </Box>
              </CardContent>
              <CardActions>
                <Button variant="contained" className="dashboard-section1-exchangeBtn">
                  Exchange now
                </Button>
              </CardActions>
            </Card>
          </Box>
          <Box className="pl-5 dashboard-mv-letter-box">
            <Box>
              <p className="dashboard-section1-fletter">The World's Most Popular Way to Buy, Hold, and Use Crypto</p>
              <p className="dashboard-section1-sletter">Fast and secure way to exchange and purchase 150+ cryptocurrencies. 24/7 live-chat support.</p>
              <p className="dashboard-section1-sletter">Trusted by 71M Wallets - with Over $620 Billion in Transactions - Since 2013</p>
            </Box>
            <Box className="pt-1">
                <img src={"https://www.f-cdn.com/assets/main/en/assets/footer/app-store.svg"} alt=""></img>
                <img src={"https://www.f-cdn.com/assets/main/en/assets/footer/google-play.svg"} alt="" className="ml-1"></img>
            </Box>
          </Box>
        </Box>
      </Box>
  )
}