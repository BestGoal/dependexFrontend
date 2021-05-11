import React, { useState, useEffect } from "react"
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { AttachMoney, AccountBalanceWallet } from "@material-ui/icons"
import Pagination from '@material-ui/lab/Pagination';
import Chart from 'react-apexcharts'
import Axios from "../../pre/request"
import { Root } from "../../pre/config"

export default function Home() {

    const [assetList, setAssetList] = useState([]);
    const [pageStart, setPageStart] = useState(1);
    const [pageLimit] = useState(10);
    const [pageCount, setPageCount] = useState(10);

    const btcChartData = [
        {
            name: 'Price:',
            data: [47, 45, 52, 56, 24, 65, 32, 38, 54, 56, 45, 32]
        }
    ]

    useEffect(() => {
        async function fetchData() {
            let sendData = {
                start: pageStart,
                limit: pageLimit,
                convert: "USD"
            }
            let data = await Axios("POST", sendData, Root.adminUrl + "admin/api/getAssets");
            if (data.status === true) {
                setPageCount(Number((data.count / pageLimit).toFixed()))
                setAssetList(data.data);
            }
        }
        fetchData()
    }, [pageStart, pageLimit])

    const handleChange = (event, value) => {
        setPageStart((pageLimit * (value - 1)) + 1)
    }

    const getName = (name) => {
        let btcChartOptions = {
            chart: {
                toolbar: {
                    show: false
                },
                sparkline: {
                    enabled: true
                }
            },
            colors: ['#f4772e'],
            stroke: {
                width: 2,
                curve: 'smooth'
            },
            xaxis: {
                categories: [
                ]
            }
        }
        for (let i = 0; i < 100; i++) {
            btcChartOptions.xaxis.categories.push(name)
        }
        return btcChartOptions;
    }

    return (
        <React.Fragment>
            <Grid container spacing={3}>
                <Grid item md={6}>
                    <Card className="bg-transparent box-shadow-none home-border-item">
                        <CardContent className="d-flex align-items-center">
                            <Box className="home-balance-icon-p d-flex justify-content-center align-items-center">
                                <AttachMoney className="home-balance-icon" />
                            </Box>
                            <Box className="ml-1">
                                <Typography variant="h5" className="font-weight-bold home-balance-type">Crypto Balance</Typography>
                                <Typography variant="h5" className="home-balance-money">$ 0.00</Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item md={6}>
                    <Card className="bg-transparent box-shadow-none home-border-item">
                        <CardContent className="d-flex align-items-center">
                            <Box className="home-balance-icon-p d-flex justify-content-center align-items-center">
                                <AccountBalanceWallet className="home-balance-icon" />
                            </Box>
                            <Box className="ml-1">
                                <Typography variant="h5" className="font-weight-bold home-balance-type">Save & Earn Balance</Typography>
                                <Typography variant="h5" className="home-balance-money">$ 0.00</Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Box className="d-flex justify-content-end p-1">
                <Pagination count={pageCount} color="primary" boundaryCount={2} onChange={handleChange} />
            </Box>
            {
                assetList.map((item, i) => (
                    <Grid key={i} container spacing={3}>
                        <Grid item md={3}>
                            <Card className="bg-transparent box-shadow-none home-border-item">
                                <CardContent className="home-card-content">
                                    <Box className="d-flex align-items-center">
                                        <Box className="home-currency-icon-p d-flex justify-content-center align-items-center">
                                            <img src={item.img} alt="" className="home-balance-icon" />
                                        </Box>
                                        <Typography variant="h5" className="home-balance-type font-weight-bold">{item.name}</Typography>
                                    </Box>
                                    <Box className="ml-2">
                                        <Typography variant="h5" className="font-weight-bold home-balance-type">${item.usdt}</Typography>
                                        <Typography variant="h6" className="home-balance-money">{item.crypto}{item.currency}</Typography>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item md={9}>
                            <Card className="bg-transparent box-shadow-none home-border-item">
                                <CardContent className="home-card-content d-flex">
                                    <Grid container>
                                        <Grid item md={2}>
                                            <Typography variant="h6" className="home-balance-money">{item.currency} Price</Typography>
                                            <Typography variant="h5" className="font-weight-bold home-balance-type">${item.price}</Typography>
                                            <Typography variant="h6" className="home-balance-money">{item.time}</Typography>
                                        </Grid>
                                        <Grid item md={8}>
                                            <Chart
                                                options={getName(item.name)}
                                                series={btcChartData}
                                                type="line"
                                                height={100}
                                            />
                                        </Grid>
                                        <Grid item md={2} className="d-flex justify-content-center align-items-center">
                                            <Button className="theme-full-btn color-white" variant="contained"> Buy </Button>
                                            <Button className="theme-empty-btn" variant="contained"> Swap </Button>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                ))
            }
            <Box className="d-flex justify-content-end p-1">
                <Pagination count={pageCount} color="primary" boundaryCount={2} onChange={handleChange} />
            </Box>
        </React.Fragment>
    )
}