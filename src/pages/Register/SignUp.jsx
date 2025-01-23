import React from 'react'
import { signUp } from '../../apiServices/authServices';
import { useNavigate } from 'react-router';

const SignUp = () => {

    const navigate = useNavigate()
    const handelSubmit = async (event) => {

        event.preventDefault();
        try {
            const authDetail = {
                name: event.target.name.value,
                email: event.target.email.value,
                password: event.target.password.value
            }

            const data = await signUp(authDetail);
            data.accessToken? navigate("/login") : alert("error"); 

  
        } catch {
            alert("")
        }

    }

    return (
        <div>
            <form onSubmit={handelSubmit} action="" className='flex flex-col gap-5'>
                <div className="">
                    <input className='bg-blue-500' type="text" name='name' placeholder='Name' />
                </div>
                <div className="">
                    <input className='bg-green-700' type="email" name='email' placeholder='Enter Email' />
                </div>
                <div className="">
                    <input className='bg-red-700' type="password" name="password" id="" placeholder='EnterPassword' />
                </div>

                <button className='bg-yellow-300' type='submit'>SignUp</button>
            </form>
        </div>
    )
}

export default SignUp