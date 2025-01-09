import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import Card from '../components/Card'
import Testimonial from '../components/Testimonial'
import FAQ from '../components/FAQ'
import FeaturedeBooks from '../components/FeaturedeBooks/FeaturedeBooks'

const Home = () => {
  return (
    
    <section>


  {/* // json-server
  // npm install json-server --save-dev
  // npm install json-server-auth
  // npx json-server --watch data/db.json --port 8000
  */}

        {/* <Navbar/>  */}
        <HeroSection/>
        <FeaturedeBooks/>
        {/* <Card/> */}
        <Testimonial />
        <FAQ />
        {/* <Footer/> */}



    </section>
  )
}

export default Home