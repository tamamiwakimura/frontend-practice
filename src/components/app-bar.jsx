import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, Button, Container } from '@mui/material';

export default function Appbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#F5F7FA', color: 'black',boxShadow:'none' }}>
        <Toolbar variant="dense">
          <Container sx={{ display:"flex" ,justifyContent:"space-between",alignItems:"center",py:2}} >
            <img src="Logo.svg"  />
            <Box sx={{ display:"flex",justifyContent:"space-between",gap:2 }}>
              <Typography >Home</Typography>
              <Typography >Service</Typography>
              <Typography >Feature</Typography>
              <Typography >Product</Typography>
              <Typography >Testimonial</Typography>
              <Typography >FAQ</Typography>
            </Box>
            <Box sx={{display:"flex",gap:1}}>
              <Button sx={{  color: '#4CAF4F' }} >Login</Button>
              <Button variant="contained" sx={{ backgroundColor: '#4CAF4F', color: 'white' }}>Sign up</Button>

            </Box>
          </Container>
        </Toolbar>
        

        
      </AppBar>
    </Box>
  );
}
