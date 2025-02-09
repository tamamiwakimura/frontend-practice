import React from 'react'
import AppBar from '../components/app-bar'
import { Box, Button, Container, Typography } from '@mui/material'

const Home = () => {
  return (

    <>
      <AppBar />
      <Box sx={{ backgroundColor:"#F5F7FA" }}>
        <Container sx={{ display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <Box sx={{justifyContent:"space-between" }}>
            <Typography variant='h2' >Lessons and insights</Typography>
            <Typography variant='h2' sx={{color:'#4CAF4F'}}>from 8 years</Typography>
            <Typography variant='subtitle1' sx={{color:'#717171'}}>Where to grow your business as a photographer: site or social media?</Typography>
          <Box sx={{py:2}}>
            <Button variant="contained" sx={{ backgroundColor: '#4CAF4F', color: 'white',textTransform:"none", py: 1 ,px:4}}>Register</Button>
          </Box>
          </Box>
          <Box component="img" src="Illustration.svg" alt="" sx={{ p: 5 ,m:6 }}/>
        </Container>
        </Box>


      <Box sx={{ backgroundColor:"white" ,py:5}}>
      <Container >
          <Box sx={{display:"flex", justifyContent:"center" ,flexDirection:"column", alignItems: "center"}}>
            <Typography variant='h4' sx={{color:"#4D4D4D" , fontWeight:"bold" ,p:1}}>Our Clients </Typography>
            <Typography variant='subtitle1' sx={{color:"#4D4D4D" }}>We have been working with some Fortune 500+ clients </Typography>
          </Box>
          <Box sx={{display:"flex", justifyContent:"space-between", mt: 4, flexWrap: "wrap"}}>
            <Box component="img" src="Logo (1).svg" alt="" />
            <Box component="img" src="Logo (2).svg" alt="" />
            <Box component="img" src="Logo (3).svg" alt="" />
            <Box component="img" src="Logo (4).svg" alt="" />
            <Box component="img" src="Logo (5).svg" alt="" />
            <Box component="img" src="Logo (6).svg" alt="" />
            <Box component="img" src="Logo (7).svg" alt="" />
          </Box>
          <Box sx={{display:"flex", justifyContent:"center" ,flexDirection:"column", alignItems: "center" ,mt:7}}>
            <Typography variant='h4' sx={{color:"#4D4D4D" , fontWeight:"bold" ,p:1}}>Manage your entire community </Typography>
            <Typography variant='h4' sx={{color:"#4D4D4D" ,fontWeight:"bold" }}>in a single system </Typography>
            <Typography variant='subtitle1' sx={{color:"#4D4D4D",p:1 }}>Who is Nextcent suitable for?</Typography>
          </Box>
        </Container>
        
      </Box>
      
    </>
    
  )
}

export default Home