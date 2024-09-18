import React from 'react'

function Header() {
    return (
        <div className=' order-2 h-[100px] text-custom-text-colo text-center flex flex-col justify-between w-full md:h-[143px] md:order-1'>
            <h1 className='text-4xl	md:text-7xl '>What will Firebee do for me?</h1>
            <h5 className='text-xl md:text-2xl'>Firebee will help you gently nudge yourself into a different mental state</h5>
        </div>
    )
}

export default Header