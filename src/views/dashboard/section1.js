import React from "react"
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import TabPanel from "../baseComponent/tabPanel"
import ShowIndex from "../baseComponent/showIndex"
import QrCode from "../../asset/image/dashboard/qr-code.png"
import Swap from "./exchange-cards/swap"
import Buy from "./exchange-cards/buy"
import Sell from "./exchange-cards/sell"

export default function SectionOne() {

    const [value, setValue] = React.useState(0)
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

  return (
        <Box className="dashboard-section1 pb-5">
            <Box className="d-flex justify-content-between m-auto main-width">
                <Card className="exchange-card">
                    <CardContent>
                        <AppBar position="static" className="bg-transparent box-shadow-none exchange-card-appbar">
                            <Tabs value={value} onChange={handleChange}>
                                <Tab className="card-item" label="BUY" {...ShowIndex(0)} />
                                <Tab className="card-item" label="SWAP" {...ShowIndex(1)} />
                                <Tab className="card-item" label="SELL" {...ShowIndex(2)} />
                                <Tab className="card-item" label="SAVE & EARN" {...ShowIndex(3)} />
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
                        <p className="color-white font-weight-bold m-0 fs-3 mb-1">The World's Best Multi-Crypto Wallet You Can Depend On.</p>
                        <p className="color-white fs-1 m-0">• Buy Cryptocurrencies at lowest cost</p>
                        <p className="color-white fs-1 m-0">• Get Free Crypto when you create an active wallet</p>
                        <p className="color-white fs-1 m-0">• Store 60 cryptocurrencies in a military grade secured wallet</p>
                        <p className="color-white fs-1 m-0">• Earn 20% APR interest on your crypto savings</p>
                        <p className="color-white fs-1 m-0">• Instant exchange trading and swapping within your wallet</p>
                        <p className="color-white fs-1 m-0">• Only you can access your wallet with your private keys</p>
                        <p className="color-white fs-1 m-0">• Excellent customer support</p>
                    </Box>
                    <Box className="pt-1 d-flex">
                        <img src={"https://www.f-cdn.com/assets/main/en/assets/footer/app-store.svg"} alt="" className="crusor-pointer align-items-center"></img>
                        <img src={"https://www.f-cdn.com/assets/main/en/assets/footer/google-play.svg"} alt="" className="ml-1 crusor-pointer align-items-center"></img>
                        <img src={QrCode} alt="" className="w-5 ml-1 crusor-pointer align-items-center"></img>
                    </Box>
                </Box>
            </Box>
      </Box>
  )
}