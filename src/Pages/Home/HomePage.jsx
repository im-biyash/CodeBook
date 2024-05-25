import React from 'react'
import { Hero } from './Components/Hero'
import ProductCard from '../../Components/ProductCard'
import FeaturedProduct from './Components/FeaturedProduct'
import Faq from './Components/Faq'
import Testimonial from './Components/Testimonials'
import Footer from './Components/Footer'
const HomePage = () => {
  return (
    <div className='dark:bg-slate-800'>
    <Hero/>
<FeaturedProduct/>
<Faq/>
<Testimonial/>
<Footer/>
    </div>
  )
}

export default HomePage
