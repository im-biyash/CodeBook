import React from 'react'
import { Hero } from './Components/Hero'
import ProductCard from '../../Components/ProductCard'
import FeaturedProduct from './Components/FeaturedProduct'
import Faq from './Components/Faq'
// import {FeaturedProduct} from './Components/FeaturedProduct'
const HomePage = () => {
  return (
    <div className='dark:bg-slate-800'>
    <Hero/>
<FeaturedProduct/>
<Faq/>
    </div>
  )
}

export default HomePage
