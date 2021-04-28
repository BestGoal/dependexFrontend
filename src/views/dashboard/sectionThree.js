import React from "react"
import Box from '@material-ui/core/Box';
import Check from "../../asset/image/dashboard/check.svg"

export default function SectionTwo() {
    return (
        <Box className="dashboard-section1-nav dash-sec3">
            <Box className="text-align-center">
                <h1>You Deserve Easy Access to Cryptocurrencies</h1>
                <p>Trust Wallet is for you if you want to</p>
            </Box>
            <Box className="d-flex justify-content-center p-2">
                <Box className="m-1">
                    <Box className="d-flex p-1 dash-sec3-1">
                        <img src={Check} alt=""></img>
                        <h3 className="ml-2">Buy Crypto With a Card</h3>
                    </Box>
                    <Box className="d-flex p-1 dash-sec3-1">
                        <img src={Check} alt=""></img>
                        <h3 className="ml-2">Easily earn interest on the crypto in your wallet</h3>
                    </Box>
                    <Box className="d-flex p-1 dash-sec3-1">
                        <img src={Check} alt=""></img>
                        <h3 className="ml-2">See your collectibles, art & NFTs in one place</h3>
                    </Box>
                </Box>
                <Box className="m-1">
                    <Box className="d-flex p-1 dash-sec3-1">
                        <img src={Check} alt=""></img>
                        <h3 className="ml-2">Exchange your crypto without leaving the app</h3>
                    </Box>
                    <Box className="d-flex p-1 dash-sec3-1">
                        <img src={Check} alt=""></img>
                        <h3 className="ml-2">Track charts and prices within the wallet</h3>
                    </Box>
                    <Box className="d-flex p-1 dash-sec3-1">
                        <img src={Check} alt=""></img>
                        <h3 className="ml-2">Keep your crypto safe from hackers & scammers</h3>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}