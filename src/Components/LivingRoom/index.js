import { Box, Typography , Stack } from '@mui/material'
import React from 'react'
import LivingCategory from '../LivingCategory'
import { typoStyle } from '../ShopNow'

function LivingRoom() {
    return (
      
        <>
        <Typography fontFamily='Roboto' sx={{fontSize: { xs: '24px', md: '48px' } }} style={typoStyle}>LIVING ROOM</Typography>

        <Box display={'flex'} alignItems='center' justifyContent='center' >
             <Stack sx={{maxWidth:{xs:'100%',md:'1268px'}}} gap={5}  direction={'row'} flexWrap={'wrap'}>
               <LivingCategory />
               <LivingCategory />
               <LivingCategory />
               <LivingCategory />
               <LivingCategory />
               <LivingCategory />
            </Stack>
        </Box>
        
    </>
          
       
    )
}

export default LivingRoom
