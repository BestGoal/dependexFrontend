import React from "react"
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles((theme) => ({
  topSection: {
    maxWidth: "1400px",
    margin: "auto",
    display: "flex",
    justifyContent: "space-between",
    paddingTop: theme.spacing(10)
  },
  appbar: {
    backgroundColor: "transparent",
    boxShadow: "none",
    color: "black",
    "& > div > div > span": {
        background: "#1656b9"
    },
  },
  middleMargin: {
    marginTop: theme.spacing(4)
  },
  rateButton: {
    boxShadow: "none",
    color: "black",
    "&:hover": {
      boxShadow: "none",
    }
  },
  focusButton: {
    boxShadow: "none",
    border: "2px solid #1656b9",
    color: "#1656b9",
    "&:hover": {
      boxShadow: "none",
    }
  },
  inputBorder: {
    "& > div:before": {
      border: "none !important"
    }
  },
  formControl: {
    minWidth: 120,
    width: "30%",
    marginTop: theme.spacing(2)
  },
}));

function a11yProps(index) {
  return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Dashboard() {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);
  const [rateMode, setRateMode] = React.useState(0);
  const [age, setAge] = React.useState(10);

  const handleChange = (event, newValue) => {
      setValue(newValue);
  };

  return (
    <Box className={classes.topSection}>
      <Box>
        <Card className={classes.root}>
          <CardContent>
            <AppBar position="static" className={classes.appbar}>
              <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                <Tab label="Exchange" {...a11yProps(0)} />
                <Tab label="Buy" {...a11yProps(1)} />
                <Tab label="Sell" {...a11yProps(2)} />
              </Tabs>
            </AppBar>
            <Box className={classes.middleMargin}>
              <Button className={rateMode === 0 ? classes.focusButton: classes.rateButton} onClick={()=>setRateMode(0)} variant="contained"> Floating Rate </Button>
              <Button className={rateMode === 1 ? classes.focusButton: classes.rateButton} onClick={()=>setRateMode(1)} variant="contained"> Fixed Rate </Button>
            </Box>
            <Box>
              <Box style ={{width: "100%", alignItems: "center"}}>
                <TextField
                style = {{width: "70%"}}
                  id="filled-full-width"
                  label="You send"
                  placeholder="0"
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="number"
                  className={classes.inputBorder}
                />
                <FormControl variant="filled" className={classes.formControl}>
                  <Button variant="contained">
                    <p>asdf</p>
                    <p>sdf</p>
                  </Button>
                </FormControl>
              </Box>
            </Box>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Box>
      <Box> Widget </Box>
    </Box>
  )
}