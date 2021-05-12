import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import { ShoppingCart, AttachMoney, SwapHorizontalCircle, SwapCalls, Restore, PowerSettingsNewTwoTone } from "@material-ui/icons"
import { history } from "../../../../history"
import { FaUpload, FaDownload, FaWallet } from "react-icons/fa";
import AccountBalanceWallet from "@material-ui/icons/AccountBalanceWallet"
import IconButton from '@material-ui/core/IconButton'

export default function Header() {

    return (
        <AppBar position="static" className="header-app-bar-home bg-transparent box-shadow-none">
            <Toolbar className="d-flex justify-content-between">
                <Box className="d-flex align-items-center">
                    <Box className="d-flex align-items-center crusor-pointer" onClick={() => history.push("/")}>
                        <AccountBalanceWallet style={{ transform: "rotate(180deg)", background: "rgb(14 71 133)", color: "white", width: "30", height: "30" }} />
                        <Typography className="font-weight-bold" variant="h4" >
                            Dependex
                        </Typography>
                    </Box>
                    <Box className="d-flex justify-content-start align-items-center ml-5">
                        <p className="m-0 header-item pl-1 pr-1">
                            <Button className="d-flex align-items-center ml-1 bg-transparent box-shadow-none text-capitalize" variant="contained">
                                <ShoppingCart className="color-white" />
                                <p className="color-white fs-1 m-0 font-weight-bold">Buy</p>
                            </Button>
                        </p>
                        <p className="m-0 header-item pl-1 pr-1">
                            <Button className="d-flex align-items-center ml-1 bg-transparent box-shadow-none text-capitalize" variant="contained">
                                <AttachMoney className="color-white" />
                                <p className="color-white fs-1 m-0 font-weight-bold">Sell</p>
                            </Button>
                        </p>
                        <p className="m-0 header-item pl-1 pr-1">
                            <Button className="d-flex align-items-center ml-1 bg-transparent box-shadow-none text-capitalize" variant="contained">
                                <SwapHorizontalCircle className="color-white" />
                                <p className="color-white fs-1 m-0 font-weight-bold">Exchange</p>
                            </Button>
                        </p>
                        <p className="m-0 header-item pl-1 pr-1">
                            <Button className="d-flex align-items-center ml-1 bg-transparent box-shadow-none text-capitalize" variant="contained">
                                <SwapCalls className="color-white" />
                                <p className="color-white fs-1 m-0 font-weight-bold">Swap</p>
                            </Button>
                        </p>
                        <p className="m-0 header-item pl-1 pr-1">
                            <Button className="d-flex align-items-center ml-1 bg-transparent box-shadow-none text-capitalize" variant="contained">
                                <FaUpload className="color-white" />
                                <p className="color-white fs-1 m-0 font-weight-bold">Send</p>
                            </Button>
                        </p>
                        <p className="m-0 header-item pl-1 pr-1">
                            <Button className="d-flex align-items-center ml-1 bg-transparent box-shadow-none text-capitalize" variant="contained">
                                <FaDownload className="color-white" />
                                <p className="color-white fs-1 m-0 font-weight-bold">Receive</p>
                            </Button>
                        </p>
                        <p className="m-0 pl-1 pr-1">
                            <Button className="d-flex align-items-center ml-1 bg-transparent box-shadow-none text-capitalize" variant="contained">
                                <FaWallet className="color-white" />
                                <p className="color-white fs-1 m-0 font-weight-bold">Save & Earn</p>
                            </Button>
                        </p>
                    </Box>
                </Box>
                <Box className="d-flex justify-content-right align-items-center">
                    <p>
                        <IconButton>
                            <Restore className="color-white" />
                        </IconButton>
                    </p>
                    <p className="ml-2 mr-2">
                        <IconButton>
                            <PowerSettingsNewTwoTone className="color-white" />
                        </IconButton>
                    </p>
                </Box>
            </Toolbar>
        </AppBar>
    )
}