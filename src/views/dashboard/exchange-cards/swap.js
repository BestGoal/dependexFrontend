import React, { useEffect } from "react"
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Popover from '@material-ui/core/Popover'
import ArrowDropUp from "@material-ui/icons/ArrowDropUp"
import ArrowDropDown from "@material-ui/icons/ArrowDropDown"
import SearchIcon from "@material-ui/icons/Search"
import SwapVert from "@material-ui/icons/SwapVert"
import Axios from "../../../pre/request"
import { Root } from "../../../pre/config"

export default function Swap() {

    const [money1, setMoney1] = React.useState(null)
    const [money2, setMoney2] = React.useState(null)
    const [cItem1, setCItem1] = React.useState({
        name: "Bitcoin",
        currency: "BTC"
    })
    const [cItem2, setCItem2] = React.useState({
        name: "Ethereum",
        currency: "ETH"
    })
    const [value1, setValue1] = React.useState(0)
    const [value2, setValue2] = React.useState(0)

    const [asset, setAsset] = React.useState([])
    const [asset1, setAsset1] = React.useState([])
    const [asset2, setAsset2] = React.useState([])

    const [assetSearch1, setAssetSearch1] = React.useState("")
    const [assetSearch2, setAssetSearch2] = React.useState("")

    const moneyOpen1 = Boolean(money1);
    const id1 = moneyOpen1 ? 'simple-popover' : undefined;

    const moneyOpen2 = Boolean(money2);
    const id2 = moneyOpen2 ? 'simple-popover' : undefined;

    useEffect(() => {
        async function fetchData() {
            let sendData = {
                start: 1,
                limit: 60,
                convert: "USD"
            }
            let data = await Axios("POST", sendData, Root.adminUrl + "admin/api/getAssets");
            if (data.status === true && data.data.length) {
                setAsset(data.data)
                setAsset1(data.data)
                setAsset2(data.data)
            }
        }
        fetchData()
    }, [])

    const changeValue1 = async (value) => {
        setValue1(value)
        setValue2("...")
        if (value) {
            let sendData = {
                value,
                curreny1: cItem1.currency,
                curreny2: cItem2.currency
            }
            let data = await Axios("POST", sendData, Root.adminUrl + "admin/api/exchangeCard");
            if (data.status === true) {
                setValue2(data.data)
            }
        } else if (value === 0) {
            setValue2(value)
        }
    }

    const replaceOneAndTwo = () => {
        let item1 = cItem1;
        setCItem1(cItem2)
        setCItem2(item1)
        if (value2 > 0) {
            let tempValue1 = value1;
            setValue1(value2)
            setValue2(tempValue1)
        } else {
            setValue1(0)
            setValue2(0)
        }
    }

    const asset1Filter = (value) => {
        let data = asset.filter(item => {
            let startsWithCondition = false;
            let includesCondition = false;
            let startsWithConditionc = false
            let includesConditionc = false

            let uitem = (item["name"]).toString();
            startsWithCondition = uitem.toLowerCase().startsWith(value.toLowerCase());
            includesCondition = uitem.toLowerCase().includes(value.toLowerCase());

            let citem = (item["currency"]).toString();
            startsWithConditionc = citem.toLowerCase().startsWith(value.toLowerCase());
            includesConditionc = citem.toLowerCase().includes(value.toLowerCase());

            if (startsWithCondition || startsWithConditionc) {
                if (startsWithCondition) {
                    return startsWithCondition
                } else {
                    return startsWithConditionc
                }
            } else if (!startsWithCondition && (includesCondition || includesConditionc)) {
                if (includesCondition) {
                    return includesCondition
                } else {
                    return includesConditionc
                }
            } else return null
        })
        setAssetSearch1(value)
        setAsset1(data)
    }

    const asset2Filter = (value) => {
        let data = asset.filter(item => {
            let startsWithCondition = false;
            let includesCondition = false;
            let uitem = (item["name"]).toString();
            startsWithCondition = uitem.toLowerCase().startsWith(value.toLowerCase());
            includesCondition = uitem.toLowerCase().includes(value.toLowerCase());
            if (startsWithCondition) {
                return startsWithCondition
            } else if (!startsWithCondition && includesCondition) {
                return includesCondition
            } else return null
        })
        setAssetSearch2(value)
        setAsset2(data)
    }

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
                        value={value1}
                        onChange={(e) => changeValue1(e.currentTarget.value)}
                    />
                    <Box
                        className="dropdown-btn d-flex align-items-center crusor-pointer justify-content-between"
                        aria-describedby={id1}
                        onClick={(e) => setMoney1(e.currentTarget)}
                    >
                        <Box>
                            <p className="main-name">{cItem1?.name}</p>
                            <p className="name">{cItem1?.currency}</p>
                        </Box>
                        {
                            moneyOpen1 ? <ArrowDropUp className="mr-1" /> : <ArrowDropDown className="mr-1" />
                        }
                    </Box>
                </Box>
                <Popover
                    id={id1}
                    open={moneyOpen1}
                    anchorEl={money1}
                    onClose={() => setMoney1(null)}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    style={{ maxHeight: "400px" }}
                >
                    <Card className="dropdown-exchange-card pb-1">
                        <CardContent className="dropdown-exchange-content d-flex justify-content-start align-items-center">
                            <SearchIcon className="mt-1" />
                            <TextField
                                placeholder="Search"
                                margin="normal"
                                variant="filled"
                                type="text"
                                className="dropdown-exchange-input"
                                value={assetSearch1}
                                onChange={(e) => asset1Filter(e.currentTarget.value)}
                            />
                        </CardContent>
                        {
                            asset1.map((item, key) => (
                                <Box className="dropdown-exchange-item d-flex justify-content-between align-items-center pl-1 pr-1"
                                    onClick={() => {
                                        setCItem1(item)
                                        setMoney1(null)
                                        changeValue1(0)
                                        setAssetSearch1("")
                                    }}
                                    key={key}
                                >
                                    <Box key={key} className="d-flex justify-content-start align-items-center">
                                        <Box className="d-flex justify-content-center align-items-center">
                                            <img src={item.img} alt="" />
                                        </Box>
                                        <h2 className="pl-1">{item.currency}</h2>
                                        <p className="pl-1">{item.name}</p>
                                    </Box>
                                </Box>
                            ))
                        }
                    </Card>
                </Popover>
                <Box className="d-flex justify-content-between">
                    <Box className="d-flex align-items-center">
                        {`${value1} ${cItem1.currency} = ${value2} ${cItem2.currency}`}
                    </Box>
                    <Box className="exchange-trade-btn" onClick={() => replaceOneAndTwo()}>
                        <SwapVert />
                    </Box>
                </Box>
                <Box className="exchange-card-input-header d-flex justify-content-start align-items-center">
                    <TextField
                        label="You get approximately"
                        placeholder="0"
                        margin="normal"
                        variant="filled"
                        type="text"
                        className="exchange-card-input"
                        value={value2}
                        readOnly
                    />
                    <Box
                        className="dropdown-btn d-flex align-items-center crusor-pointer justify-content-between"
                        aria-describedby={id2}
                        onClick={(e) => setMoney2(e.currentTarget)}
                    >
                        <Box>
                            <p className="main-name">{cItem2?.name}</p>
                            <p className="name">{cItem2?.currency}</p>
                        </Box>
                        {
                            moneyOpen2 ? <ArrowDropUp className="mr-1" /> : <ArrowDropDown className="mr-1" />
                        }
                    </Box>
                </Box>
                <Popover
                    id={id2}
                    open={moneyOpen2}
                    anchorEl={money2}
                    onClose={() => setMoney2(null)}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    style={{ maxHeight: "400px" }}
                >
                    <Card className="dropdown-exchange-card pb-1">
                        <CardContent className="dropdown-exchange-content d-flex justify-content-start align-items-center">
                            <SearchIcon className="mt-1" />
                            <TextField
                                placeholder="Search"
                                margin="normal"
                                variant="filled"
                                type="text"
                                className="dropdown-exchange-input"
                                value={assetSearch2}
                                onChange={(e) => asset2Filter(e.currentTarget.value)}
                            />
                        </CardContent>
                        {
                            asset2.map((item, key) => (
                                <Box className="dropdown-exchange-item d-flex justify-content-between align-items-center pl-1 pr-1"
                                    onClick={() => {
                                        setCItem2(item)
                                        setMoney2(null)
                                        changeValue1(0)
                                        setAssetSearch2("")
                                    }}
                                    key={key}
                                >
                                    <Box key={key} className="d-flex justify-content-start align-items-center">
                                        <Box className="d-flex justify-content-center align-items-center">
                                            <img src={item.img} alt="" />
                                        </Box>
                                        <h2 className="pl-1">{item.currency}</h2>
                                        <p className="pl-1">{item.name}</p>
                                    </Box>
                                </Box>
                            ))
                        }
                    </Card>
                </Popover>
                <Box className="d-flex justify-content-center mt-2">
                    <Button className="exchange-btn" variant="contained">
                        Swap now
                    </Button>
                </Box>
            </Box>
        </React.Fragment>
    )
}