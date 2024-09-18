import React from 'react'
import youtube from '../../../images/Vy.png'
import twiter from '../../../images/Vt.png'
import faceBook from '../../../images/Vector (f).png'
import instagram from '../../../images/Vi.png'
import imageP from '../../../images/vP.png'

function TopFooter() {
    const images = [
        youtube,
        twiter,
        faceBook,
        instagram,
        imageP,
    ]
    return (
        <div className='px-8 w-[80%] text-white grid grid-cols-2 md:grid-cols-3 gap-8 md:w-[60%]  '>
            <div className='text-white'>
                <h1 className='text-[24px]'>About</h1>
                <div className='w-[78px] text-wrap'>Home Product</div>
            </div>
            <div className='text-white'>
                <h1 className='text-[24px]'>Support</h1>
                <div className='w-[78px] text-wrap'>Activate Login</div>
            </div>
            <div className='text-white'>
                <h1 className='text-[24px]'>Find Us On</h1>
                <div className='  flex gap-4'>
                    {images.map((image, index) =>
                        <img src={image} key={index} className='mt-3' />
                    )}
                </div>
            </div>
        </div>
    )
}

export default TopFooter