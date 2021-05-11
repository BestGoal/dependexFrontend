import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Clear from "@material-ui/icons/Clear"
import WalletIcon from "../../../../asset/image/section/wallet-icon.png"
import ExchangeIcon from "../../../../asset/image/section/exchange-icon.png"
import ExplorerIcon from "../../../../asset/image/section/explorer-icon.png"
import { history } from "../../../../history"
import AccountBalanceWallet from "@material-ui/icons/AccountBalanceWallet"

export default function Header() {

    const [mode, setMode] = React.useState(false)
    const gotoPage = (url) => {
        setMode(false)
        history.push(url)
    }

    return (
        <AppBar position="static" className="header-app-bar bg-transparent box-shadow-none">
            <Toolbar className="d-flex justify-content-between">
                <Box className="d-flex align-items-center crusor-pointer" onClick={() => history.push("/")}>
                    <AccountBalanceWallet style={{ transform: "rotate(180deg)", background: "rgb(14 71 133)", color: "white", width: "30", height: "30" }} />
                    <Typography className="font-weight-bold" variant="h4">
                        Dependex
                    </Typography>
                </Box>
                <Box>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setMode(!mode)}>
                        <MenuIcon />
                    </IconButton>
                </Box>
                {
                    mode &&
                    <Card className="header-card">
                        <CardContent>
                            <Box className="d-flex justify-content-between border-solid-1">
                                <h3> Products </h3>
                                <Clear onClick={() => setMode(!mode)} />
                            </Box>
                            <Box className="d-flex justify-content-start border-solid-1">
                                <Box className="header-mobile-item-img">
                                    <img src={ExchangeIcon} alt="" />
                                </Box>
                                <Box className="header-mobile-item-letter">
                                    <h3> Exchange </h3>
                                    <p>Buy & Sell Crypto</p>
                                </Box>
                            </Box>
                            <Box className="d-flex justify-content-start border-solid-1">
                                <Box className="header-mobile-item-img">
                                    <img src={WalletIcon} alt="" />
                                </Box>
                                <Box className="header-mobile-item-letter">
                                    <h3> Get Free Crypto </h3>
                                    <p>Professional Trading</p>
                                </Box>
                            </Box>
                            <Box className="d-flex justify-content-start border-solid-1">
                                <Box className="header-mobile-item-img">
                                    <img src={ExplorerIcon} alt="" />
                                </Box>
                                <Box className="header-mobile-item-letter">
                                    <h3> Earn +20% APR </h3>
                                    <p>Live Data, Chart, & Transactions</p>
                                </Box>
                            </Box>
                            <Box className="d-flex justify-content-start border-solid-1">
                                <Box className="header-mobile-item-img">
                                    <img src={ExplorerIcon} alt="" />
                                </Box>
                                <Box className="header-mobile-item-letter">
                                    <h3> Affiliate (lang api) </h3>
                                    <p>Live Data, Chart, & Transactions</p>
                                </Box>
                            </Box>
                        </CardContent>
                        <CardActions className="d-flex justify-content-center">
                            <Button className="mobile-auth-btn theme-full-btn" variant="contained" color="primary" onClick={() => gotoPage("/create-wallet")}> Create Wallet </Button>
                            <Button className="mobile-auth-btn theme-empty-btn" variant="contained" onClick={() => gotoPage("/login")}> Login </Button>
                        </CardActions>
                    </Card>
                }
            </Toolbar>
        </AppBar>
    )
}
