import React from 'react'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import FooterAndroid from "../../../../asset/image/footer-android.png"
import FooterIos from "../../../../asset/image/footer-ios.png"
import QrCode from "../../../../asset/image/dashboard/qr-code.png"

const useStyles = makeStyles((theme) => ({
    firstTop: {
        maxWidth: "1400px",
        margin: "auto"
    }
}))

export default function Header() {
    const classes = useStyles()
    return (
        <Box className={classes.firstTop}>
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
        </Box>
    )
}