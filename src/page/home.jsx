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
            <Typography variant='subtitle1' sx={{color:"#717171",p:1 }}>Who is Nextcent suitable for?</Typography>
          </Box>
  
          <Box sx={{display:"flex", flexDirection:"row",justifyContent:"space-between",mt:8}}>
            <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",px:3}}>
              <Box component="img" src="Icon.svg" alt="" sx={{width:65,height:56}}/>
              <Typography variant='h5' sx={{color:"#4D4D4D" , fontWeight:"bold" ,p:1}}>Membership</Typography>
              <Typography variant='h5' sx={{color:"#4D4D4D" , fontWeight:"bold" ,p:1}}>Organisations </Typography>
              <Typography variant='subtitle1' sx={{color:"#717171",p:1,textAlign: "center"}}>Our membership management software provides full automation of membership renewals and payments </Typography>
            </Box>
            <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",px:3}}>
              <Box component="img" src="Icon (1).svg" alt=""/>
              <Typography variant='h5' sx={{color:"#4D4D4D" , fontWeight:"bold" ,p:1}}>National</Typography>
              <Typography variant='h5' sx={{color:"#4D4D4D" , fontWeight:"bold" ,p:1}}>Associations </Typography>
              <Typography variant='subtitle1' sx={{color:"#717171",p:1,textAlign: "center"}}>Our membership management software provides full automation of membership renewals and payments </Typography>
            </Box>
            <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",px:3}}>
              <Box component="img" src="Icon (2).svg" alt=""/>
              <Typography variant='h5' sx={{color:"#4D4D4D" , fontWeight:"bold" ,p:1}}>Clubs And</Typography>
              <Typography variant='h5' sx={{color:"#4D4D4D" , fontWeight:"bold" ,p:1}}>Groups </Typography>
              <Typography variant='subtitle1' sx={{color:"#717171",p:1,textAlign: "center"}}>Our membership management software provides full automation of membership renewals and payments </Typography>
            </Box>
          </Box>

          <Box sx={{display:"flex",flexDirection:"row"}}>
            <Box sx={{mt:15}}>
              <Box component="img" src="rafiki.svg" alt="" />
            </Box>
            <Box sx={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
              <Typography variant='h4' sx={{color:"#4D4D4D" , fontWeight:"bold" ,p:1}}>The unseen of spending three </Typography>
              <Typography variant='h4' sx={{color:"#4D4D4D" , fontWeight:"bold" ,p:1}}>years at Pixelgrade</Typography>
              <Typography variant='subtitle2' sx={{color:"#717171" ,p:1}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</Typography>
              <Box sx={{my:2,mx:1}}>
                <Button variant="contained" sx={{ backgroundColor: '#4CAF4F', color: 'white',textTransform:"none", py: 1.5 ,px:4}}>Learn More</Button>
              </Box>
            </Box>
          </Box>

        </Container>
        <Box sx={{backgroundColor:"#F5F7FA",py:8}}>
          <Container sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <Box>
              <Typography variant='h4' sx={{color:"#4D4D4D" , fontWeight:"bold" ,p:1}}>Helping a local </Typography>
              <Typography variant='h4' sx={{color:"#4CAF4F" , fontWeight:"bold" ,p:1}}>business reinvent itself </Typography>
              <Typography variant='subtitle1' sx={{color:"#18191F",p:1}}>We reached here with our hard work and dedication</Typography>
            </Box>
            

              <Box>
                <Box sx={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                  <Box>
                    <Box component="img" src="Icon (1).png" alt="" sx={{width:48,height:48}}/>
                  </Box>
                  <Box  sx={{display:"flex",flexDirection:"column",p:2}}>
                    <Typography variant='h5' sx={{color:"#4D4D4D" , fontWeight:"bold"}}>2,245,341 </Typography>
                    <Typography variant='subtitle1' sx={{color:"#717171"}}>Members </Typography>
                  </Box>
                
                </Box>
                <Box sx={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                  <Box>
                    <Box component="img" src="Icon (4).svg" alt="" />
                  </Box>
                  <Box sx={{display:"flex",flexDirection:"column",p:2}}>
                    <Typography variant='h5' sx={{color:"#4D4D4D" , fontWeight:"bold"}}>828,867</Typography>
                    <Typography variant='subtitle1' sx={{color:"#717171"}}>Event Bookings </Typography>
                    </Box>
      
              </Box>
              </Box>

              <Box>
              <Box sx={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                    <Box>
                      <Box component="img" src="Icon.png" alt="" sx={{width:48,height:48}}/>
                    </Box>
                    <Box sx={{display:"flex",flexDirection:"column",p:2}}>
                      <Typography variant='h5' sx={{color:"#4D4D4D" , fontWeight:"bold"}}>46,328 </Typography>
                      <Typography variant='subtitle1' sx={{color:"#717171"}}>Clubs </Typography>
                    </Box>
                    
                </Box>
                <Box >
                  <Box sx={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                    <Box>
                      <Box component="img" src="Icon (7).svg" alt=""  sx={{width:48,height:48}}/>
                    </Box>
                    <Box sx={{display:"flex",flexDirection:"column",p:2}}>
                      <Typography variant='h5' sx={{color:"#4D4D4D" , fontWeight:"bold"}}>1,926,436 </Typography>
                      <Typography variant='subtitle1' sx={{color:"#717171"}}>Payments </Typography>
                    </Box>
                      
                  </Box>
                </Box>
              </Box>
            
            </Container>
            
          </Box>
          <Box>
                <Container sx={{display:"flex",justifyContent:"space-between",alignItems:"center",my:10}}>
                  <Box>
                    <Box component="img" src="pana.svg" alt=""/>
                  </Box>
                  <Box >
                    <Typography variant='h5' sx={{color:"#4D4D4D" , fontWeight:"bold",my:3}}>How to design your site footer like we did </Typography>
                    <Typography variant='subtitle1' sx={{color:"#717171"}}>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida. </Typography>
                    <Button variant="contained" sx={{ backgroundColor: '#4CAF4F', color: 'white',textTransform:"none", py: 1.5 ,px:4,my:3}}>Learn More</Button>
                  </Box>
                </Container>
          </Box>


          <Box sx={{backgroundColor:"#F5F7FA",py:5}}>
            <Container sx={{display:"flex",justifyContent:"space-between"}}>
              <Box>
                <Box component="img" src="image9.svg" alt=""/>
              </Box>
              <Box sx={{display:"flex",ml:10,flexDirection:"column"}}>
                <Typography variant='subtitle1' sx={{color:"#717171",my:3}}>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna. </Typography>
                <Typography variant='h6' sx={{color:"#4CAF4F",fontWeight:"bold"}}>Tim Smith</Typography>
                <Typography variant='subtitle1' sx={{color:"#89939E",my:0.5}}>British Dragon Boat Racing Association </Typography>
                <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",my:3}}>
                  <Box component="img" src="Frame 10.svg" />
                  <Typography variant='h6' sx={{color:"#4CAF4F",fontWeight:"bold"}}>Meet all customers</Typography>
                  <Box component="img" src="Right.svg" alt=""/>
                </Box>
              </Box>
            </Container>
          </Box>
          <Box sx={{pb:5}}>
            <Container sx={{display:"flex",justifyContent:"space-between",flexDirection:"column"}}>
              <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",pt:8}}>
                <Typography variant='h4' sx={{color:"#4D4D4D",fontWeight:"bold"}}>Caring is the new marketing</Typography>
                <Typography variant='subtitle1' sx={{color:"#717171",textAlign: "center" ,py:2}}>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</Typography>
              </Box>
              <Box  sx={{display:"flex",flexDirection:"row"}}>
                <Box sx={{display:"inline-block",position:'relative',flexDirection:"row",mx:1.5}}>
                  <Box component="img" src="image 18.svg" alt=""/>
                  <Box sx={{ position: "absolute", bottom: "10px",backgroundColor:"white",left:20,right:20,borderRadius:2,transform:"translateY(20px)",boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",maxHeight: "100%"}}>
                    <Typography variant='subtitle1' sx={{color:"#717171",textAlign: "center" ,pt:2,fontWeight:"bold"}}>Creating Streamlined Safeguarding Processes with OneRen​</Typography>
                    <Box sx={{display:"flex",justifyContent:"center"}}>
                      <Typography variant='subtitle1' sx={{color:"#4CAF4F",textAlign: "center" ,pt:2,fontWeight:"bold"}}>Readmore​</Typography>
                      <Box component="img" src="Right.svg" alt=""/>
                    </Box>
                  
                  </Box>
                </Box>
                <Box sx={{display:"inline-block",position:'relative',flexDirection:"row",mx:1.5}}>
                  <Box component="img" src="image 19.svg" alt=""/>
                  <Box sx={{ position: "absolute", bottom: "10px",backgroundColor:"white",left:20,right:20,borderRadius:2,transform:"translateY(20px)",boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",maxHeight: "100%"}}>
                    <Typography variant='subtitle1' sx={{color:"#717171",textAlign: "center" ,pt:2,fontWeight:"bold"}}>What are your safeguarding responsibilities and how can you manage them?​</Typography>
                    <Box sx={{display:"flex",justifyContent:"center"}}>
                      <Typography variant='subtitle1' sx={{color:"#4CAF4F",textAlign: "center" ,pt:2,fontWeight:"bold"}}>Readmore​</Typography>
                      <Box component="img" src="Right.svg" alt=""/>
                    </Box>
                  </Box>
                </Box>
                <Box sx={{display:"inline-block",position:'relative',flexDirection:"row",mx:1.5}}>
                  <Box component="img" src="image 20.svg" alt=""/>
                  <Box sx={{ position: "absolute", bottom: "10px",backgroundColor:"white",left:20,right:20,borderRadius:2,transform:"translateY(20px)",boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",maxHeight: "100%"}}>
                    <Typography variant='subtitle1' sx={{color:"#717171",textAlign: "center" ,pt:2,fontWeight:"bold"}}>Revamping the Membership Model with Triathlon Australia​</Typography>
                    <Box sx={{display:"flex",justifyContent:"center"}}>
                      <Typography variant='subtitle1' sx={{color:"#4CAF4F",textAlign: "center" ,pt:2,fontWeight:"bold"}}>Readmore​</Typography>
                      <Box component="img" src="Right.svg" alt=""/>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",pt:8}}>
                <Typography variant='h3' sx={{color:"#263238",fontWeight:"bold",py:4}}>Pellentesque suscipit fringilla libero eu.</Typography>
                <Button variant="contained" sx={{ backgroundColor: '#4CAF4F', color: 'white',textTransform:"none", py: 1 ,px:4}}>Get a Demo</Button>
              </Box>
            </Container>
            
          </Box>



          <Box sx={{backgroundColor:"#263238",display:"flex",flexDirection:"row"}}>
            <Container>
              <Box sx={{display:"flex",justifyContent:"space-between"}}>
                <Box sx={{}}>
                  <Box component="img" src="Logox.svg" alt="" sx={{ py:8 }}/>
                  <Typography variant='subtitle2' sx={{color:"#F5F7FA",py:1}}>Copyright © 2020 Nexcent ltd.</Typography>
                  <Typography variant='subtitle2' sx={{color:"#F5F7FA",py:1}}>All rights reserved</Typography>
                  <Box component="img" src="Social Links.svg" alt="" sx={{py:8}}/>
                </Box>
                <Box sx={{py:8}}>
                  <Typography variant='h6' sx={{color:"#F5F7FA",py:1,fontWeight:"bold"}}>Company</Typography>
                  <Typography variant='subtitle2' sx={{color:"#F5F7FA",py:1}}>About us</Typography>
                  <Typography variant='subtitle2' sx={{color:"#F5F7FA",py:1}}>Contact us</Typography>
                  <Typography variant='subtitle2' sx={{color:"#F5F7FA",py:1}}>Pricing</Typography>
                  <Typography variant='subtitle2' sx={{color:"#F5F7FA",py:1}}>Testimonials</Typography>
                  
                </Box>
                <Box sx={{py:8}}>
                  <Typography variant='h6' sx={{color:"#F5F7FA",py:1,fontWeight:"bold"}}>Support</Typography>
                  <Typography variant='subtitle2' sx={{color:"#F5F7FA",py:1}}>Help center</Typography>
                  <Typography variant='subtitle2' sx={{color:"#F5F7FA",py:1}}>Terms of service</Typography>
                  <Typography variant='subtitle2' sx={{color:"#F5F7FA",py:1}}>Legal</Typography>
                  <Typography variant='subtitle2' sx={{color:"#F5F7FA",py:1}}>Privacy policy</Typography>

                </Box>
                <Box sx={{py:8}}>
                  <Typography variant='h6' sx={{color:"#F5F7FA",py:1,fontWeight:"bold"}}>Stay up to date</Typography>
                  <Box component="img" src="Input Field BG.svg" alt=""/>
                </Box>
              </Box>
            </Container>
          </Box>
      </Box>
      
    </>
    
  )
}

export default Home