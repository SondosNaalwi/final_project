import { Grid } from '@mui/material'
import React from 'react'
import Product from '../Product/product'




const Products = ({products, onAddToCart}) => {
    return (
        <main>
            <Grid justifyContent='center' container  spacing={4}>
                {products.map((product) => (
                  <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product}  onAddToCart={onAddToCart}/>
                  </Grid> 
                )
                
                
                )}

            </Grid>
        </main>
    )
}

export default Products
