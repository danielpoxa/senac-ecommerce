// components/ProductCard.js
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const ProductCard = ({ product }) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image={product.image}
                alt={product.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.description}
                </Typography>
                <Typography variant="h6" color="text.primary">
                    ${product.price}
                </Typography>
                <Button size="small" variant="contained" color="primary">
                    Comprar
                </Button>
            </CardContent>
        </Card>
    );
};

export default ProductCard;