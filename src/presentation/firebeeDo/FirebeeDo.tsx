import React from 'react'
import { Content, Header } from './components'
import image from '../../images/_DP_1653 2.png'


function FirebeeDo() {
    return (
        <div className='bg-[#FBFCFB] '>
            <div className='container mx-auto mt-custom-margin pt-32 '>
                <div className=' flex gap-3 justify-start items-center flex-wrap'>
                    <Header />
                    <img src={image} alt="" className='order-1 mx-auto w-[375px] h-[356px] md:order-2 md:w-[598px] md:h-[524px]' />
                    <Content />
                </div>
            </div>
        </div>
    )
}

export default FirebeeDo