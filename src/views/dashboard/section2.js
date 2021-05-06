import React from "react"
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import HomeCard from "../../asset/image/dashboard/home_cards.png"
import HomeDex from "../../asset/image/dashboard/home_dex.png"
import HomeSecurity from "../../asset/image/dashboard/home_security.png"
import HomePreview from "../../asset/image/dashboard/dapp_preview.png"
import FooterAndroid from "../../asset/image/footer-android.png"
import FooterIos from "../../asset/image/footer-ios.png"
import QrCode from "../../asset/image/dashboard/qr-code.png"

export default function SectionTwo() {
    return (
        <React.Fragment>
            <Box className="main-width m-auto dash-section-content">
                <Box className="text-align-center">
                    <h1 className="fs-3">You Deserve The Best Service. Period !</h1>
                </Box>
                <Box className="d-flex justify-content-center p-2 align-items-center">
                    <Box className="m-1">
                        <h1>Buy Crypto With A Card At Lowest Cost</h1>
                        <p className="dashboard-instruction">Buy cryptocurrencies with a card at lowest cost within minutes. It's fast, easy and secure</p>
                        <Button className="dashboard-download-btn" variant="contained"> Create your wallet </Button>
                    </Box>
                    <Box className="m-1 dashboard-category">
                        <img src={HomeCard} alt=""></img>
                    </Box>
                </Box>
                <Box className="d-flex justify-content-center p-2 align-items-center">
                    <Box className="m-1 dashboard-category">
                        <img src={HomeCard} alt=""></img>
                    </Box>
                    <Box className="m-1">
                        <h1>Save & Earn 20% Interest</h1>
                        <p className="dashboard-instruction">Save cryptocurrencies in your wallet and earn 20% interest per annum</p>
                        <Button className="dashboard-download-btn" variant="contained"> Create your wallet </Button>
                    </Box>
                </Box>
                <Box className="d-flex justify-content-center p-2 align-items-center">
                    <Box className="m-1">
                        <h1>Get Free Crypto</h1>
                        <p className="dashboard-instruction">It's real ! Create an active wallet and get rewarded with a cryptocurrency</p>
                        <Button className="dashboard-download-btn" variant="contained"> Create your wallet </Button>
                    </Box>
                    <Box className="m-1 dashboard-category">
                        <img src={HomeDex} alt=""></img>
                    </Box>
                </Box>
                <Box className="d-flex justify-content-center p-2 align-items-center">
                    <Box className="m-1 dashboard-category">
                        <img src={HomeSecurity} alt=""></img>
                    </Box>
                    <Box className="m-1">
                        <h1>Secure and Anonymous</h1>
                        <p className="dashboard-instruction">You are in control of your private keys.Nobody sees them, not even us. We don't collect or store your personal information</p>
                        <Button className="dashboard-download-btn" variant="contained"> Create your wallet </Button>
                    </Box>
                </Box>
                <Box className="d-flex justify-content-center p-2 align-items-center">
                    <Box className="m-1">
                        <h1>Instant Exchange</h1>
                        <p className="dashboard-instruction">Instantly trade and swap cryptos within your wallet with ease</p>
                        <Button className="dashboard-download-btn" variant="contained"> Create your wallet </Button>
                    </Box>
                    <Box className="m-1 dashboard-category">
                        <img src={HomePreview} alt=""></img>
                    </Box>
                </Box>
            </Box>
            <Box className="dash-download-app p-2">
                <Box className="d-flex justify-content-center">
                    <Box>
                        <h3 className="ml-2">Download Dependex app now!</h3>
                        <p className="ml-2">The multi-crypto wallet you can depend on.</p>
                    </Box>
                    <Box className="d-flex justify-content-between align-items-center">
                        <img src={FooterAndroid} alt="" className="w-10"></img>
                        <img src={FooterIos} alt="" className="w-10"></img>
                        <img src={QrCode} alt="" className="m-1 w-5"></img>
                    </Box>
                </Box>
            </Box>
        </React.Fragment>
    )
}