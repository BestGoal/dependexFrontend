import React from "react"
import Box from '@material-ui/core/Box';
import SocialImage from "../../asset/image/dashboard/social.svg"

export default function SectionTwo() {
    return (
        <Box className="dash-sec6">
            <Box className="d-flex justify-content-center">
                <Box>
                    <h3 className="ml-2">Get the Trust Wallet app now!</h3>
                    <p className="ml-2">The most trusted & secure crypto wallet</p>
                </Box>
                <Box className="d-flex justify-content-between align-items-center">
                    <svg className="m-1" style={{background: `url(${SocialImage}) 0 -50px`}}></svg>
                    <svg className="m-1" style={{background: `url(${SocialImage}) 0 -100px`}}></svg>
                    <svg className="m-1" style={{background: `url(${SocialImage}) 0 0`}}></svg>
                </Box>
            </Box>
        </Box>
    )
}