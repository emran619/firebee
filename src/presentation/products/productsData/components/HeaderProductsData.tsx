import React from 'react'
import Stars from './Stars'

function HeaderProductsData() {
    return (
        <div className='text-center mx-auto md:mx-0 md:text-left'>
            <h1 className=' text-[#3F3631] text-4xl pt-10 font-bold '>Firebee Headband</h1>
            <div className='mx-auto mt-2 text-[#3F3631] flex justify-between items-center w-[251px] md:mt-6 md:mx-0'>
                <Stars count={4} />
                <div className='font-lg'>267 Reviews</div>
            </div>

        </div>
    )
}

export default HeaderProductsData