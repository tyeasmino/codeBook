import React from 'react'
import { signUp } from '../../apiServices/AuthServices'

const SignUp = () => {

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            const authDetail = {
                name: event.target.name.value,
                email: event.target.email.value,
                password: event.target.password.value
            }

            const data = await signUp(authDetail)
             
        } catch(e) {
            alert()
        }
    }




  return (
    <div className='max-w-screen-md shadow-violet-500 m-auto my-20 shadow-md p-20'>
        <form action='' onSubmit={handleSubmit} className='flex flex-col gap-5'>
            <div className='flex flex-col gap-2 shadow p-2'>
                <label className='text-[20px] font-semibold' htmlFor="name">Your Name</label> 
                <input className='bg-violet-50 rounded px-10 py-3 border border-violet-500' type="text" name='name'  />
            </div>
            <div className='flex flex-col gap-2 shadow p-2'>
                <label htmlFor="email" className='text-[20px] font-semibold' >Your Email</label>
                <input className='bg-violet-50 rounded px-10 py-3 border border-violet-500' type="email" name='email'  />
            </div>
            <div className='flex flex-col gap-2 shadow p-2'>
                <label htmlFor="password" className='text-[20px] font-semibold'>Your Password</label>
                <input className='bg-violet-50 rounded px-10 py-3 border border-violet-500' type="password" name='password'  />
            </div>
            <div>
                <button type='submit' className='bg-violet-500 text-white px-8 py-3 rounded-md'>SignUp</button>
            </div>
        </form>
    </div>

  )
}

export default SignUp