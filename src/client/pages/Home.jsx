import React, { useEffect } from 'react'
// COMPONENTS
import SlideImgsSliderHeader from '../components/home/slideImgsSlider/Index'
import SlideTextHeader from '../components/home/SlideTextHeader'
import ListCategoriesAndProducts from '../components/home/listCategoriesAndProducts'
import SlideFooterFeaturedProducts from '../components/home/SlideFooterFeaturedProducts'
import RotateTheEarth from '../components/home/RotateTheEarth'
// ROUTES
import Navbar from "../routes/navbar/Index";
import Footer from '../routes/Footer'



export default function Home() {
  return (
    <>
      <Navbar />
        <SlideImgsSliderHeader />
        <SlideTextHeader />
        <ListCategoriesAndProducts />
        <SlideFooterFeaturedProducts />
        {/* <RotateTheEarth /> */}
      <Footer />
    </>
  )
}
