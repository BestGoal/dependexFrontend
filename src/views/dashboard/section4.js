import React from "react"
import Box from '@material-ui/core/Box';
import SocialImage from "../../asset/image/dashboard/social.svg"
import QrCode from "../../asset/image/dashboard/qr-code.png"

export default function SectionFour() {
    return (
        <Box className="dash-sec6">
            <Box className="d-flex justify-content-center">
                <Box>
                    <h3 className="ml-2">Download Dependex app now!</h3>
                    <p className="ml-2">The multi-crypto wallet you can depend on.</p>
                </Box>
                <Box className="d-flex justify-content-between align-items-center">
                    <svg className="m-1" style={{background: `url(${SocialImage}) 0 -50px`}}></svg>
                    <svg className="m-1" style={{background: `url(${SocialImage}) 0 -100px`}}></svg>
                    <img className="m-1" style={{width: "80px"}} alt="" src={QrCode}></img>
                </Box>
            </Box>
        </Box>
    )
}