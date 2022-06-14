import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Typography, Paper } from '@mui/material';
// STYLES
import styled from '@emotion/styled';
// COMPONENTS
import ModalProductMobile from './ModalProductMobile';





export default function SearchItemMobile({item}) {


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


  return (
    <div key={item._id}>
        <Card sx={{ maxWidth: 200 }}>
            <CardMedia
                component="img"
                sx={{width: 120}}
                image={item.img}
                alt={item.title}
            />
            <CardContent>
                <Typography variant="h6">{item.title}</Typography>
                <Typography>{item.desc}</Typography>
                <Typography>{item.price} € / {item.unit}</Typography>
            </CardContent>
            <CardActions>
                <ModalProductMobile item={item} />    
            </CardActions>
        </Card>
    </div>
  )
}
