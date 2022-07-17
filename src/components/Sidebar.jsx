import { AppBar, Toolbar, useTheme } from '@mui/material';
import React,{useState} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Switch,
  } from "@mui/material";
  import {
    AccountBox,
    Article,
    Group,
    Home,
    ModeNight,
    Person,
    Settings,
    Storefront,
  } from "@mui/icons-material";
function Sidebar() {
  return (
    <Box sx={{width:"250px",height:"100vh",backgroundColor:"gray"}}>
    <List>
    <ListItem disablePadding>
    <ListItemButton component="a" href="#home">
        <ListItemIcon>
        <Home />
        </ListItemIcon>
        <ListItemText primary="Homepage" />
    </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
    <ListItemButton component="a" href="#simple-list">
        <ListItemIcon>
        <Article />
        </ListItemIcon>
        <ListItemText primary="Pages" />
    </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
    <ListItemButton component="a" href="#simple-list">
        <ListItemIcon>
        <Group />
        </ListItemIcon>
        <ListItemText primary="Groups" />
    </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
    <ListItemButton component="a" href="#simple-list">
        <ListItemIcon>
        <Storefront />
        </ListItemIcon>
        <ListItemText primary="Marketplace" />
    </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
    <ListItemButton component="a" href="#simple-list">
        <ListItemIcon>
        <Person />
        </ListItemIcon>
        <ListItemText primary="Friends" />
    </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
    <ListItemButton component="a" href="#simple-list">
        <ListItemIcon>
        <Settings />
        </ListItemIcon>
        <ListItemText primary="Settings" />
    </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
    <ListItemButton component="a" href="#simple-list">
        <ListItemIcon>
        <AccountBox />
        </ListItemIcon>
        <ListItemText primary="Profile" />
    </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
    <ListItemButton component="a" href="#simple-list">
        <ListItemIcon>
        <ModeNight />
        </ListItemIcon>
        <Switch/>
    </ListItemButton>
    </ListItem>
</List>
</Box>
  )
}

export default Sidebar