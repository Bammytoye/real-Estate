import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo.svg'

function Header() {
    return (
        <header className='py-3 border-b mb-12'>
            <div className='container mx-auto flex justify-between items-center'>
                {/* logo */}
                <Link to='/'>
                    <img src={Logo} alt="HomeLand Logo" />
                </Link>

                {/* button */}
                <div className='flex space-x-6 items-center'>
                    <Link to='/login' 
                        className='hover:text-violet-900 transition'
                        >
                    Log In
                    </Link>
                    
                    <Link to='/signup' 
                        className='bg-violet-700 hover:bg-violet-900 text-white px-4 py-2 rounded-lg transition'
                        >
                        Sign Up
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header