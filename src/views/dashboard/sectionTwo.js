import React from "react"
import Box from '@material-ui/core/Box';

export default function SectionTwo() {
    return (
        <Box className="dashboard-section1-nav dash-sec2">
            <Box className="d-flex justify-content-center dash-sec2-1 p-2">
                <Box className="d-flex justify-content-center mr-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" id="card" width="30">
                        <path d="M20 3H4c-1.11 0-1.99.949-1.99 2.131L2 17.921c0 1.182.89 2.13 2 2.13h16c1.11 0 2-.948 2-2.13V5.13C22 3.948 21.11 3 20 3zm0 14.92H4v-6.394h16v6.394zm0-10.657H4V5.13h16v2.132z" fill="#3375BB"></path>
                    </svg>
                    <h3 className="ml-2">Buy Crypto With a Card</h3>
                </Box>
                <Box className="d-flex justify-content-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" id="card" width="30">
                        <path d="M21 10.414H0v-2h18.586l-6-6L14 1l7.707 7.707A1 1 0 0 1 21 10.414zm-18 4h21v2H5.414l6 6L10 23.828l-7.707-7.707A1 1 0 0 1 3 14.414z" fill="#3375BB"></path>
                    </svg>
                    <h3 className="ml-2">Exchange Instantly</h3>
                </Box>
                <Box className="d-flex justify-content-center ml-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" id="card" width="30">
                        <path d="M18 10.726V6c0-3.309-2.691-6-6-6S6 2.691 6 6v4.726A7.957 7.957 0 0 0 4 16c0 4.411 3.589 8 8 8s8-3.589 8-8a7.957 7.957 0 0 0-2-5.274zm-5 7.09V20h-2v-2.184A2.996 2.996 0 0 1 9 15c0-1.654 1.346-3 3-3s3 1.346 3 3a2.995 2.995 0 0 1-2 2.816zm3-8.734a7.94 7.94 0 0 0-8 0V6c0-2.206 1.794-4 4-4s4 1.794 4 4v3.082z" fill="#3375BB"></path>
                    </svg>
                    <h3 className="ml-2">Private & Secure</h3>
                </Box>
            </Box>
        </Box>
    )
}