import React from 'react'
import MultiActionAreaCard from '../Card';
import { Box, maxWidth } from '@mui/system';
import { Stack, Typography } from '@mui/material';

export const typoStyle = {display:'flex', alignItems:'center' ,justifyContent:'center', margin:'2rem 0'}

function ShopNow() {
    return (
    <>
        <Typography sx={{fontSize: { xs: '14px', md: '48px' } }} style={typoStyle}>Get some Inspiration from our refreshing ideas</Typography>

        <Box display={'flex'} alignItems='center' justifyContent='center' >
             <Stack sx={{maxWidth:{xs:'100%',md:'1280px'}}} gap={5}  direction={'row'} flexWrap={'wrap'}>
                <MultiActionAreaCard />
                <MultiActionAreaCard />
                <MultiActionAreaCard />
                <MultiActionAreaCard />
            </Stack>
        </Box>
        
    </>
        
       
        
                    
                

               
    )
}

export default ShopNow
