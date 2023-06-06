import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: {xs:'100%' , md:'620px '} }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="190"
          image="images/Card_1.png"
          alt="green iguana"
          width="300"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Home for Designer Sectionals
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
            Take a look
        </Button>
      </CardActions>
    </Card>
  );
}