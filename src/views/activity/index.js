import React from "react"
import Grid from '@material-ui/core/Grid'
import Box from "@material-ui/core/Box"
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import GetApp from '@material-ui/icons/GetApp'
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import CallMade from '@material-ui/icons/CallMade';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        border: "2px solid rgb(204, 210, 222)",
        marginLeft: "1rem !important",
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        display: "flex !important",
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '200px',
            '&:focus': {
                width: '200px',
            },
        },
    },
}));

export default function Security() {

    const classes = useStyles();
    const [mode, setMode] = React.useState(1);

    const data = [
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
    ]

    return (
        <Box className="activity-container">

            <Box className="pb-1">
                <h1 className="sub-header">Activity</h1>
                <Typography>All your activitis are on here.</Typography>
            </Box>

            <Box className="d-flex justify-content-between">
                <Box className="exchange-card-rate-bar">
                    <Button onClick={() => setMode(1)} variant="contained" className={mode === 1 ? "select-item" : "item"}> All </Button>
                    <Button onClick={() => setMode(2)} variant="contained" className={mode === 2 ? "select-item" : "item"}> Received </Button>
                    <Button onClick={() => setMode(3)} variant="contained" className={mode === 3 ? "select-item" : "item"}> Sent </Button>
                    <Button onClick={() => setMode(4)} variant="contained" className={mode === 4 ? "select-item" : "item"}> Transferred </Button>
                </Box>
                <Box className="d-flex justify-content-end">
                    <Button variant="contained" className="theme-empty-btn">
                        <GetApp />
                        Download
                    </Button>
                    <Box className={classes.search} md={6}>
                        <Box className={classes.searchIcon}>
                            <SearchIcon />
                        </Box>
                        <InputBase
                            placeholder="Search…"
                            max={10}
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Box>
                </Box>
            </Box>

            <Box className="mt-2">
                {
                    data.map((item, key) => (
                        <Grid container key={key} className="activity-card p-2">
                            <Grid item md={3}>
                                <Box className="d-flex align-items-center">
                                    <Box className="activity-icon d-flex justify-content-center align-items-center">
                                        <CallMade />
                                    </Box>
                                    <Box className="ml-1">
                                        <Typography className="font-weight-bold">Sent BTC</Typography>
                                        <Typography className="color-gray">May 13 2021 @12:04AM</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item md={6}>
                                <Box>
                                    <Typography className="font-weight-bold color-gray">To: 1FfmbHfnpaZjKFvyi1okTjJJusN455paPH</Typography>
                                    <Typography className="font-weight-bold color-gray">From: Private Key wallet</Typography>
                                </Box>
                            </Grid>
                            <Grid item md={3}>
                                <Box>
                                    <Typography className="font-weight-bold">0.0000123 BTC</Typography>
                                    <Typography className="color-gray">$129.78</Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    ))
                }
            </Box>

        </Box>
    )
}