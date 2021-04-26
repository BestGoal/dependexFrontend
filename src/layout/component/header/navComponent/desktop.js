import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles((theme) => ({
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        }
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
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
    buttonBox: {
        marginLeft: theme.spacing(1)
    },
    login: {
        backgroundColor: "rgb(53, 63, 82)",
        color: "white"
    },
    register: {
        backgroundColor: "rgb(12, 108, 242)",
        marginLeft: theme.spacing(1),
        color: "white"
    }
}));

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Header() {

    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <AppBar position="static" className="header-app-bar bg-transparent box-shadow-none">
            <Toolbar className="d-flex justify-content-between">
                <Box className="d-flex align-items-center">
                    <svg width={60} height={60}>
                        <path d="m4.10706 25.6934-2.18999 2.19c-.60615.5823-1.088401 1.281-1.417833 2.0543-.329431.7733-.499237 1.6051-.499237 2.4457 0 .8405.169806 1.6724.499237 2.4456.329432.7733.811683 1.4721 1.417833 2.0544l17.64293 17.817c.4182.4278.9049.7827 1.44 1.05v-21.597z" fill="#3d89f5"></path><path d="m43.8929 25.6934 2.19 2.19c.6062.5823 1.0884 1.281 1.4179 2.0543.3294.7733.4992 1.6051.4992 2.4457 0 .8405-.1698 1.6724-.4992 2.4456-.3295.7733-.8117 1.4721-1.4179 2.0544l-17.6429 17.817c-.4182.4278-.9049.7827-1.44 1.05v-21.597z" fill="#1656b9"></path><path d="m39.6569 21.2234-11.04-11.07c-.5845-.60237-1.2839-1.0813-2.0569-1.40834s-1.6038-.49555-2.4431-.49555-1.6702.16851-2.4431.49555c-.773.32704-1.4725.80597-2.0569 1.40834l-11.07002 11.07 15.51002 7.74z" fill="#85b5f8"></path>
                    </svg>
                    <Typography className="font-weight-bold" variant="h5">
                        Dependex.com
                    </Typography>
                </Box>
                <Box className="d-flex justify-content-right align-items-center">
                    <AppBar position="static" className="bg-transparent box-shadow-none header-top-list">
                        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                            <Tab label="Wallet" {...a11yProps(1)} />
                            <Tab label="Exchange" {...a11yProps(2)} />
                            <Tab label="Explorer" {...a11yProps(3)} />
                        </Tabs>
                    </AppBar>
                    <Box className={classes.search}>
                        <Box className={classes.searchIcon}>
                            <SearchIcon />
                        </Box>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Box>
                    <Box className={classes.buttonBox}>
                        <Button className={classes.login} variant="contained"> Login </Button>
                        <Button className={classes.register} variant="contained" color="primary"> Register </Button>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
