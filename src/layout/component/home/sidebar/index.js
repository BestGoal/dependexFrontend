import React from "react"
import Box from "@material-ui/core/Box"
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import HomeIcon from '@material-ui/icons/Home'
import SecurityIcon from '@material-ui/icons/Security'
import SettingsIcon from '@material-ui/icons/Settings'
import ChromeReaderModeTwoTone from '@material-ui/icons/ChromeReaderModeTwoTone'
import { history } from "../../../../history"

export default function Sidebar() {

    const handleListItemClick = (url) => {
        history.push(url)
    }

    return (
        <Box className="home-sidebar">
            <Box className="d-flex p-1">
                <Box>
                    <p className="m-0 font-weight-bold">Total Balance</p>
                    <h1 className="m-0">$ 0.00</h1>
                </Box>
                <Box>
                    {/* <Button variant="contained"><ExpandMore /></Button> */}
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