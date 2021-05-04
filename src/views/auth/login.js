import React from "react"
import { Box, Button, Card, CardContent, TextField } from "@material-ui/core"
import { history } from "../../history";
import FooterAndroid from "../../asset/image/footer-android.png"
import FooterIos from "../../asset/image/footer-ios.png"

export default function Login() {
  return (
    <Box className="login-page d-flex justify-content-between align-items-center">
      <Box className="color-white text-align-center mt-5 pt-5">
        <p className="register-header-letter1">Securely Buy, Sell, and Store Crypto.</p>
        <h2 className="register-header-letter2">Get Started by Signing In Now.</h2>
      </Box>
      <Box>
        <Card className="p-2">
          <CardContent>
            <h1>Welcome back</h1>
            <Box>
              <p className="p-0 font-weight-bold">Wallet Id</p>
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
              <p className="p-0 font-weight-bold">Password</p>
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
              <Button className="login-btn" variant="contained" onClick={()=>history.push("/home")}> Login </Button>
            </Box>
            <Box className="d-flex justify-content-between mt-1">
              <img src={FooterAndroid} alt="" className="w-10"></img>
              <img src={FooterIos} alt="" className="w-10"></img>
            </Box>
          </CardContent>
        </Card>
      </Box>
      <h2 className="text-align-center color-gray">Don't have a wallet ? <b className="crusor-pointer color-white" onClick={()=>history.push("/create-wallet")}>Create wallet</b></h2>
    </Box>
  )
}