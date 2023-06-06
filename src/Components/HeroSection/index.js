import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { typoStyle } from '../ShopNow'
import Button from '@mui/material/Button';

 
const btnStyle ={margin:'1rem 0' }

function HeroSection() {
    return (
      <Stack alignItems='center' justifyContent='center' bgcolor='#F2F2F2'>
        
            <Typography style={typoStyle} sx={{fontSize: { xs: '20px', md: '48px' } }} >Your Best Value Products</Typography>
            <Typography sx={{fontSize: { xs: '14px', md: '18px' } ,display:{xs:'none',md:'flex'} }}  >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br /> eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
            <Button style={btnStyle} variant="contained">Shopnow</Button> 
            <Box >
                <img style={{width: '100%',height:'auto'}} src='images/hero_img.png' ></img>

            </Box>
            
        
      </Stack>
    )
    
}

export default HeroSection
