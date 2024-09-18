import React from 'react'
import image from '../../images/30Days.png'

function DaysMoney() {
    return (
        <div>
            <div className='container mx-auto bg-[#FBFCFB] mt-custom-margin flex flex-col md:flex-row md:items-center md:gap-20 p-14'>
                <img src={image} alt="" className='mx-auto my-10 w-[200px] h-[200px] md:w-[292px] md:h-[292px] ' />
                <div className='text-center md:text-left'>
                    <h1 className='text-4xl md:text-5xl mb-8'>30 Day Money Back Guarantee</h1>
                    <p className='text-xl md:text-2xl text-custom-text-color'>At Firebee we believe in building quality products that actually work. Firebee and its partners have invested over $85 million in research and development to create the highest quality wearable for customers to enjoy. If for any reason if you are not satisfied with your Firebee headband we will happily refund your purchase. </p>
                </div>
            </div>
        </div>
    )
}

export default DaysMoney