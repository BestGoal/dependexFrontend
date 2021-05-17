import React from "react"
import Box from "@material-ui/core/Box"
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Popover from '@material-ui/core/Popover'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import HomeIcon from '@material-ui/icons/Home'
import SecurityIcon from '@material-ui/icons/Security'
import SettingsIcon from '@material-ui/icons/Settings'
import ExpandMore from '@material-ui/icons/ExpandMore'
import ChromeReaderModeTwoTone from '@material-ui/icons/ChromeReaderModeTwoTone'
import { history } from "../../../../history"

export default function Sidebar() {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleListItemClick = (url) => {
        history.push(url)
    }

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const currencyList = [
        { name: "BTC", value: 0 },
        { name: "ETH", value: 0 },
        { name: "BCH", value: 0 },
        { name: "XLM", value: 0 },
        { name: "WDGLD", value: 0 },
        { name: "ALGO", value: 0 },
        { name: "USD-D", value: 0 },
        { name: "USDT", value: 0 },
        { name: "AAVE", value: 0 },
        { name: "DOT", value: 0 },
        { name: "YFI", value: 0 },
    ]

    return (
        <Box className="home-sidebar">
            <Box className="d-flex justify-content-between p-1">
                <Box>
                    <p className="m-0 font-weight-bold">Total Balance</p>
                    <h1 className="m-0">$ 0.00</h1>
                </Box>
                <Box>
                    <Box aria-describedby={id} className="sidebar-cl-icon" onClick = {(e)=>setAnchorEl(e.currentTarget)}>
                        <ExpandMore />
                    </Box>
                    <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={()=>setAnchorEl(null)}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                    >
                        <Box style={{width: "200px"}} className="p-1">
                            {
                                currencyList.map((item, key) => (
                                    <Box key={key} className="d-flex justify-content-between">
                                        <Typography>{item.name}</Typography>
                                        <Typography>{item.value}</Typography>
                                    </Box>
                                ))
                            }
                            <Box className="show-in-usd mt-1">Show In USD</Box>
                        </Box>
                    </Popover>
                </Box>
            </Box>
            <List className="home-sidebar-list" component="nav" aria-label="main mailbox folders">
                <ListItem
                    button
                    selected={history.location.pathname === "/home"}
                    onClick={() => handleListItemClick("/home")}
                >
                    <ListItemIcon>
                        <HomeIcon className="home-sidebar-icon" />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem
                    button
                    selected={history.location.pathname === "/security"}
                    onClick={() => handleListItemClick("/security")}
                >
                    <ListItemIcon>
                        <SecurityIcon className="home-sidebar-icon" />
                    </ListItemIcon>
                    <ListItemText primary="Security" />
                </ListItem>
                <ListItem
                    button
                    selected={history.location.pathname === "/setting"}
                    onClick={() => handleListItemClick("/setting")}
                >
                    <ListItemIcon>
                        <SettingsIcon className="home-sidebar-icon" />
                    </ListItemIcon>
                    <ListItemText primary="Setting" />
                </ListItem>
                <ListItem
                    button
                    selected={history.location.pathname === "/activity"}
                    onClick={() => handleListItemClick("/activity")}
                >
                    <ListItemIcon>
                        <ChromeReaderModeTwoTone className="home-sidebar-icon" />
                    </ListItemIcon>
                    <ListItemText primary="Activities" />
                </ListItem>
            </List>
        </Box>
    )
}