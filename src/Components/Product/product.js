import { Card ,CardMedia,CardContent, CardActions, Typography, IconButton  } from '@mui/material'
import React from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './styles.css'



const Product = ({product, onAddToCart}) => {
   console.log(product);
     
    return (
      
        <Card className='root'>
            <CardMedia className="media" image={product.image.url} title={product.name} />
            <CardContent>
                <div className='cardContent'>
                    <Typography variant='h5' gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant='h5'>
                        {product.price.formatted_with_symbol}
                    </Typography>
                </div>

                <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" component="p" />
            </CardContent>
            <CardActions disableSpacing className='cardActions'>
                <IconButton aria-label='Add to cart' onClick={() => onAddToCart(product.id,1)}>
                    <AddShoppingCartIcon />
                </IconButton>

            </CardActions>
        

        </Card>

             
   
    )
}

export default Product
