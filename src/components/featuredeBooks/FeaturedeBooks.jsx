import React, { useEffect, useState } from 'react'
import Card from '../Card'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getUpcommingProducts } from '../../apiServices/ProductServices';



const FeaturedeBooks = () => {

  const [productsList, setProductsList] = useState()

  useEffect(()=>{
    async function fetchUpcommingProduct() {
      try{
        const ucProduct = await getUpcommingProducts();
        setProductsList(ucProduct)

      }catch(error){
        alert(error)
      }
    }
    fetchUpcommingProduct()
  },[])


 
  var settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    // autoplaySpeed: 2000,
    

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
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
  };


  return (
    <section>
      <div className="p-10">
        
        <h2 className=' text-center text-[40px] 
        font-bold text-black underline underline-offset-4'>
          Featured eBooks</h2>
<br /><br />
 
 <div className="">
    <Slider {...settings}>
         {
          productsList?.map((product)=>(
            <article>
              <Card product={product}/>
            </article>
          ))
         }
       
    </Slider> 
  </div>

      </div>
    </section>
  )
}

export default FeaturedeBooks