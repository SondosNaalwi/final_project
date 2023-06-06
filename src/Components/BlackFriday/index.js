import { Stack, Box , Typography } from '@mui/material'
import React from 'react'


function BlackFriday() {
    return (
        <>
        <Stack  sx={{ flexDirection: { xs: 'column', md: 'row' } }}  alignItems='center' justifyContent='center' >      

            <Box margin="50px 0">
                <img style={{width: '100%',height:'auto'}} src='images/Blackfriday.png' ></img>
            </Box>
            <Box sx={{ height: { xs: '300px', md: '724px' }  , width: { xs: '300px', md: '440px' } }} flexDirection='column' display={'flex'} alignItems='center' justifyContent='center'   bgcolor='#F2F2F2'>
                <Typography  sx={{ fontSize: { xs: '30px', md: '48px' } }}    > Clearance Sale</Typography>
                <Typography sx={{ fontSize: { xs: '25px', md: '40px' } }}  color='#842C68'   fontSize={40}  >Upto 60% off</Typography>
            </Box>

        </Stack>
        </>
    )
}

export default BlackFriday


