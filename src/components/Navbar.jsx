import React, { useEffect, useState } from 'react'
import { FaBookTanakh } from "react-icons/fa6";
import { MdOutlineDarkMode } from "react-icons/md";
import { TiShoppingCart } from "react-icons/ti";
import { FaSearchengin } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { Link, useNavigate } from 'react-router';
import Search from './Search';

import { MdOutlineWbSunny } from "react-icons/md";
import { useCart } from '../context/cartContext';

const Navbar = () => {

  const token = JSON.parse(sessionStorage.getItem("token"))
  const [showSearch, setShowSearch] = useState(false)
  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")) || false);
  const { cartList } = useCart()

  // state management er hook 
  const [showProfileMenu, setShowProfileMenu] = useState(false)
  const handleProfile = () => {
    if (showProfileMenu === true) {
      setShowProfileMenu(false)
    } else {
      setShowProfileMenu(true)
    }
  }



  const handleSearch = () => {
    if (showSearch === true) {
      setShowSearch(false)
    } else {
      setShowSearch(true)
    }
  }
  const navigate = useNavigate()
  const handleLogout = () => {
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("cbid")
    navigate("/login")
  }
  //for Dark
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode])

  return (
    <section>
      <nav className='flex justify-between items-center p-5 sm:px-8 md:px-10 xl:px-[50px] border-b'>
        <Link to="/">
          <div className="left flex gap-2 items-center font-bold text-xl">
            <div className="logo">
              <FaBookTanakh />
            </div>
            <div className="logoText dark:text-dark_p">
              CodeBook
            </div>
          </div>
        </Link>

        {/* Menu List */}
        <div className="menu-list hidden xl:block">
          <ul className='flex gap-8'>
            <li> <Link to="/">Home</Link> </li>
            <li>About Us</li>
            <li><Link to="/books"> Books </Link></li>
            <li>Contact Us</li>
          </ul>
        </div>


        <div className="right flex gap-5 items-center font-bold text-2xl">

          {/*-------- Dark Icon ------------------------------------*/}

          <p onClick={() => setDarkMode(!darkMode)} className=' cursor-pointer text-[25px]'>

            {
              darkMode ? <MdOutlineWbSunny /> : <MdOutlineDarkMode />
            }

          </p>



          <FaSearchengin onClick={handleSearch} />

          <Link to="cart/" className='relative'>
            <TiShoppingCart />
            <span className='absolute -right-3 -top-3 bg-red-500 
            w-[25px] h-[25px] text-[10px] text-white border-2 border-white
             rounded-full flex items-center justify-center'>{cartList.length}</span>
          </Link>


          <div className='relative'>

            <FaRegUserCircle onClick={handleProfile} />


            {showProfileMenu && <ul className='text-[14px] shadow-md rounded w-[150px] font-semibold px-3 py-1 bg-white right-5 top-10 absolute dark:bg-dark'>
              <li>All eBooks</li>
              {token ?
                <>
                  <li onClick={handleLogout}>Logout</li>
                </>

                :
                <>
                  <li> <Link to="/login">Login</Link></li>
                  <li> <Link to="/signUp">Register</Link></li>
                </>}

            </ul>
            }

          </div>
        </div>
      </nav>

      {showSearch && <Search setShowSearch={setShowSearch} />}
    </section>
  )
}

export default Navbar