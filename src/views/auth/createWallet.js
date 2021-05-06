import React from "react"
import { Box, Button, Card, CardContent, TextField, Typography } from "@material-ui/core"
import AccountBalanceWalletOutlined from "@material-ui/icons/AccountBalanceWalletOutlined"
import { history } from "../../history"
import FooterAndroid from "../../asset/image/footer-android.png"
import FooterIos from "../../asset/image/footer-ios.png"
import QrCode from "../../asset/image/dashboard/qr-code.png"

export default function CreateWallet() {
  return (
    <Box className="login-page d-flex justify-content-between align-items-center">
      <Box className="color-white text-align-center pt-5 mt-5">
        <p className="register-header-letter1">Securely Buy, Sell, and Store Crypto.</p>
        <h2 className="register-header-letter2">Get Started by Signing Up Now.</h2>
      </Box>
      <Box className="d-flex">
        <Card className="p-2 mr-3 mt-3">
          <CardContent>
            <Box className="d-flex align-items-center">
              <Box className="create-wallet-icon d-flex align-items-center justify-content-center">
                <AccountBalanceWalletOutlined className="color-white" />
              </Box>
              <h1 className="ml-1">Blockchain wallet</h1>
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
            <Box className="mt-1">
              <Button className="login-btn" variant="contained" onClick={()=>history.push("/home")}> Create Wallet </Button>
            </Box>
            <Box className="d-flex justify-content-between align-items-center">
              <img src={FooterAndroid} alt="" className="w-10" />
              <img src={FooterIos} alt="" className="w-10" />
              <img src={QrCode} alt="" className="m-1 w-5" />
            </Box>
          </CardContent>
        </Card>
      </Box>
      <Typography className="font-weight-bold color-white p-2 color-gray" variant="h6">
        Already have wallet ? <b className="crusor-pointer color-white" onClick={()=>history.push("/login")}>to Login</b>
      </Typography>
    </Box>
  )
}