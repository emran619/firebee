import React from 'react'
import image1 from '../../../images/boxCompany1.png'
import image2 from '../../../images/boxCompany2.png'
import image3 from '../../../images/boxCompany3.png'
import image4 from '../../../images/boxCompany4.png'
import image5 from '../../../images/boxCompany5.png'
import image6 from '../../../images/boxCompany6.png'


function Companies() {
    const images = [image1, image2, image3, image4, image5, image6]
    return (
        <div className='w-[292px] h-[153.61px] md:w-[938.61px] md:h-[60px] flex justify-between mx-auto mt-10 flex-wrap' >
            {images.map((image: any, index: number) => (
                <img src={image} alt="" key={index} className='w-[89.36px] h-[48.31px] md:w-[110.98px] md:h-[60px]' />
            ))}
        </div>
    )
}

export default Companies