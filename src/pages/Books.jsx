import React from 'react'
import { CiMenuKebab } from "react-icons/ci";
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Footer from '../components/Footer';

const Books = () => {
  return (
    <section className=''>
        <Navbar/>
        
        <div className="header flex justify-between p-10 font-bold">
            <h1>All eBooks (15)</h1>
            <p className='bg-gray-200 p-3 rounded-md'><CiMenuKebab /></p>
        </div>

        <Card/>

        <Footer/>

    </section>
  )
}

export default Books