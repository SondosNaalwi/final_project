import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function LivingCategory() {
  return (
    <Card sx={{ maxWidth: {xs:'100%' , md:'388px '} }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image="images/Sofa.png"
          alt="green iguana"
        />
        <CardContent >
          <Typography  display={'flex'} justifyContent='center' gutterBottom variant="h5" component="div">
            Sofas
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
