import React from 'react'
import { IoIosStar } from "react-icons/io";
import { IoStarOutline } from "react-icons/io5";
import Index from './../route/Index';

const Rating = ({rating}) => {

// console.log('rat', rating)

const newRatingArr = Array(5).fill(false)
console.log(newRatingArr)

for(var i=0; i < rating; i++){
    newRatingArr[i] = true
}

    return (
        <div className='flex items-center gap-2'>
            {
                newRatingArr.map((ratingArr, index)=>(
                    <article key={index}>
                        {
                            ratingArr? 
                            <IoIosStar className='text-[20px]' /> 
                            : <IoStarOutline className='text-[20px]'/>
                        }
                    </article>
                ))
            }

           
        </div>
    )
}

export default Rating