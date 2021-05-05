import React from "react"
import Box from "@material-ui/core/Box"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import HomeIcon from '@material-ui/icons/Home';
import SecurityIcon from '@material-ui/icons/Security';
import SettingsIcon from '@material-ui/icons/Settings';

import { history } from "../../../../history"

export default function Sidebar() {

    const handleListItemClick = (url) => {
        history.push(url)
    };

    return (
        <Box className="home-sidebar">
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
                <Divider />
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
                <Divider />
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
            </List>
        </Box>
    )
}