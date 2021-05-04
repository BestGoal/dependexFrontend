import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Clear from "@material-ui/icons/Clear"
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import WalletIcon from "../../../../asset/image/section/wallet-icon.png"
import ExchangeIcon from "../../../../asset/image/section/exchange-icon.png"
import ExplorerIcon from "../../../../asset/image/section/explorer-icon.png"

const useStyles = makeStyles((theme) => ({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    search: {
        padding: "0.3rem",
        display: "flex",
        alignItems: "center",
        border: "1px solid",
        marginTop: "1rem",
        width: "100%",
        borderRadius: theme.shape.borderRadius
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
        "&>input": {
            width: "100%"
        }
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width')
    },
    login: {
        backgroundColor: "rgb(53, 63, 82)",
        color: "white",
        width: "50%",
        padding: "0.8rem"
    },
    register: {
        backgroundColor: "rgb(12, 108, 242)",
        marginLeft: theme.spacing(1),
        color: "white",
        width: "50%",
        padding: "0.8rem"
    }
}));

export default function Header() {

    const classes = useStyles();
    const [mode, setMode] = React.useState(false)

    return (
        <AppBar position="static" className="header-app-bar bg-transparent box-shadow-none">
            <Toolbar className="d-flex justify-content-between">
                <Box className="d-flex align-items-center">
                    <svg width={60} height={60}>
                        <path d="m4.10706 25.6934-2.18999 2.19c-.60615.5823-1.088401 1.281-1.417833 2.0543-.329431.7733-.499237 1.6051-.499237 2.4457 0 .8405.169806 1.6724.499237 2.4456.329432.7733.811683 1.4721 1.417833 2.0544l17.64293 17.817c.4182.4278.9049.7827 1.44 1.05v-21.597z" fill="#3d89f5"></path><path d="m43.8929 25.6934 2.19 2.19c.6062.5823 1.0884 1.281 1.4179 2.0543.3294.7733.4992 1.6051.4992 2.4457 0 .8405-.1698 1.6724-.4992 2.4456-.3295.7733-.8117 1.4721-1.4179 2.0544l-17.6429 17.817c-.4182.4278-.9049.7827-1.44 1.05v-21.597z" fill="#1656b9"></path><path d="m39.6569 21.2234-11.04-11.07c-.5845-.60237-1.2839-1.0813-2.0569-1.40834s-1.6038-.49555-2.4431-.49555-1.6702.16851-2.4431.49555c-.773.32704-1.4725.80597-2.0569 1.40834l-11.07002 11.07 15.51002 7.74z" fill="#85b5f8"></path>
                    </svg>
                    <Typography className="font-weight-bold" variant="h5">
                        Dependex.com
                    </Typography>
                </Box>
                <Box>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick ={() => setMode(!mode)}>
                        <MenuIcon />
                    </IconButton>
                </Box>
                {
                    mode && 
                    <Card className="header-card">
                        <CardContent>
                            <Box className="d-flex justify-content-between border-solid-1">
                                <h3> Products </h3>
                                <Clear onClick ={() => setMode(!mode)} />
                            </Box>
                            <Box className="d-flex justify-content-start border-solid-1">
                                <Box className="header-mobile-item-img">
                                    <img src={WalletIcon} alt="" />
                                </Box>
                                <Box className="header-mobile-item-letter">
                                    <h3> Wallet </h3>
                                    <p>Buy & Sell Crypto</p>
                                </Box>
                            </Box>
                            <Box className="d-flex justify-content-start border-solid-1">
                                <Box className="header-mobile-item-img">
                                    <img src={ExchangeIcon} alt="" />
                                </Box>
                                <Box className="header-mobile-item-letter">
                                    <h3> Swap </h3>
                                    <p>Professional Trading</p>
                                </Box>
                            </Box>
                            <Box className="d-flex justify-content-start border-solid-1">
                                <Box className="header-mobile-item-img">
                                    <img src={ExplorerIcon} alt="" />
                                </Box>
                                <Box className="header-mobile-item-letter">
                                    <h3> Explorer </h3>
                                    <p>Live Data, Chart, & Transactions</p>
                                </Box>
                            </Box>
                            <Box className={classes.search}>
                                <Box className={classes.searchIcon}>
                                    <SearchIcon />
                                </Box>
                                <InputBase
                                    placeholder="Search…"
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }}
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </Box>
                        </CardContent>
                        <CardActions>
                            <Button className={classes.login} variant="contained"> Login </Button>
                            <Button className={classes.register} variant="contained" color="primary"> Register </Button>
                        </CardActions>
                    </Card>
                }
            </Toolbar>
        </AppBar>
    );
}
