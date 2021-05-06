import React from "react"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import TextField from "@material-ui/core/TextField"
import AccountBalanceWalletOutlined from "@material-ui/icons/AccountBalanceWalletOutlined"
import { history } from "../../history"
import FooterAndroid from "../../asset/image/footer-android.png"
import FooterIos from "../../asset/image/footer-ios.png"
import QrCode from "../../asset/image/dashboard/qr-code.png"
import Checkbox from '@material-ui/core/Checkbox'

export default function CreateWallet() {
  return (
    <Box className="login-page d-flex justify-content-between pt-4">
      <Box className="color-white text-align-center pt-3">
        <p className="register-header-letter1">Securely Buy Sell and Store Crypto.</p>
        <h2 className="register-header-letter2">Create Your Dependex Multi-Crypto Wallet.</h2>
      </Box>
      <Box className="d-flex justify-content-center">
        <Card className="pl-1 pr-1 login-card">
          <CardContent>
            <Box className="d-flex align-items-center">
              <Box className="create-wallet-icon d-flex align-items-center justify-content-center">
                <AccountBalanceWalletOutlined className="color-white" />
              </Box>
              <h1 className="ml-1">Dependex wallet</h1>
            </Box>
            <Box>
              <p className="p-0 m-0 font-weight-bold">Your Email</p>
              <TextField
                className="login-input"
                type="string"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
            </Box>
            <Box>
              <p className="p-0 m-0 mt-1 font-weight-bold">Password</p>
              <TextField
                className="login-input"
                type="string"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
            </Box>
            <Box>
              <p className="p-0 m-0 mt-1 font-weight-bold">Confirm Password</p>
              <TextField
                className="login-input"
                type="string"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
            </Box>
            <Box className="d-flex justify-content-start">
              <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />
              <span>
                By creating a wallet, I agree to Dependex's Terms of Service and Privacy Policy
              </span>              
            </Box>
            <Box className="mt-1">
              <Button className="login-btn" variant="contained" onClick={() => history.push("/home")}> Create Wallet </Button>
            </Box>
            <p className="pt-1 m-0">
            Already have a dependex wallet?<b className="crusor-pointer" onClick={() => history.push("/login")}>Please login.</b>
            </p>
          </CardContent>
        </Card>
      </Box>
      <Box className="auth-footer d-flex justify-content-center p-2">
        <Box>
          <h3 className="ml-2">Download Dependex app now!</h3>
          <p className="ml-2">The multi-crypto wallet you can depend on.</p>
        </Box>
        <Box className="d-flex justify-content-between align-items-center">
          <img src={FooterAndroid} alt="" className="w-10"></img>
          <img src={FooterIos} alt="" className="w-10"></img>
          <img src={QrCode} alt="" className="m-1 w-5"></img>
        </Box>
      </Box>
    </Box>
  )
}