import React from 'react'
import { CardContent, CardMedia, Typography } from '@mui/material'
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
// REACT-SLICK
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Container } from '@mui/system'
// HOOKS
import useFetch from "../../utils/hooks/useFetch";



export default function SlideFooterFeaturedProducts() {
  
  const {data, loading, error } = useFetch("/products?limit=10")
  // console.log(data);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const settings = {
      autoplay: true,
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 4, // Montrer le nombre de Slide
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  }

  return (
    <Container>
        <Typography sx={{textAlign: "center"}} variant={matches ? "h6" : "h4"} >Voici quelques produits sélectionnées minutieusement pour vous !!!</Typography>
      <Slider {...settings}>
        {data.map((item) => {
          return(
            <Container sx={{height: "100%", width: "100%"}}>
                <CardMedia
                    component="img"
                    height="140"
                    image={item.img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography variant="h5">{item.title}</Typography>
                    <Typography>{item.desc}</Typography>
                    <Typography>{item.price} € / {item.unit}</Typography>
                </CardContent>
            </Container>
          )
        })}
      </Slider>
    </Container>
  )
}
