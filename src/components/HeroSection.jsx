import React from 'react'
import heroImg from '../assets/hero.jpg' 
import { Link } from 'react-router'


const HeroSection = () => {
  return (
    <section className='heroSection max-w-screen-lg m-auto md:flex gap-10 justify-between items-center p-10'>
      <div className="left mb-10 md:w-1/2 flex flex-col gap-5">
        <h1 className='text-2xl md:text-4xl font-bold dark:text-red-500'>The Ultimate eBook Store</h1>
        <p className='text-xl'>CodeBook is the world's most popular and authoritative source for computer science ebooks. Find ratings and access to the newest books digitally.</p>

        <Link to="/products">
          <button className='bg-blue-600 font-semibold px-5 py-2 w-fit rounded-md hover:bg-blue-700 text-white'> Explore eBooks </button>
        </Link>

        <Link></Link>

      </div>
      <div className="right md:w-1/2">
        <img src={heroImg} className='rounded-md object-cover' alt="" />
      </div>
    </section>
  )
}


export default HeroSection