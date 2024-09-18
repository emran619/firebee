import React from 'react'

function Header() {
    return (
        <div className='text-center text-custom-text-color h-[123px] flex flex-col justify-between'>
            <h1 className='text-4xl md:text-5xl'>Firebee Signals</h1>
            <h4 className='text-xl md:text-2xl mt-5 '>A signal for every situation</h4>
        </div>
    )
}

export default Header