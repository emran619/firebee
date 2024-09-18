import React from 'react'
import product1 from '../../../../images/Rectangle 27 (1).png'
import product2 from '../../../../images/Rectangle 616.png'
import product3 from '../../../../images/Rectangle 615.png'
import product4 from '../../../../images/Rectangle 618.png'
import product5 from '../../../../images/Rectangle 617.png'

function Products() {
    const images =
        [
            product1,
            product2,
            product3,
            product4,
            product5
        ]
    return (
        <div className='flex justify-between gap-2 -ml-1 md:-ml-0 md:gap-0 md:w-[604px] '>
            {
                images.map((image: string, index: number) =>
                    <img key={index} src={image} className='w-[54px] md:w-[100px]' />
                )
            }
            {/* <img src={product1} alt="" /> */}
        </div>
    )
}

export default Products