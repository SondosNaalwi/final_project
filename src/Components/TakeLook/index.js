import { Stack,Box,Typography } from '@mui/material'
import React from 'react'
import MultiActionAreaCard from '../Card'
import { typoStyle } from '../ShopNow'

function TakeLook() {
    return (
        <>
             <Typography sx={{fontSize: { xs: '20px', md: '48px' } }} style={typoStyle}>Looking for What’s New in Store?</Typography>

            <Box  display='flex' alignItems='center' justifyContent='center'>
                <Stack  sx={{maxWidth:{xs:'100%',md:'1280px' }, flexWrap:{xs:'wrap', md:'nowrap'} }} gap={3} flexDirection={'row'} flexWrap={'wrap'} >

                    <MultiActionAreaCard />
                    <MultiActionAreaCard />
                    <MultiActionAreaCard />
                   
                </Stack>
            </Box>
        </>
       
        
    )
}

export default TakeLook
