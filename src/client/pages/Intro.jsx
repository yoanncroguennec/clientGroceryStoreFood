import React from 'react'
import { Container } from '@mui/system'
import { CircleLoader } from 'react-spinners'
// REACT-SLICK
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
// DATA
import { dataImgsSlideIntro } from '../data/home/dataImgsSlideIntro'



export default function Intro() {

    const settings = {
        autoplay: true,
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1, // Montrer le nombre de Slide
        //   slidesToScroll: 4,
        //   initialSlide: 0,
    }

    setTimeout(() => {
        document.location.href = "http://localhost:3000/home";
    }, 6000)

    return (
        <Container>
            <Slider {...settings}>
                {dataImgsSlideIntro.map((dataImgSlideIntro) => {
                return(
                    <Container sx={{height: "100%", width: "100px"}}>
                    <img style={{border: "5px solid black", height: "250px", width: "100%"}} src={dataImgSlideIntro.img} alt={dataImgSlideIntro.name} />
                    </Container>
                )
                })}
            </Slider>

            <div style={{margin: "0 auto", height: 50, width: 200, padding: 50}}>
                <CircleLoader size={100} color={"#3d2514"} /> 
            </div>
        </Container>
    )
}
