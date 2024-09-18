import React from 'react'
import user from '../../../images/VectorUser.png'
import Logo from './logo/Logo'
import Navigation from './navigation/Navigation'
import showNavigation from '../../../images/HiddenNav_Victor.png'
function BottomHeader() {
    return (
        <>
            <div className='p-4 h-[76px] bg-white flex items-center justify-between md:h-[100px]  md:p-8' >
                <div className='flex items-center'>
                    <Logo />
                    <Navigation />
                </div>
                <div className='flex items-center'>
                    <button className='w-[112px] h-[39px] text-white rounded-full  flex justify-center items-center bg-green-500 mr-3 md:mr-8 md:w-[154px] md:h-[65px]'>Buy Now</button>
                    <div className='hidden h-[53px] w-[53px] bg-blue-500 text-white rounded-full  md:flex justify-center items-center '>
                        <img src={user} alt="" className='h-[25px] w-[25px]' />
                    </div>
                    <img src={showNavigation} alt="" className=' md:hidden' />
                </div>
            </div>
        </>
    )
}

export default BottomHeader