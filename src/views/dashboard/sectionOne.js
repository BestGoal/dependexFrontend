import React from "react"
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TextField from '@material-ui/core/TextField';

function a11yProps(index) {
  return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function SectionOne() {

    const [value, setValue] = React.useState(0);
    const [mode, setMode] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

  return (
        <Box className="dashboard-section1">
            <Box className="dashboard-section1-nav d-flex justify-content-between">
                <Card className="exchange-card">
                    <CardContent>
                        <AppBar position="static" className="bg-transparent box-shadow-none exchange-card-appbar">
                            <Tabs value={value} onChange={handleChange}>
                                <Tab className="card-item" label="BUY" {...a11yProps(0)} />
                                <Tab className="card-item" label="EXCHANGE" {...a11yProps(1)} />
                                <Tab className="card-item" label="SELL" {...a11yProps(2)} />
                                <Tab className="card-item" label="SAVE & EARN" {...a11yProps(3)} />
                            </Tabs>
                        </AppBar>
                        <Box className="d-flex pt-1">
                            <Box className="exchange-card-rate-bar">
                                <Button className={!mode && "select-item"} onClick={() => setMode(!mode)}>Floating Rate</Button>
                                <Button className={mode && "select-item"} onClick={() => setMode(!mode)}>Fixed Rate</Button>
                            </Box>
                        </Box>
                        <Box>
                            <Box className="exchange-card-input-header d-flex justify-content-start align-items-center">
                                <TextField
                                    label="You send"
                                    placeholder="0"
                                    margin="normal"
                                    variant="filled"
                                    type="number"
                                    className="exchange-card-input"
                                />
                                <Button>
                                    <p>BTC</p>
                                    <p>BTC</p>
                                </Button>
                            </Box>
                            <Box>
                                <TextField
                                    label="You get approximately"
                                    placeholder="0"
                                    margin="normal"
                                    variant="filled"
                                    type="number"
                                    className="exchange-card-input"
                                />
                            </Box>
                        </Box>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained">
                            Exchange now
                        </Button>
                    </CardActions>
                </Card>
                <Box className="pl-5">
                    <Box>
                        <p className="dashboard-section1-fletter">The World's Most Popular Way to Buy, Hold, and Use Crypto</p>
                        <p className="dashboard-section1-sletter">Trusted by 71M Wallets - with Over $620 Billion in Transactions - Since 2013</p>
                    </Box>
                    <Box className="pt-1">
                        <img src={"https://www.f-cdn.com/assets/main/en/assets/footer/app-store.svg"} alt="" className="crusor-pointer"></img>
                        <img src={"https://www.f-cdn.com/assets/main/en/assets/footer/google-play.svg"} alt="" className="ml-1 crusor-pointer"></img>
                    </Box>
                </Box>
            </Box>
      </Box>
  )
}