import React from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { IoMdLogIn } from "react-icons/io";
import './Header.css'
const Header = () => {
    return (
        <>
            <div className='Container'>
                <div className='head'>
                    <div>

                        <CiMenuBurger className='menuIcon' />
                    </div>
                    <div>

                        <h1 className='heading'>PRACTICAL</h1>
                    </div>
                </div>
                <div className='signinContainer'>

                    <div>

                        <IoMdLogIn className='loginIcon' />

                    </div>




                </div>

            </div>
        </>
    )
}

export default Header