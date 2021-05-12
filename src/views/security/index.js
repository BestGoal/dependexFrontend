import React from "react"
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import Box from "@material-ui/core/Box"
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Email from '@material-ui/icons/Email'
import Lock from '@material-ui/icons/Lock'
import NetworkCheck from '@material-ui/icons/NetworkCheck'
import VpnKey from '@material-ui/icons/VpnKey'
import Create from '@material-ui/icons/Create'
import Send from '@material-ui/icons/Send'

export default function Security() {

    const [mode, setMode] = React.useState(0)
    const [mode1, setMode1] = React.useState(0)

    return (
        <Box className="security-container">
            <Box className="text-align-center">
                <h1 className="sub-header">Security</h1>
            </Box>
            <Divider />
            <Grid container className="p-2" spacing="1">
                <Grid item md={5}>
                    <Typography>Complete the steps below to help prevent unauthorized access to your wallet. Add additional verification to access your funds at any time.</Typography>
                </Grid>
                <Grid item md={7}>
                    <Grid container>
                        <Grid item md={4} className="d-flex align-items-center">
                            <Box className="security-progress d-flex justify-content-center align-items-center">1</Box>
                            <Typography className="security-title">Verify Your Personal Email</Typography>
                        </Grid>
                        <Grid item md={4} className="d-flex align-items-center">
                            <Box className="security-progress d-flex justify-content-center align-items-center">2</Box>
                            <Typography className="security-title">Turn on Two-Step Verification</Typography>
                        </Grid>
                        <Grid item md={4} className="d-flex align-items-center">
                            <Box className="security-progress d-flex justify-content-center align-items-center">3</Box>
                            <Typography className="security-title">Save Secret Private Key Recovery Phrase</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container className="p-2 security-item">
                <Grid item md={2} className="d-flex align-items-center justify-content-center">
                    <Box className="security-icon d-flex justify-content-center align-items-center">
                        <Email />
                    </Box>
                </Grid>
                <Grid item md={8}>
                    <Typography className="security-letter1">Verify Email Address</Typography>
                    <Typography>We have sent a verification email to imogenemartin81@gmail.com. Please click on the email that you’ve received to verify your email. We’ll use this email to authorize logins, send payment notifications, and notify you of wallet updates.</Typography>
                </Grid>
                <Grid item md={2} className="d-flex align-items-center justify-content-center">
                    <Button className="theme-full-btn security-change-btn">
                        Change
                    </Button>
                </Grid>
            </Grid>

            <Grid container className="p-2 security-item mt-1">
                <Grid item md={2} className="d-flex align-items-center justify-content-center">
                    <Box className="security-icon d-flex justify-content-center align-items-center">
                        <Lock />
                    </Box>
                </Grid>
                <Grid item md={8}>
                    <Typography className="security-letter1">Two-Step Verification</Typography>
                    <Typography>Use an Authenticator app, Yubikey, or SMS Codes Two-step verification helps to prevent unauthorized access to your wallet by requiring a one-time password for every login attempt. Enable this to further secure your wallet.</Typography>
                </Grid>
                <Grid item md={2} className="d-flex align-items-center justify-content-center">
                    <Box className="exchange-card-rate-bar">
                        <Button className={!mode ? "select-item" : ""} onClick={() => setMode(!mode)}>Enable</Button>
                        <Button className={mode ? "select-item" : ''} onClick={() => setMode(!mode)}>Disable</Button>
                    </Box>
                </Grid>
            </Grid>

            <Grid container className="p-2 security-item mt-1">
                <Grid item md={2} className="d-flex align-items-center justify-content-center">
                    <Box className="security-icon d-flex justify-content-center align-items-center">
                        <VpnKey />
                    </Box>
                </Grid>
                <Grid item md={8}>
                    <Typography className="security-letter1">Change Password</Typography>
                    <Typography>Your password is never shared with Blockchain or stored on our servers. We cannot access or reset your password. The only way to restore your wallet is through your Secret Private Key Recovery Phrase .Make sure you write down your Secret Private Key Recovery Phrasewhich is the only way to restore access to your wallet in the event of a lost password.</Typography>
                </Grid>
                <Grid item md={2} className="d-flex align-items-center justify-content-center">
                    <Button className="theme-full-btn security-change-btn">
                        Change
                    </Button>
                </Grid>
            </Grid>

            <Grid container className="p-2 security-item mt-1">
                <Grid item md={2} className="d-flex align-items-center justify-content-center">
                    <Box className="security-icon d-flex justify-content-center align-items-center">
                        <Create />
                    </Box>
                </Grid>
                <Grid item md={8}>
                    <Typography className="security-letter1">Secret Private Key Recovery Phrase</Typography>
                    <Typography>Your Secret Recovery Phrase is needed to recover your wallet in case the password is lost. Please write these 12 words down, in order, and keep them somewhere safe offline. The secret recovery phrase gives you (or anyone who has it) a way to restore your wallet and access your funds. In the event that you lose your password or our service is unavailable, this will be your safety net.</Typography>
                </Grid>
                <Grid item md={2} className="d-flex align-items-center justify-content-center">
                    <Button className="theme-full-btn security-change-btn">
                        Backup Funds
                    </Button>
                </Grid>
            </Grid>

            <Grid container className="p-2 security-item mt-1">
                <Grid item md={2} className="d-flex align-items-center justify-content-center">
                    <Box className="security-icon d-flex justify-content-center align-items-center">
                        <Send />
                    </Box>
                </Grid>
                <Grid item md={8}>
                    <Typography className="security-letter1">Tor Requests</Typography>
                    <Typography>Your browser will be remembered for a short period of time, allowing you to login again without having to re-authenticate.Disable this to require full authentication every time you login. This will not affect your current browser until you delete all cookies.</Typography>
                </Grid>
                <Grid item md={2} className="d-flex align-items-center justify-content-center">
                    <Box className="exchange-card-rate-bar">
                        <Button className={!mode1 ? "select-item" : ""} onClick={() => setMode1(!mode1)}>Enable</Button>
                        <Button className={mode1 ? "select-item" : ''} onClick={() => setMode1(!mode1)}>Disable</Button>
                    </Box>
                </Grid>
            </Grid>

            <Grid container className="p-2 security-item mt-1">
                <Grid item md={2} className="d-flex align-items-center justify-content-center">
                    <Box className="security-icon d-flex justify-content-center align-items-center">
                        <NetworkCheck />
                    </Box>
                </Grid>
                <Grid item md={8}>
                    <Typography className="security-letter1">IP Whitelist</Typography>
                    <Typography>Allow login without email authentication from the following list of IP addresses. Enter IP addresses you'd like to whitelist separated by commas. Use % as a wildcard.</Typography>
                </Grid>
                <Grid item md={2} className="d-flex align-items-center justify-content-center">
                    <Button className="theme-full-btn security-change-btn">
                        Backup Funds
                    </Button>
                </Grid>
            </Grid>

        </Box>
    )
}