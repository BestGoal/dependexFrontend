import React from "react"
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { AttachMoney, AccountBalanceWallet } from "@material-ui/icons"
import Chart from 'react-apexcharts'

export default function Home() {

    const coins = [
        {
            img: "https://login.blockchain.com/img/btc.png",
            name: "Bitcoin",
            usdt: "0.00",
            crypto: "0",
            currency: "BTC",
            price: "534566",
            time: "0.75 % 24hrs"
        },
        {
            img: "https://login.blockchain.com/img/eth.png",
            name: "Ether",
            usdt: "0.00",
            crypto: "0",
            currency: "ETH",
            price: "34875",
            time: "0.75 % 24hrs"
        },
        {
            img: "https://login.blockchain.com/img/xlm.png",
            name: "Stellar",
            usdt: "0.00",
            crypto: "0",
            currency: "XLM",
            price: "23563",
            time: "0.75 % 24hrs"
        },
        {
            img: "https://login.blockchain.com/img/wdgld.png",
            name: "Wrapped-DGLD",
            usdt: "0.00",
            crypto: "0",
            currency: "WDGLD",
            price: "5587",
            time: "0.75 % 24hrs"
        },
        {
            img: "https://login.blockchain.com/img/algo.png",
            name: "Algorand",
            usdt: "0.00",
            crypto: "0",
            currency: "ALGO",
            price: "3452",
            time: "0.75 % 24hrs"
        },
    ]

    const btcChartOptions = {
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
        colors: ['#f4772e'],
        stroke: {
          color: '#f4772e',
          width: 2,
          curve: 'smooth'
        },
        xaxis: {
          categories: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
          ],
          crosshairs: {
            width: 1
          }
        },
        yaxis: {
          min: 0
        },
        legend: {
          show: false
        },
        options: {
            chart: {
              id: 'apexchart-example'
            },
            xaxis: {
              categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
            }
          },
      }
      const btcChartData = [
        {
          name: 'USD Price:',
          data: [47, 45, 52, 56, 24, 65, 32, 38, 54, 56, 45, 32]
        }
      ]

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
                                <Typography variant="h5" className="font-weight-bold home-balance-type">Asset Balance</Typography>                        
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
            {
                coins.map((item, i) => (
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
                                        <Grid item md="8">
                                            <Chart
                                                options={btcChartOptions}
                                                series={btcChartData}
                                                type="line"
                                                height={100}
                                            />
                                        </Grid>
                                        <Grid item md="2" className="d-flex justify-content-center align-items-center">
                                            <Button className="theme-full-btn" variant="contained"> Buy </Button>
                                            <Button className="theme-empty-btn" variant="contained"> Swap </Button>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                ))
            }
        </React.Fragment>
    )
}