import React from 'react'
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';

import './index.css'

const pages = ['Living Room', 'BedRoom', 'Kitchen & Dining'];
const x = ['About', 'Blog', 'Support'];
function Footer() {
    return (
        <div className='footer'>
            <Stack direction="row">
            <Stack  flex={3} spacing={5} direction="row"  sx={{ display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (    
                        <Typography sx={{color:'white'}} textAlign="center" >{page}</Typography>
                    ))}
            </Stack> 

            <Box flex={.13}>
            <img width={30} height={30}  src='images/Logo.png' ></img>
            
            </Box>
            
                        
            <Typography
                variant="h6"
                noWrap
                component="div"
                flex={2}
                sx={{ display: {  sm: 'block', opacity:'0.7' } ,color:'white'}}
            >
                MAYNOOTH
            </Typography>

            <Stack flex={1} spacing={5} direction="row"  sx={{ display: { xs: 'none', md: 'flex' } }}>
                {x.map((p) => (    
                        <Typography sx={{color:'white'}} textAlign="center">{p}</Typography>
                    ))}
            </Stack> 

            </Stack>

            <Divider variant="middle" color="white" sx={{m:"2rem 0"}} />

            <Stack
              direction="row"
              spacing={5}
              alignItems="center"
              justifyContent="center"
              mt={2}
            >
             <GoogleIcon sx={{ color: "#fff" }} />
             <InstagramIcon sx={{ color: "#fff" }} />
             <TwitterIcon sx={{ color: "#fff" }} />
             <FacebookOutlinedIcon sx={{ color: "#fff" }} />
             
             
            </Stack>


        </div>
    )
}

export default Footer
