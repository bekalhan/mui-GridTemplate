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
    styled,
    Avatar,
    Menu,
    MenuItem
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
  import SearchIcon from '@mui/icons-material/Search';
import { width } from '@mui/system';


  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "30%",
    height:"30px",
    marginLeft:"1em",
    background:"white",
    display:"flex",
    justifyContent:"space-between",
    cursor:"pointer",
    [theme.breakpoints.down("sm")]:{
        display:"none"
    }
  }));
  


function Navbar({open,setOpen}) {

    const [wide,setWide] = useState(false);
    const [dark,setDark] = useState(false);
    const [open2,setOpen2] = useState(false);

    const wideSearch = () =>{
        setWide(true);
    }

    const wideSearchClose = () => {
        setWide(false);
    }

    const backgroundDark = () =>{
        setDark(true);
    }

    const backgroundOrange = () =>{
        setDark(false);
    }

    console.log("wide : ",wide);

  return (
    <AppBar position='stick'>
        {dark ?
             <Toolbar sx={{backgroundColor:"black",display:"flex",justifyContent:"space-between",}}>
             <MenuIcon sx={{cursor:"pointer"}} onClick={(e)=>{open ? setOpen(false):setOpen(true)}} />
             {!wide ?
                 <Search sx={{display:"flex",justifyContent:"flex-end"}} onClick={()=>wideSearch()}>
                     <SearchIcon sx={{color:"orange",fontSize:"30px"}} />
                 </Search>
                 :
                 <Search sx={{display:"flex",justifyContent:"flex-end",width:"41%",height:"40px"}} onMouseLeave={()=>{wideSearchClose();backgroundOrange()}}>
                     <SearchIcon sx={{color:"red",fontSize:"30px",marginTop:"7px"}} />
                 </Search>
 
             }
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        onClose={e =>setOpen2(false)}
        open={open2}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
             <Avatar />
         </Toolbar>:
                <Toolbar sx={{backgroundColor:"orange",display:"flex",justifyContent:"space-between",}}>
                <MenuIcon sx={{cursor:"pointer"}} onClick={(e)=>{open ? setOpen(false):setOpen(true)}} />
                {!wide ?
                    <Search sx={{display:"flex",justifyContent:"flex-end"}} onClick={()=>{wideSearch();backgroundDark()}}>
                        <SearchIcon sx={{color:"orange",fontSize:"30px"}} />
                    </Search>
                    :
                    <Search sx={{display:"flex",justifyContent:"flex-end",width:"40%",height:"60px"}} onMouseLeave={()=>wideSearchClose()}>
                        <SearchIcon sx={{color:"red",fontSize:"30px",marginTop:"30px"}} />
                    </Search>
    
                }
                <Avatar onClick={e=>setOpen2(true)} />
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        onClose={e =>setOpen2(false)}
        open={open2}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
            </Toolbar>}
   
    </AppBar>
  )
}

export default Navbar