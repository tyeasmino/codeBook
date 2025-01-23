import React, { useEffect, useState } from 'react'
import Rating from '../components/Rating'
import { Link, useParams } from 'react-router'
import { getProductDetails } from './../apiServices/ProductServices';
import { useCart } from '../context/cartContext';
import { IoIosAdd, IoIosRemove } from 'react-icons/io';



const ProductDetails = () => {

  const [product, setProductDetails] = useState()


  const { id } = useParams(); // Get the 'id' from the URL
  // products.find((p) => p.id === parseInt(id, 10)); // Find the product (parse id to integer)
  // const product = products.find((p)=>p.id === parseInt(id, 10));

  // if (!product) {
  //     return <div>Product not found!</div>; // Handle the case where the product isn't found
  // }

  useEffect(() => {
    async function fetchDetails() {
      try {
        const fDetails = await getProductDetails(id);
        setProductDetails(fDetails);

      } catch (error) {
        alert(error)
      }
    }
    fetchDetails()
  }, [])


  const { cartList, addToCart, removeToCart } = useCart();

  const [inCart, setInCart] = useState(false);

  useEffect(() => {
    const cartItem = cartList.find((item) => item.id == id)
    console.log(cartItem)

    if (cartItem) {
      setInCart(true)
    }
    else {
      setInCart(false)
    }
  }, [cartList, id])





  return (
    <section>

      <div className="px-5 py-8 md:p-10">
        <div className="top pb-5 flex flex-col gap-5">
          <h2 className='text-2xl font-bold 
                    text-center'>{product?.name}
          </h2>
          <p className='text-sm text-center'>{product?.long_description}</p>
        </div>
        <div className="btm md:flex gap-5">
          <div className="left flex-1">
            <img className='w-full h-full object-cover 
                        rounded-md' src={product?.poster} alt="" />
          </div>

          <div className="right flex-1 flex flex-col gap-3 pt-4 md:pt-0">
            <h2 className='text-2xl font-medium'>${product?.price}</h2>

            <Rating rating={product?.rating} />



            <div className="flex gap-5 items-center">

              {
                product?.best_seller ?
                  <span className='bg-amber-50 text-amber-500 uppercase  border py-1.5 px-3 rounded-md text-[10px] font-semibold'>BEST SELLER</span>
                  :
                  ""
              }

              {
                product?.in_stock ?
                  <span className='bg-slate-100 text-emerald-600 uppercase border 
                            py-1.5 px-3 rounded-md text-[10px] font-semibold'>INSTOCK</span>
                  : <span className='bg-slate-100 text-red-600 uppercase border 
                      py-1.5 px-3 rounded-md text-[10px] font-semibold'>OUT OF STOCK</span>
              }

              <span className='bg-slate-50 text-blue-500 uppercase border py-1.5 
                            px-3 rounded-md text-[10px] font-semibold'>{product?.size} MB</span>
            </div>

            {
              !inCart && <button onClick={() => addToCart(product)} className='flex items-center gap-2 
                w-fit bg-blue-500 text-white px-3 py-2'>
                Add to cart <IoIosAdd />
              </button>
            }

            {
              inCart && <button onClick={() => removeToCart(product)} className='flex items-center gap-2 
                                              w-fit  bg-green-500 text-white px-3 py-2'>
                Remove to cart <IoIosRemove />
              </button>
            }



            <p className='text-sm'>
              {product?.overview}
            </p>

          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetails