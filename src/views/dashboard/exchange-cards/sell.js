import React from "react"
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Cards from "../../../asset/image/dashboard/cards.png"
import Mercuryo from "../../../asset/image/dashboard/mercuryo.svg"

export default function SectionOne() {
    return (
        <React.Fragment>
            <Box className="mt-1">
                <Box className="text-align-center">
                    <img src={Cards} alt=""></img>
                    <h2>Sell Crypto via bank card</h2>
                    <p>powered by <img src={Mercuryo} alt=""></img></p>
                </Box>
                <Box className="d-flex justify-content-center mt-2">
                    <Button className="exchange-btn" variant="contained">
                        Sell Crypto
                    </Button>
                </Box>
            </Box>
        </React.Fragment>
    )
}