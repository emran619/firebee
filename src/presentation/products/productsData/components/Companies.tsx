import React from 'react'
import visa from '../../../../images/Visa.png'
import masterCard from '../../../../images/MasterCard.jpg'
import AmericanExpress from '../../../../images/AmericanExpress.png'
import msestro from '../../../../images/Msestro.png'
import paypal from '../../../../images/Paypal.jpg'
import affirm from '../../../../images/Affirm.jpg'
function Companies() {
    const images = [visa, masterCard, AmericanExpress, msestro, paypal, affirm]
    return (
        <div className='flex w-[45px] mx-auto -translate-x-[270%] gap-2'>
            {images.map((img: any, index: number) => (
                <img src={img} key={index} className='w-[50px] h-[34px]' />
            ))}
        </div>
    )
}

export default Companies