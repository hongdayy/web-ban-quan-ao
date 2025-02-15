import React from 'react'
import Hero from '../components/home/Hero'
import LatestCollection from '../components/home/LatestCollection';
import BestSeller from '../components/home/BestSeller'
import OurPolicy from '../components/home/OurPolicy'
import NewsletterBox from '../components/home/NewsletterBox'
import Featured from '../components/home/Featured';
import Brands from '../components/home/Brand';
import Feedback from '../components/home/Feedback';


const Home = () => {
  return (
    <div>
     
      <Hero/>
      <Featured/>
      <LatestCollection/>
      <Brands/>
      <BestSeller/>
      <Feedback/>
      <OurPolicy/>
      <NewsletterBox/>
    </div>
  )
}

export default Home
