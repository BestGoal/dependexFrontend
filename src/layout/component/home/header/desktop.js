import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import { ShoppingCart, AttachMoney, SwapHorizontalCircle, SwapCalls, Send, Email, SaveAlt, Settings, Restore, ExitToApp } from "@material-ui/icons"
import { history } from "../../../../history"

export default function Header() {

    return (
        <AppBar position="static" className="header-app-bar-home bg-transparent box-shadow-none">
            <Toolbar className="d-flex justify-content-between">
                <Box className="d-flex align-items-center">
                    <Typography className="font-weight-bold crusor-pointer" variant="h4" onClick={()=>history.push("/")}>
                        Dependex.com
                    </Typography>
                    <Box className="d-flex justify-content-start align-items-center ml-5">
                        <p className="m-0 header-item pl-1 pr-1">
                            <Button className="d-flex align-items-center ml-1 bg-transparent box-shadow-none" variant="contained">
                                <ShoppingCart className="color-white" />
                                <p className="color-white fs-1 m-0 font-weight-bold">Buy</p>
                            </Button>
                        </p>
                        <p className="m-0 header-item pl-1 pr-1">
                            <Button className="d-flex align-items-center ml-1 bg-transparent box-shadow-none" variant="contained">
                                <AttachMoney className="color-white" />
                                <p className="color-white fs-1 m-0 font-weight-bold">Sell</p>
                            </Button>
                        </p>
                        <p className="m-0 header-item pl-1 pr-1">
                            <Button className="d-flex align-items-center ml-1 bg-transparent box-shadow-none" variant="contained">
                                <SwapHorizontalCircle className="color-white" />
                                <p className="color-white fs-1 m-0 font-weight-bold">Exchange</p>
                            </Button>
                        </p>
                        <p className="m-0 header-item pl-1 pr-1">
                            <Button className="d-flex align-items-center ml-1 bg-transparent box-shadow-none" variant="contained">
                                <SwapCalls className="color-white" />
                                <p className="color-white fs-1 m-0 font-weight-bold">Swap</p>
                            </Button>
                        </p>
                        <p className="m-0 header-item pl-1 pr-1">
                            <Button className="d-flex align-items-center ml-1 bg-transparent box-shadow-none" variant="contained">
                                <Send className="color-white" />
                                <p className="color-white fs-1 m-0 font-weight-bold">Send</p>
                            </Button>
                        </p>
                        <p className="m-0 header-item pl-1 pr-1">
                            <Button className="d-flex align-items-center ml-1 bg-transparent box-shadow-none" variant="contained">
                                <Email className="color-white" />
                                <p className="color-white fs-1 m-0 font-weight-bold">Receive</p>
                            </Button>
                        </p>
                        <p className="m-0 pl-1 pr-1">
                            <Button className="d-flex align-items-center ml-1 bg-transparent box-shadow-none" variant="contained">
                                <SaveAlt className="color-white" />
                                <p className="color-white fs-1 m-0 font-weight-bold">Save & Earn</p>
                            </Button>
                        </p>
                    </Box>
                </Box>
                <Box className="d-flex justify-content-right align-items-center">
                    <p className="header-item m-0">
                        <Button className="d-flex align-items-center ml-1 bg-transparent box-shadow-none" variant="contained">
                            <Restore className="color-white" />
                        </Button>
                    </p>
                    <p className="header-item m-0">
                        <Button className="d-flex align-items-center ml-1 bg-transparent box-shadow-none" variant="contained">
                            <Settings className="color-white" />
                        </Button>
                    </p>
                    <p className="m-0">
                        <Button className="d-flex align-items-center ml-1 bg-transparent box-shadow-none" variant="contained">
                            <ExitToApp className="color-white" />
                        </Button>
                    </p>
                </Box>
            </Toolbar>
        </AppBar>
    )
}