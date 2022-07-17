import React from 'react';
import {
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Switch,
  } from "@mui/material";
  import Post from './Post';

function MiddleSide() {
  return (
    <Box flex={4}>
        <Post />
    </Box>
  )
}

export default MiddleSide