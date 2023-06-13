import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function MostPopularCard() {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="images/Sofa.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography display={"flex"} justifyContent={"center"} gutterBottom variant="h5" component="div">
            Green Dresser
          </Typography>
          <Typography display={"flex"} justifyContent={"center"} variant="body1" color="text.secondary">
            $500
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}