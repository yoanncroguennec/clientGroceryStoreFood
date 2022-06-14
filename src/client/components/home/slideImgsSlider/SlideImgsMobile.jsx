import React from 'react'
import { Container } from '@mui/system'
// REACT-SLICK
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
// DATA
import { imgsSlideHeader } from '../../../data/home/dataImgsSlideHeader'




export default function SlideImgsMobile() {
  const settings = {
      autoplay: true,
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 1, // Montrer le nombre de Slide
    //   slidesToScroll: 4,
    //   initialSlide: 0,
  }

  return (
    <Container>
      <Slider {...settings}>
        {imgsSlideHeader.map((imgSlideHeader) => {
          return(
            <Container sx={{height: "100%", width: "100%"}}>
              <img style={{border: "5px solid black", height: "250px", width: "100%"}} src={imgSlideHeader.img} alt={imgSlideHeader.name} />
            </Container>
          )
        })}
      </Slider>
    </Container>
  )
}
