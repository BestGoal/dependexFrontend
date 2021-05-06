import React from "react"
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import ArrowDropUp from "@material-ui/icons/ArrowDropUp"
import ArrowDropDown from "@material-ui/icons/ArrowDropDown"
import SearchIcon from "@material-ui/icons/Search"
import Lock from "@material-ui/icons/Lock"
import LockOpen from "@material-ui/icons/LockOpen"

export default function SectionOne() {

    const [money1, setMoney1] = React.useState(false)
    const [money2, setMoney2] = React.useState(false)

  return (
    <React.Fragment>
        <Box className="mt-1">
            <Box className="exchange-card-input-header d-flex justify-content-start align-items-center">
                <TextField
                    label="You send"
                    placeholder="0"
                    margin="normal"
                    variant="filled"
                    type="number"
                    className="exchange-card-input"
                />
                <Box className="dropdown-btn d-flex align-items-center crusor-pointer justify-content-between" onClick={()=>setMoney1(!money1)}>
                    <Box>
                        <p className="main-name">Bitcoin</p>
                        <p className="name">BTC</p>
                    </Box>
                    {
                        money1 ? <ArrowDropUp className="mr-1"/> : <ArrowDropDown className="mr-1"/>
                    }
                </Box>
            </Box>
            {
                money1 &&
                    <Card className="dropdown-exchange-card pb-1">
                        <CardContent className="dropdown-exchange-content d-flex justify-content-start align-items-center">
                            <SearchIcon className="mt-1" />
                            <TextField
                                placeholder="Search"
                                margin="normal"
                                variant="filled"
                                type="text"
                                className="dropdown-exchange-input"
                            />
                        </CardContent>
                        <Box className="dropdown-exchange-item d-flex justify-content-between align-items-center pl-1 pr-1">
                            <Box className="d-flex justify-content-start align-items-center">
                                <Box className="dropdown-exchange-c-ico d-flex justify-content-center align-items-center">
                                    X
                                </Box>
                                <h2 className="pl-1">BTC</h2>
                                <p className="pl-1">Bitcoin</p>
                            </Box>
                            <Lock />
                        </Box>
                        <Box className="dropdown-exchange-item d-flex justify-content-between align-items-center pl-1 pr-1">
                            <Box className="d-flex justify-content-start align-items-center">
                                <Box className="dropdown-exchange-c-ico d-flex justify-content-center align-items-center">
                                    X
                                </Box>
                                <h2 className="pl-1">BTC</h2>
                                <p className="pl-1">Bitcoin</p>
                            </Box>
                            <Lock />
                        </Box>
                        <Box className="dropdown-exchange-item d-flex justify-content-between align-items-center pl-1 pr-1">
                            <Box className="d-flex justify-content-start align-items-center">
                                <Box className="dropdown-exchange-c-ico d-flex justify-content-center align-items-center">
                                    X
                                </Box>
                                <h2 className="pl-1">BTC</h2>
                                <p className="pl-1">Bitcoin</p>
                            </Box>
                            <Lock />
                        </Box>
                        <Box className="dropdown-exchange-item d-flex justify-content-between align-items-center pl-1 pr-1">
                            <Box className="d-flex justify-content-start align-items-center">
                                <Box className="dropdown-exchange-c-ico d-flex justify-content-center align-items-center">
                                    X
                                </Box>
                                <h2 className="pl-1">BTC</h2>
                                <p className="pl-1">Bitcoin</p>
                            </Box>
                            <Lock />
                        </Box>
                        <Box className="dropdown-exchange-item d-flex justify-content-between align-items-center pl-1 pr-1">
                            <Box className="d-flex justify-content-start align-items-center">
                                <Box className="dropdown-exchange-c-ico d-flex justify-content-center align-items-center">
                                    X
                                </Box>
                                <h2 className="pl-1">BTC</h2>
                                <p className="pl-1">Bitcoin</p>
                            </Box>
                            <Lock />
                        </Box>
                        <Box className="dropdown-exchange-item d-flex justify-content-between align-items-center pl-1 pr-1">
                            <Box className="d-flex justify-content-start align-items-center">
                                <Box className="dropdown-exchange-c-ico d-flex justify-content-center align-items-center">
                                    X
                                </Box>
                                <h2 className="pl-1">BTC</h2>
                                <p className="pl-1">Bitcoin</p>
                            </Box>
                            <Lock />
                        </Box>
                        <Box className="dropdown-exchange-item d-flex justify-content-between align-items-center pl-1 pr-1">
                            <Box className="d-flex justify-content-start align-items-center">
                                <Box className="dropdown-exchange-c-ico d-flex justify-content-center align-items-center">
                                    X
                                </Box>
                                <h2 className="pl-1">BTC</h2>
                                <p className="pl-1">Bitcoin</p>
                            </Box>
                            <Lock />
                        </Box>
                        <Box className="dropdown-exchange-item d-flex justify-content-between align-items-center pl-1 pr-1">
                            <Box className="d-flex justify-content-start align-items-center">
                                <Box className="dropdown-exchange-c-ico d-flex justify-content-center align-items-center">
                                    X
                                </Box>
                                <h2 className="pl-1">BTC</h2>
                                <p className="pl-1">Bitcoin</p>
                            </Box>
                            <Lock />
                        </Box>
                        <Box className="dropdown-exchange-item d-flex justify-content-between align-items-center pl-1 pr-1">
                            <Box className="d-flex justify-content-start align-items-center">
                                <Box className="dropdown-exchange-c-ico d-flex justify-content-center align-items-center">
                                    X
                                </Box>
                                <h2 className="pl-1">BTC</h2>
                                <p className="pl-1">Bitcoin</p>
                            </Box>
                            <Lock />
                        </Box>
                        <Box className="dropdown-exchange-item d-flex justify-content-between align-items-center pl-1 pr-1">
                            <Box className="d-flex justify-content-start align-items-center">
                                <Box className="dropdown-exchange-c-ico d-flex justify-content-center align-items-center">
                                    X
                                </Box>
                                <h2 className="pl-1">BTC</h2>
                                <p className="pl-1">Bitcoin</p>
                            </Box>
                            <Lock />
                        </Box>
                    </Card>
            }

            <Box className="d-flex align-items-center">
                <LockOpen /> 1 ETH = 0.0003234USD
            </Box>

            <Box className="exchange-card-input-header d-flex justify-content-start align-items-center">
                <TextField
                    label="You get approximately"
                    placeholder="0"
                    margin="normal"
                    variant="filled"
                    type="number"
                    className="exchange-card-input"
                />
                <Box className="dropdown-btn d-flex align-items-center crusor-pointer justify-content-between" onClick={()=>setMoney2(!money2)}>
                    <Box>
                        <p className="main-name">Bitcoin</p>
                        <p className="name">BTC</p>
                    </Box>
                    {
                        money2 ? <ArrowDropUp className="mr-1"/> : <ArrowDropDown className="mr-1"/>
                    }
                </Box>
            </Box>
            {
                money2 &&
                    <Card className="dropdown-exchange-card pb-1">
                        <CardContent className="dropdown-exchange-content d-flex justify-content-start align-items-center">
                            <SearchIcon className="mt-1" />
                            <TextField
                                placeholder="Search"
                                margin="normal"
                                variant="filled"
                                type="text"
                                className="dropdown-exchange-input"
                            />
                        </CardContent>
                        <Box className="dropdown-exchange-item d-flex justify-content-between align-items-center pl-1 pr-1">
                            <Box className="d-flex justify-content-start align-items-center">
                                <Box className="dropdown-exchange-c-ico d-flex justify-content-center align-items-center">
                                    X
                                </Box>
                                <h2 className="pl-1">BTC</h2>
                                <p className="pl-1">Bitcoin</p>
                            </Box>
                            <Lock />
                        </Box>
                        <Box className="dropdown-exchange-item d-flex justify-content-between align-items-center pl-1 pr-1">
                            <Box className="d-flex justify-content-start align-items-center">
                                <Box className="dropdown-exchange-c-ico d-flex justify-content-center align-items-center">
                                    X
                                </Box>
                                <h2 className="pl-1">BTC</h2>
                                <p className="pl-1">Bitcoin</p>
                            </Box>
                            <Lock />
                        </Box>
                        <Box className="dropdown-exchange-item d-flex justify-content-between align-items-center pl-1 pr-1">
                            <Box className="d-flex justify-content-start align-items-center">
                                <Box className="dropdown-exchange-c-ico d-flex justify-content-center align-items-center">
                                    X
                                </Box>
                                <h2 className="pl-1">BTC</h2>
                                <p className="pl-1">Bitcoin</p>
                            </Box>
                            <Lock />
                        </Box>
                        <Box className="dropdown-exchange-item d-flex justify-content-between align-items-center pl-1 pr-1">
                            <Box className="d-flex justify-content-start align-items-center">
                                <Box className="dropdown-exchange-c-ico d-flex justify-content-center align-items-center">
                                    X
                                </Box>
                                <h2 className="pl-1">BTC</h2>
                                <p className="pl-1">Bitcoin</p>
                            </Box>
                            <Lock />
                        </Box>
                        <Box className="dropdown-exchange-item d-flex justify-content-between align-items-center pl-1 pr-1">
                            <Box className="d-flex justify-content-start align-items-center">
                                <Box className="dropdown-exchange-c-ico d-flex justify-content-center align-items-center">
                                    X
                                </Box>
                                <h2 className="pl-1">BTC</h2>
                                <p className="pl-1">Bitcoin</p>
                            </Box>
                            <Lock />
                        </Box>
                        <Box className="dropdown-exchange-item d-flex justify-content-between align-items-center pl-1 pr-1">
                            <Box className="d-flex justify-content-start align-items-center">
                                <Box className="dropdown-exchange-c-ico d-flex justify-content-center align-items-center">
                                    X
                                </Box>
                                <h2 className="pl-1">BTC</h2>
                                <p className="pl-1">Bitcoin</p>
                            </Box>
                            <Lock />
                        </Box>
                        <Box className="dropdown-exchange-item d-flex justify-content-between align-items-center pl-1 pr-1">
                            <Box className="d-flex justify-content-start align-items-center">
                                <Box className="dropdown-exchange-c-ico d-flex justify-content-center align-items-center">
                                    X
                                </Box>
                                <h2 className="pl-1">BTC</h2>
                                <p className="pl-1">Bitcoin</p>
                            </Box>
                            <Lock />
                        </Box>
                        <Box className="dropdown-exchange-item d-flex justify-content-between align-items-center pl-1 pr-1">
                            <Box className="d-flex justify-content-start align-items-center">
                                <Box className="dropdown-exchange-c-ico d-flex justify-content-center align-items-center">
                                    X
                                </Box>
                                <h2 className="pl-1">BTC</h2>
                                <p className="pl-1">Bitcoin</p>
                            </Box>
                            <Lock />
                        </Box>
                        <Box className="dropdown-exchange-item d-flex justify-content-between align-items-center pl-1 pr-1">
                            <Box className="d-flex justify-content-start align-items-center">
                                <Box className="dropdown-exchange-c-ico d-flex justify-content-center align-items-center">
                                    X
                                </Box>
                                <h2 className="pl-1">BTC</h2>
                                <p className="pl-1">Bitcoin</p>
                            </Box>
                            <Lock />
                        </Box>
                        <Box className="dropdown-exchange-item d-flex justify-content-between align-items-center pl-1 pr-1">
                            <Box className="d-flex justify-content-start align-items-center">
                                <Box className="dropdown-exchange-c-ico d-flex justify-content-center align-items-center">
                                    X
                                </Box>
                                <h2 className="pl-1">BTC</h2>
                                <p className="pl-1">Bitcoin</p>
                            </Box>
                            <Lock />
                        </Box>
                    </Card>
            }
            <Box className="d-flex justify-content-center mt-2">
                <Button className="exchange-btn" variant="contained">
                    Buy now
                </Button>
            </Box>
        </Box>
    </React.Fragment>
  )
}