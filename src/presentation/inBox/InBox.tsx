import React from 'react'
import image from '../../images/product image.png'
import { Companies } from './components'
import Features from './components/Features'
function InBox() {
    return (
        <div className='container mx-auto mt-custom-margin text-custom-text-color overflow-hidden'>
            <header className='w-fit text-4xl mx-auto md:text-5xl'>What’s in the box?</header>
            <img src={image} alt="" className='w-[346px] h-[232px] md:w-[824px] md:h-[519px] mx-auto mt-10' />
            <span className='text-lg mx-auto text-center block -mt-4'>FEATURED ON</span>
            <div className='w-[292px] mx-auto md:space-y-4 md:w-[1100px] md:h-[228px] md:space-y-8 '>
                <Companies />
                <hr />
                <Features />
            </div>
        </div>
    )
}

export default InBox