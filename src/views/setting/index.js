import React from "react"
import Grid from '@material-ui/core/Grid'
import Box from "@material-ui/core/Box"
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Email from '@material-ui/icons/Email'
import PhonelinkRing from '@material-ui/icons/PhonelinkRing'
import AccountBalanceWallet from '@material-ui/icons/AccountBalanceWallet'
import Create from '@material-ui/icons/Create'
import Print from '@material-ui/icons/Print'
import Language from '@material-ui/icons/Language'
import PhoneAndroid from '@material-ui/icons/PhoneAndroid'
import Payment from '@material-ui/icons/Payment'
import Apps from '@material-ui/icons/Apps'

export default function Security() {

    const [mode, setMode] = React.useState(0)
    const [mode1, setMode1] = React.useState(0)
    const [mode2, setMode2] = React.useState(0)
    const [mode3, setMode3] = React.useState(0)

    const languages = [
        { label: 'English' },
        { label: 'French' },
        { label: 'German' },
        { label: 'Italian' },
        { label: 'Portuguese' },
        { label: 'Russian' },
        { label: 'Spanish' },
        { label: 'Turkish' }
    ]

    const Currencys = [
        { label: 'USD' },
        { label: 'EUR' },
        { label: 'GBP' },
        { label: 'INR' },
        { label: 'HKD' },
        { label: 'AUD' },
        { label: 'CAD' }
    ]

    const themes = [
        { label: 'Default' },
        { label: 'Theme1' },
        { label: 'Theme2' },
        { label: 'Theme3' },
        { label: 'Theme4' },
        { label: 'Theme5' },
    ]

    return (
        <Box className="security-container">

            <Box className="pb-1">
                <h1 className="sub-header">Setting</h1>
                <Typography>Use the measures below to prevent unauthorized access to your Dependex wallet.</Typography>
            </Box>

            <Grid container className="p-1 security-item">
                <Grid item md={2} className="d-flex align-items-center justify-content-center">
                    <Box className="security-icon d-flex justify-content-center align-items-center">
                        <Language />
                    </Box>
                </Grid>
                <Grid item md={6}>
                    <Typography className="security-letter1">Language</Typography>
                    <Typography>Set your preferred language.</Typography>
                </Grid>
                <Grid item md={4} className="d-flex align-items-center justify-content-center">
                    <Autocomplete
                        id="Language"
                        options={languages}
                        getOptionLabel={(option) => option.label}
                        style={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Language" variant="outlined" />}
                    />
                </Grid>
            </Grid>

            <Grid container className="p-1 mt-1 security-item">
                <Grid item md={2} className="d-flex align-items-center justify-content-center">
                    <Box className="security-icon d-flex justify-content-center align-items-center">
                        <Email />
                    </Box>
                </Grid>
                <Grid item md={6}>
                    <Typography className="security-letter1">Currency</Typography>
                    <Typography>Select your local currency.</Typography>
                </Grid>
                <Grid item md={4} className="d-flex align-items-center justify-content-center">
                    <Autocomplete
                        id="Currency"
                        options={Currencys}
                        getOptionLabel={(option) => option.label}
                        style={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Currency" variant="outlined" />}
                    />
                </Grid>
            </Grid>

            <Grid container className="p-1 security-item mt-1">
                <Grid item md={2} className="d-flex align-items-center justify-content-center">
                    <Box className="security-icon d-flex justify-content-center align-items-center">
                        <PhoneAndroid />
                    </Box>
                </Grid>
                <Grid item md={8}>
                    <Typography className="security-letter1">Mobile Number</Typography>
                    <Typography>Your mobile phone can be used to enable two-factor authentication,helping to secure your wallet from unauthorized access,and to send bitcoin payment alerts when you receive funds.</Typography>
                </Grid>
                <Grid item md={2} className="d-flex align-items-center justify-content-center">
                    <Button className="theme-full-btn security-change-btn">
                        Add
                    </Button>
                </Grid>
            </Grid>

            <Grid container className="p-1 security-item mt-1">
                <Grid item md={2} className="d-flex align-items-center justify-content-center">
                    <Box className="security-icon d-flex justify-content-center align-items-center">
                        <AccountBalanceWallet />
                    </Box>
                </Grid>
                <Grid item md={8}>
                    <Typography className="security-letter1">Wallet Id</Typography>
                    <Typography>Wallet ID is your unique identifier. It is completely individual to you, and it is what you will use to log in and access your wallet. It is NOT a bitcoin address for sending or receiving.Do not share your Wallet ID with others.</Typography>
                </Grid>
                <Grid item md={2} className="d-flex align-items-center justify-content-center">
                    <Button className="theme-full-btn security-change-btn">
                        Add
                    </Button>
                </Grid>
            </Grid>

            <Grid container className="p-1 security-item mt-1">
                <Grid item md={2} className="d-flex align-items-center justify-content-center">
                    <Box className="security-icon d-flex justify-content-center align-items-center">
                        <Payment />
                    </Box>
                </Grid>
                <Grid item md={8}>
                    <Typography className="security-letter1">Crypto Payment Link Handling</Typography>
                    <Typography>Crypto Payment Link Handling.</Typography>
                </Grid>
                <Grid item md={2} className="d-flex align-items-center justify-content-center">
                    <Box className="exchange-card-rate-bar">
                        <Button className={mode ? "enable-item" : ""} onClick={() => setMode(!mode)}>Enable</Button>
                        <Button className={!mode ? "disable-item" : ''} onClick={() => setMode(!mode)}>Disable</Button>
                    </Box>
                </Grid>
            </Grid>

            <Grid container className="p-1 security-item mt-1">
                <Grid item md={2} className="d-flex align-items-center justify-content-center">
                    <Box className="security-icon d-flex justify-content-center align-items-center">
                        <Create />
                    </Box>
                </Grid>
                <Grid item md={8}>
                    <Typography className="security-letter1">Mobile App Pairing Code</Typography>
                    <Typography>Scan the code (click on 'Show Pairing Code') with your Blockchain Wallet (iOS or Android) for a seamless connection to your wallet.Download our mobile applications below.Do not share your Pairing Code with others.</Typography>
                </Grid>
                <Grid item md={2} className="d-flex align-items-center justify-content-center">
                    <Button className="theme-empty-btn security-change-btn">
                        Show Pairing Code
                    </Button>
                </Grid>
            </Grid>

            <Grid container className="p-1 security-item mt-1">
                <Grid item md={2} className="d-flex align-items-center justify-content-center">
                    <Box className="security-icon d-flex justify-content-center align-items-center">
                        <Email />
                    </Box>
                </Grid>
                <Grid item md={8}>
                    <Typography className="security-letter1">Email Notification</Typography>
                    <Typography>Email Notification.</Typography>
                </Grid>
                <Grid item md={2} className="d-flex align-items-center justify-content-center">
                    <Box className="exchange-card-rate-bar">
                        <Button className={mode1 ? "enable-item" : ""} onClick={() => setMode1(!mode1)}>Enable</Button>
                        <Button className={!mode1 ? "disable-item" : ''} onClick={() => setMode1(!mode1)}>Disable</Button>
                    </Box>
                </Grid>
            </Grid>

            <Grid container className="p-1 security-item mt-1">
                <Grid item md={2} className="d-flex align-items-center justify-content-center">
                    <Box className="security-icon d-flex justify-content-center align-items-center">
                        <PhonelinkRing />
                    </Box>
                </Grid>
                <Grid item md={8}>
                    <Typography className="security-letter1">SMS Notification</Typography>
                    <Typography>SMS Notification.</Typography>
                </Grid>
                <Grid item md={2} className="d-flex align-items-center justify-content-center">
                    <Box className="exchange-card-rate-bar">
                        <Button className={mode2 ? "enable-item" : ""} onClick={() => setMode2(!mode2)}>Enable</Button>
                        <Button className={!mode2 ? "disable-item" : ''} onClick={() => setMode2(!mode2)}>Disable</Button>
                    </Box>
                </Grid>
            </Grid>

            <Grid container className="p-1 security-item mt-1">
                <Grid item md={2} className="d-flex align-items-center justify-content-center">
                    <Box className="security-icon d-flex justify-content-center align-items-center">
                        <Print />
                    </Box>
                </Grid>
                <Grid item md={8}>
                    <Typography className="security-letter1">Price Alert</Typography>
                    <Typography>Price Alert.</Typography>
                </Grid>
                <Grid item md={2} className="d-flex align-items-center justify-content-center">
                    <Box className="exchange-card-rate-bar">
                        <Button className={mode3 ? "enable-item" : ""} onClick={() => setMode3(!mode3)}>Enable</Button>
                        <Button className={!mode3 ? "disable-item" : ''} onClick={() => setMode3(!mode3)}>Disable</Button>
                    </Box>
                </Grid>
            </Grid>

            <Grid container className="p-1 security-item mt-1">
                <Grid item md={2} className="d-flex align-items-center justify-content-center">
                    <Box className="security-icon d-flex justify-content-center align-items-center">
                        <Apps />
                    </Box>
                </Grid>
                <Grid item md={6}>
                    <Typography className="security-letter1">Themes</Typography>
                    <Typography>Try out different themes for the wallet.</Typography>
                </Grid>
                <Grid item md={4} className="d-flex align-items-center justify-content-center">
                    <Autocomplete
                        id="Themes"
                        options={themes}
                        getOptionLabel={(option) => option.label}
                        style={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Themes" variant="outlined" />}
                    />
                </Grid>
            </Grid>

        </Box>
    )
}