import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
        fontSize: 14,
    }
}));

export default function Header() {

    const classes = useStyles();
    const [mode, setMode] = React.useState(false)

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
                <Box>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick ={() => setMode(!mode)}>
                        <MenuIcon />
                    </IconButton>
                </Box>
                {
                    mode && 
                    <Card className="header-card">
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Word of the Day
                            </Typography>
                            <hr />
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                }
            </Toolbar>
        </AppBar>
    );
}
