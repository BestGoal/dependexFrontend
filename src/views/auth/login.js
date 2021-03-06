import React from "react"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import TextField from "@material-ui/core/TextField"
import { history } from "../../history"
import AccountBalanceWalletOutlined from "@material-ui/icons/AccountBalanceWalletOutlined"
import FooterAndroid from "../../asset/image/footer-android.png"
import FooterIos from "../../asset/image/footer-ios.png"
import QrCode from "../../asset/image/dashboard/qr-code.png"

export default function Login() {
  return (
    <Box className="login-page pt-3 d-flex justify-content-between">
      <Box className="color-white text-align-center pt-5">
        <p className="register-header-letter1">Login To Your Dependex Wallet</p>
      </Box>
      <Box className="d-flex justify-content-center">
        <Card className="p-1 login-card">
          <CardContent>
            <Box className="d-flex align-items-center">
              <Box className="create-wallet-icon d-flex align-items-center justify-content-center">
                <AccountBalanceWalletOutlined className="color-white" />
              </Box>
              <h1 className="ml-1">Dependex wallet</h1>
            </Box>
            <Box>
              <p className="p-0 m-0 font-weight-bold">Wallet Id</p>
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
              <p className="p-0 m-0 font-weight-bold">Password</p>
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
              <Button className="login-btn" variant="contained" onClick={() => history.push("/home")}> Login </Button>
            </Box>
            <p className="m-0 pt-1">
              Don't have a dependex wallet? <b className="crusor-pointer" onClick={() => history.push("/create-wallet")}>Please create your wallet.</b>
            </p>
          </CardContent>
        </Card>
      </Box>
      <Box className="auth-footer pt-1 pb-1 d-flex justify-content-center">
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