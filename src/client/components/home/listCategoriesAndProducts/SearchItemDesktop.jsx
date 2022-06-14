import React from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, Typography, Paper } from '@mui/material';
// STYLES
import styled from '@emotion/styled';
// COMPONENTS
import ModalProductDesktop from './ModalProductDesktop';





export default function SearchItemDesktop({item, setMax}) {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <div key={item._id}>
        <Card sx={{ maxWidth: 250 }}>
            <CardMedia
                component="img"
                height="140"
                image={item.img}
                alt={item.title}
            />
            <CardContent>
                <Typography variant="h5">{item.title}</Typography>
                <Typography>{item.desc}</Typography>
                <Typography>{item.price} € / {item.unit}</Typography>
            </CardContent>
            <CardActions>
                <ModalProductDesktop item={item} />    
            </CardActions>
        </Card>
    </div>
  )
}
