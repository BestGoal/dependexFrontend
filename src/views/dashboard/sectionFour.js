import React from "react"
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import HomeCard from "../../asset/image/dashboard/home_cards.png"
import HomeDex from "../../asset/image/dashboard/home_dex.png"
import HomeSecurity from "../../asset/image/dashboard/home_security.png"
import HomePreview from "../../asset/image/dashboard/dapp_preview.png"

export default function SectionTwo() {
    return (
        <Box className="dashboard-section1-nav dash-sec4">
            <Box className="d-flex justify-content-center p-2 align-items-center">
                <Box className="m-1">
                    <h1>Buy Crypto With A Card At Lowest Cost</h1>
                    <p>Buy cryptocurrencies with a card at lowest cost within minutes. It's fast, easy and secure</p>
                    <Button className="dashboard-download-btn" variant="contained"> Create your wallet </Button>
                </Box>
                <Box className="m-1 dash-sec4-img">
                    <img src={HomeCard} alt=""></img>
                </Box>
            </Box>
            <Box className="d-flex justify-content-center p-2 align-items-center">
                <Box className="m-1 dash-sec4-img">
                    <img src={HomeCard} alt=""></img>
                </Box>
                <Box className="m-1">
                    <h1>Save & Earn 20% Interest</h1>
                    <p>Save cryptocurrencies in your wallet and earn 20% interest per annum</p>
                    <Button className="dashboard-download-btn" variant="contained"> Create your wallet </Button>
                </Box>
            </Box>
            <Box className="d-flex justify-content-center p-2 align-items-center">
                <Box className="m-1">
                    <h1>Get Free Crypto</h1>
                    <p>It's real ! Create an active wallet and get rewarded with a cryptocurrency</p>
                    <Button className="dashboard-download-btn" variant="contained"> Create your wallet </Button>
                </Box>
                <Box className="m-1 dash-sec4-img">
                    <img src={HomeDex} alt=""></img>
                </Box>
            </Box>
            <Box className="d-flex justify-content-center p-2 align-items-center">
                <Box className="m-1 dash-sec4-img">
                    <img src={HomeSecurity} alt=""></img>
                </Box>
                <Box className="m-1">
                    <h1>Secure and Anonymous</h1>
                    <p>You are in control of your private keys.Nobody sees them, not even us. We don't collect or store your personal information</p>
                    <Button className="dashboard-download-btn" variant="contained"> Create your wallet </Button>
                </Box>
            </Box>
            <Box className="d-flex justify-content-center p-2 align-items-center">
                <Box className="m-1">
                    <h1>Instant Exchange</h1>
                    <p>Instantly trade and swap cryptos within your wallet with ease</p>
                    <Button className="dashboard-download-btn" variant="contained"> Create your wallet </Button>
                </Box>
                <Box className="m-1 dash-sec4-img">
                    <img src={HomePreview} alt=""></img>
                </Box>
            </Box>
        </Box>
    )
}