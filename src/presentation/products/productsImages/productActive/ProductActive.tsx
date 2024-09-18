import React from 'react'
import product from '../../../../images/product with ligh 1.png'
import icnirp from '../../../../images/image 165.png'
import fc from '../../../../images/Group 811.png'
function ProductActive() {
    return (
        <div>
            <div className='flex gap-6 ml-2 -mb-2 md:-mb-8 md:ml-8'>
                <img src={icnirp} alt="" className='h-[74px] w-[74px] md:h-[112px] md:w-[112px]' />
                <img src={fc} alt="" className='h-[74px] w-[74px] md:h-[112px] md:w-[112px]' />
            </div>
            <img src={product} alt="" />
        </div>
    )
}

export default ProductActive