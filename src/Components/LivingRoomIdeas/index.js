// import React from 'react'
// import { Box} from '@mui/system';
// import { Typography } from '@mui/material';
// import { typoStyle } from '../ShopNow';

// function LivingRoomIdeas() {
//     return (
//        <Box width={'100%'} height="auto" >
//          <Box>
//             <Typography sx={{fontSize: { xs: '25px', md: '48px' } }} >Living Room Ideas</Typography>
//             <img 
//             image="images/Card_i.png" 
//             height={190} />
//          </Box>


//          <Box>

//          </Box>
//        </Box>
//     )
// }

// export default LivingRoomIdeas

import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { CardActionArea, Stack } from '@mui/material';


import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { typoStyle } from '../ShopNow';



function generate(element: React.ReactElement) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}


export default function LivingRoomIdeas() {
  const theme = useTheme();
 

  return (
  <>
  <Stack  bgcolor='#F2F2F2' margin={"20px 0"} alignItems={'center'} justifyContent={'center'}  flexDirection={'row'}>
    <Box padding={"0 30px"}>
    <Typography  sx={{fontSize: { xs: '20px', md: '48px' } }}  style={typoStyle}>Living Room Ideas</Typography>
       <Card   sx={{ maxWidth: 641 ,marginBottom:6 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image="images/Card_1.png"
          alt="green iguana"
          
        />
      </CardActionArea>
     
    </Card>
    </Box>
    <Box alignItems='center'  sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
          Feature that is amazing
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br /> do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>

      <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
       
            <List >
              {generate(
                <ListItem>
                  <ListItemIcon>
                    <FiberManualRecordIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Benefit of feature "
                  />
                </ListItem>,
              )}
            </List>
         
    </Box>
         
        </CardContent>
     
         <Button  variant="contained">Shop Living Room </Button>
      </Box>

      </Stack>
    
      </>
   
  );
}
