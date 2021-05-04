import React from "react"
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import QrCode from "../../asset/image/dashboard/qr-code.png"

import Swap from "./exchange-cards/swap"
import Buy from "./exchange-cards/buy"
import Sell from "./exchange-cards/sell"

function a11yProps(index) {
  return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
  };
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
              {children}
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

export default function SectionOne() {

    const [value, setValue] = React.useState(0);

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
                                <Tab className="card-item" label="SWAP" {...a11yProps(1)} />
                                <Tab className="card-item" label="SELL" {...a11yProps(2)} />
                                <Tab className="card-item" label="SAVE & EARN" {...a11yProps(3)} />
                            </Tabs>
                        </AppBar>
                        <TabPanel value={value} index={0}>
                            <Buy />
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <Swap />
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <Sell />
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                            Redirect to Login Page
                        </TabPanel>
                    </CardContent>
                </Card>
                <Box className="pl-5">
                    <Box>
                        <p className="dashboard-section1-fletter">The World's Best Multi-Crypto Wallet You Can Depend On.</p>
                        <p className="dashboard-section1-sletter">• Buy Cryptocurrencies at lowest cost</p>
                        <p className="dashboard-section1-sletter">• Get Free Crypto when you create wallet and active account</p>
                        <p className="dashboard-section1-sletter">• Store 60 cryptocurrencies in a military grade secured wallet</p>
                        <p className="dashboard-section1-sletter">• Earn 20% APR interest on your crypto savings</p>
                        <p className="dashboard-section1-sletter">• Instant exchange trading and swapping within your wallet</p>
                        <p className="dashboard-section1-sletter">• Only you can access your wallet with your private keys</p>
                        <p className="dashboard-section1-sletter">• Excellent customer support</p>
                    </Box>
                    <Box className="pt-1 d-flex">
                        <img src={"https://www.f-cdn.com/assets/main/en/assets/footer/app-store.svg"} alt="" className="crusor-pointer align-items-center"></img>
                        <img src={"https://www.f-cdn.com/assets/main/en/assets/footer/google-play.svg"} alt="" className="ml-1 crusor-pointer align-items-center"></img>
                        <img src={QrCode} alt="" className="qr-image ml-1 crusor-pointer align-items-center"></img>
                    </Box>
                </Box>
            </Box>
      </Box>
  )
}