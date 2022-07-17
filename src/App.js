import {Box,Stack} from '@mui/material';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import SidebarIcons from './components/SidebarIcons';
import {useState} from 'react';
import MiddleSide from './components/MiddleSide';

function App() {

  const [open,setOpen] = useState(false);

  return (
    <Box>
        <Navbar open={open} setOpen={setOpen} />
        <Stack direction="row" >
          {open ? <Sidebar  /> :
          <SidebarIcons /> } 
          <MiddleSide />
        </Stack>
    </Box>
  );
}

export default App;
