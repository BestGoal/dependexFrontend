import React, { useState, useEffect } from "react"
import { useDispatch } from 'react-redux'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Pagination from '@material-ui/lab/Pagination'
import Chart from 'react-apexcharts'
import AttachMoney from "@material-ui/icons/AttachMoney"
import AccountBalanceWallet from "@material-ui/icons/AccountBalanceWallet"
import Axios from "../../pre/request"
import { Root } from "../../pre/config"

export default function Home() {

    const dispatch = useDispatch()

    const [assetList, setAssetList] = useState([]);
    const [pageStart, setPageStart] = useState(1);
    const [pageLimit] = useState(10);
    const [pageCount, setPageCount] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearchValue] = useState("");

    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        let sendData = {
            start: pageStart,
            limit: pageLimit,
            convert: "USD",
            search
        }
        let data = await Axios("POST", sendData, Root.adminUrl + "admin/api/getAssetsWithTrade", dispatch, true);
        if (data.status === true) {
            setPageCount(Number((data.count / pageLimit).toFixed()))
            setAssetList(data.data);
            let chartData = await Axios("POST", { list: data.data, condition: sendData }, Root.adminUrl + "admin/api/getAssetsWithChart");
            if (chartData.status) {
                setAssetList(chartData.data);
            }
        }
    }

    const handleChange = (event, value) => {
        setPageStart((pageLimit * (value - 1)) + 1)
        setCurrentPage(value)
    }

    const getName = (tradeData) => {
        let btcChartOptions = {
            chart: {
                toolbar: {
                    show: false
                },
                sparkline: {
                    enabled: true
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                color: '#3c44b1',
                curve: 'smooth',
                width: 2
            },
            fill: {
                color: '#3c44b1',
                gradient: {
                    shade: 'light',
                    type: 'vertical',
                    shadeIntensity: 1,
                    inverseColors: false,
                    opacityFrom: 0.6,
                    opacityTo: 0,
                    stops: [0, 10000]
                }
            },
            xaxis: {
                categories: [
                ]
            }
        }
        for (let i = 0; i < tradeData.length; i++) {
            btcChartOptions.xaxis.categories.push(tradeData[i].time)
        }
        return btcChartOptions;
    }

    const getTradeData = (tradeData) => {
        let btcChartData = [
            {
                name: 'Price',
                data: []
            }
        ]
        for (let i = 0; i < tradeData.length; i++) {
            btcChartData[0].data.push(tradeData[i].price)
        }
        return btcChartData;
    }

    const filterAssets = (value) => {
        setSearchValue(value);
        fetchData()
    }

    return (
        <React.Fragment>
            <Grid container spacing={1}>
                <Grid item md={6}>
                    <Card className="bg-transparent box-shadow-none home-border-item d-flex align-items-center">
                        <CardContent className="d-flex align-items-center">
                            <Box className="home-balance-icon-p d-flex justify-content-center align-items-center">
                                <AttachMoney className="home-balance-icon" />
                            </Box>
                            <Box className="ml-1">
                                <Typography className="font-weight-bold home-balance-type">Crypto Balance</Typography>
                                <Typography className="home-balance-money">$ 0.00</Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item md={6}>
                    <Card className="bg-transparent box-shadow-none home-border-item d-flex align-items-center">
                        <CardContent className="d-flex align-items-center">
                            <Box className="home-balance-icon-p d-flex justify-content-center align-items-center">
                                <AccountBalanceWallet className="home-balance-icon" />
                            </Box>
                            <Box className="ml-1">
                                <Typography className="font-weight-bold home-balance-type">Save & Earn Balance</Typography>
                                <Typography className="home-balance-money">$ 0.00</Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Grid container className="d-flex justify-content-between pt-1 pb-1 pr-1">
                <Grid item md={6}>
                    <TextField
                        label="Search..."
                        placeholder=""
                        margin="normal"
                        variant="filled"
                        className="home-search-input"
                        value={search}
                        onChange={(e)=>filterAssets(e.currentTarget.value)}
                    />
                </Grid>
                <Grid item md={6} className="d-flex justify-content-end">
                    <Pagination page={currentPage} count={pageCount} showFirstButton showLastButton boundaryCount={2} onChange={handleChange} />
                </Grid>
            </Grid>

            {
                assetList.map((item, i) => (
                    <Grid key={i} container spacing={3}>
                        <Grid item md={2}>
                            <Card className="bg-transparent box-shadow-none home-border-item">
                                <CardContent className="home-card-content">
                                    <Box className="d-flex align-items-center">
                                        <Box className="home-currency-icon-p d-flex justify-content-center align-items-center">
                                            <img src={item.img} alt="" className="home-balance-icon" />
                                        </Box>
                                        <Box className="d-flex flex-direction-column pl-1">
                                            <Box>
                                                <Typography className="home-balance-type cut-letter-12 font-weight-bold">{item.name}</Typography>
                                            </Box>
                                            <Box>
                                                <Typography className="font-weight-bold home-balance-type">$ {item.usdt}</Typography>
                                                <Typography className="home-balance-money">{item.crypto} {item.currency}</Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item md={10}>
                            <Card className="bg-transparent box-shadow-none home-border-item">
                                <CardContent className="home-card-content d-flex">
                                    <Grid container>
                                        <Grid item md={2}>
                                            <Box className="d-flex justify-content-start align-items-center">
                                                <img src={item.img} alt="" className="home-balance-icon" />
                                                <Typography className="home-balance-type cut-letter-12 font-weight-bold ml-1">{item.name}</Typography>
                                                <Typography className="home-balance-type font-weight-bold">({item.currency})</Typography>
                                            </Box>
                                            <Typography className="font-weight-bold home-balance-type mt-1">$ {item.price}</Typography>
                                            <Typography className={item.type ? "home-balance-money-plus" : "home-balance-money-minus"}> {!item.type && "-"} {item.different} ({item.percent}) %</Typography>
                                        </Grid>
                                        <Grid item md={8} className="pr-1">
                                            <Chart
                                                options={getName(item.tradeData)}
                                                series={getTradeData(item.tradeData)}
                                                type="area"
                                                height={60}
                                            />
                                        </Grid>
                                        <Grid item md={2} className="d-flex align-items-center justify-content-center">
                                            <Button className="theme-full-btn color-white text-capitalize"> Buy </Button>
                                            <Button className="theme-empty-btn text-capitalize ml-1"> Sell </Button>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                ))
            }
            {
                assetList.length && 
                    <Box className="d-flex justify-content-end p-1">
                        <Pagination page={currentPage} count={pageCount} showFirstButton showLastButton boundaryCount={2} onChange={handleChange} />
                    </Box>
            }
        </React.Fragment>
    )
}