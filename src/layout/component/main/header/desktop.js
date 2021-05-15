import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Badge from '@material-ui/core/Badge'
import { history } from "../../../../history"
import AccountBalanceWallet from "@material-ui/icons/AccountBalanceWallet"

export default function Header() {

    return (
        <AppBar position="static" className="header-app-bar bg-transparent box-shadow-none">
            <Toolbar className="d-flex justify-content-between">
                <Box className="d-flex align-items-center crusor-pointer" onClick={()=>history.push("/")}>
                    <AccountBalanceWallet style={{ transform: "rotate(180deg)", background: "rgb(14 71 133)", color: "white", width: "30", height: "30" }} />
                    <Typography className="font-weight-bold" variant="h4">
                        Dependex
                    </Typography>
                </Box>
                <Box className="d-flex justify-content-right align-items-center">
                    <Box className="d-flex align-items-center bg-transparent box-shadow-none header-top-list">
                        <Button className="header-btn-item" variant="contained">Exchange</Button>
                        <Button className="header-btn-item" variant="contained">
                            Get Free Crypto
                            <Badge className="header-badge" badgeContent={"New"} color="secondary" />
                        </Button>
                        <Button className="header-btn-item" variant="contained">Earn +20% APR</Button>
                        <Button className="header-btn-item" variant="contained">Affiliate (lang api)</Button>
                    </Box>
                    <Box>
                        <Button className="header-auth-btn" variant="contained" onClick={()=>history.push("/create-wallet")}> Create wallet </Button>
                        <Button className="header-btn-item" variant="contained" onClick={()=>history.push("/login")}> Login </Button>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
