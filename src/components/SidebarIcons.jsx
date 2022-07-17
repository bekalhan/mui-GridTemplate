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
function SidebarIcons() {
  return (
    <Box sx={{width:"80px",height:"100vh",backgroundColor:"gray"}}>
    <List>
    <ListItem disablePadding>
    <ListItemButton component="a" href="#home">
        <ListItemIcon>
        <Home  sx={{fontSize:"40px"}} />
        </ListItemIcon>
    </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
    <ListItemButton component="a" href="#simple-list">
        <ListItemIcon>
        <Article sx={{fontSize:"40px"}} />
        </ListItemIcon>
    </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
    <ListItemButton component="a" href="#simple-list">
        <ListItemIcon>
        <Group sx={{fontSize:"40px"}} />
        </ListItemIcon>
    </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
    <ListItemButton component="a" href="#simple-list">
        <ListItemIcon>
        <Storefront sx={{fontSize:"40px"}} />
        </ListItemIcon>
    </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
    <ListItemButton component="a" href="#simple-list">
        <ListItemIcon>
        <Person sx={{fontSize:"40px"}} />
        </ListItemIcon>
    </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
    <ListItemButton component="a" href="#simple-list">
        <ListItemIcon>
        <Settings sx={{fontSize:"40px"}} />
        </ListItemIcon>
    </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
    <ListItemButton component="a" href="#simple-list">
        <ListItemIcon>
        <AccountBox sx={{fontSize:"40px"}} />
        </ListItemIcon>
    </ListItemButton>
    </ListItem>
</List>
</Box>
  )
}

export default SidebarIcons;