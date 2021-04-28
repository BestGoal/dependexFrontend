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
                <Box className="m-1 dash-sec4-img">
                    <img src={HomeCard} alt=""></img>
                </Box>
                <Box className="m-1">
                    <h1>Buy Crypto With a Card</h1>
                    <p>Get your first $50 of Bitcoin, Ethereum, Binance Coin and many other cryptocurrencies.</p>
                    <Button className="header-auth-btn" variant="contained"> Download Now </Button>
                </Box>
            </Box>
            <Box className="d-flex justify-content-center p-2 align-items-center">
                <Box className="m-1">
                    <h1>Exchange Instantly</h1>
                    <p>No forms, no selfies. Trade crypto anytime with ease.</p>
                    <Button className="header-auth-btn" variant="contained"> Download Now </Button>
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
                    <h1>Private & Secure</h1>
                    <p>Only you can access your wallet. We don’t collect any personal data.</p>
                    <Button className="header-auth-btn" variant="contained"> Download Now </Button>
                </Box>
            </Box>
            <Box className="d-flex justify-content-center p-2 align-items-center">
                <Box className="m-1">
                    <h1>Browser for DApps</h1>
                    <p>Use your favourite decentralized apps & find new ones, without leaving your wallet.</p>
                    <Button className="header-auth-btn" variant="contained"> Download Now </Button>
                </Box>
                <Box className="m-1 dash-sec4-img">
                    <img src={HomePreview} alt=""></img>
                </Box>
            </Box>
        </Box>
    )
}