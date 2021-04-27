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

function a11yProps(index) {
  return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function SectionOne() {

  const [value, setValue] = React.useState(0);
  const [rateMode, setRateMode] = React.useState(0);

  const handleChange = (event, newValue) => {
      setValue(newValue);
  };

  return (
    <Box style={{background: "blue", width: "100vw", height: "100vh", padding: "8rem", display:"flex", justifyContent: "flex-start"}}>
      <Card className="p-1">
        <CardContent>
          <AppBar position="static" style={{background: "transparent", color: "black", fontWeight: "bold", boxShadow: "none"}}>
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
              <Tab label="Swap" {...a11yProps(0)} />
              <Tab label="Buy" {...a11yProps(1)} />
              <Tab label="Sell" {...a11yProps(2)} />
              <Tab label="Earn" {...a11yProps(3)} />
            </Tabs>
          </AppBar>
          <Box className="mt-1">
            <Button className={rateMode === 0 ? "classes.focusButton": "classes.rateButton"} onClick={()=>setRateMode(0)} variant="contained"> Floating Rate </Button>
            <Button className={rateMode === 1 ? "classes.focusButton": "classes.rateButton"} onClick={()=>setRateMode(1)} variant="contained"> Fixed Rate </Button>
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
              />
            </Box>
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
              />
            </Box>
          </Box>
        </CardContent>
        <CardActions>
          <Button variant="contained" className="dashboard-section1-exchangeBtn">
            Exchange now
          </Button>
        </CardActions>
      </Card>
    </Box>
  )
}