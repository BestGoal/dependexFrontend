import React from "react"
import { Box, Button, Card, CardContent, TextField, Typography } from "@material-ui/core"
import { history } from "../../history"

export default function CommingSoon() {
  return (
    <Box className="login-page d-flex justify-content-between align-items-center">
      <Typography className="font-weight-bold color-white pt-3 crusor-pointer" variant="h4" onClick={()=>history.push("/")}>
        Dependex.com
      </Typography>
      <Box className="color-white text-align-center">
        <p className="register-header-letter1">Securely Buy, Sell, and Store Crypto.</p>
        <h2 className="register-header-letter2">Get Started by Signing Up Now.</h2>
      </Box>
      <Box className="d-flex">
        <Card className="p-2 mr-3">
          <CardContent>
            <h1>Blockchain wallet</h1>
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
              <Button className="login-btn" variant="contained"> Login </Button>
            </Box>
            <Box className="d-flex justify-content-between">
              <p>Login via mobile</p>
              <p>Need Some help ?</p>
            </Box>
          </CardContent>
        </Card>
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
              <Button className="login-btn" variant="contained"> Login </Button>
            </Box>
            <Box className="d-flex justify-content-between">
              <p>Login via mobile</p>
              <p>Need Some help ?</p>
            </Box>
          </CardContent>
        </Card>
        {/* <Box>
          <h2 className="text-align-center color-gray">Don't have a wallet ? <b className="crusor-pointer color-white">Sign Up</b></h2>
        </Box> */}
      </Box>
      <Typography className="font-weight-bold color-white p-3">
        Version 1.0.0
      </Typography>
    </Box>
  )
}