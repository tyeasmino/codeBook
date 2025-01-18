import React, { useEffect, useState } from 'react'
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import Rating from './Rating';
import { Link } from 'react-router';
import { useCart } from '../context/cartContext';

const Card = ({product}) => {

    const { cartList, addToCart, removeFromCart } = useCart();
    const [inCart, setInCart] = useState(false) 

    useEffect(() => {
        const cartItem = cartList.find((item)=>item.id == product?.id)
        console.log(cartItem);
        cartItem ? setInCart(true) : setInCart(false) 
    }, [cartList, product.id])

    
    return (
        <div className='card bg-red-500 max-w-[380px] rounded-md 
        shadow-md shadow-black overflow-hidden flex gap-3 flex-col'>

            <div className="top relative">
                <Link to={`/product/${product.id}`}>
                    <img className='w-full h-full object-cover' src={product.poster} alt={product.name} />
                    {/* {product.id} */}
                </Link>

     
     {
        product.best_seller ? <div className="absolute top-5 left-5 bg-orange-500  
        px-3 py-2 text-white rounded-md text-md">
            <h2>Best Seller</h2>
        </div> : ""
     }

            </div>

            <div className="bootom flex flex-col gap-3 p-3">
                
                <Link to={`/product/${product.id}`}>
                 <h2 className='text-2xl truncate text-gray-900 font-bold'>{product.name}</h2>
                </Link>
               
                <p className='text-md'>{product.overview.slice(0, 90)}...</p>
                
                <div className="flex gap-2 items-center text-yellow-400">
                    <Rating rating = {product.rating}/>
                    
                    <span className='bg-blue-200 px-2 rounded-md text-sm 
                    text-black'>{product.rating}</span>
                </div>

                <div className="flex items-center justify-between">
                    <p className='text-3xl text-black font-semibold'>${product.price}</p>
                    

                    { !inCart && 
                        <button onClick={() => addToCart(product)} className='flex items-center gap-2 
                        bg-blue-500 text-white px-3 py-2'>
                        Add to cart <IoIosAdd/>
                        </button>
                    } 
                    { inCart && 
                        <button onClick={() => removeFromCart(product)} className='flex items-center gap-2 
                        bg-white text-blue-500 px-3 py-2'>
                        Remove from cart <IoIosRemove/>
                        </button>
                    } 


                </div>
            
            </div>
        </div>
    )
}

export default Card