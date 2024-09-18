import React from 'react'



function Card({ dataCard }: any) {
    return (
        <div>
            <div className=' bg-[#FBFBFD] flex flex-col md:flex-row md:pt-8 md:gap-6 p-4 min-h-[210px]  '>
                {dataCard.imageSize ?
                    <img src={dataCard.image} alt="" className='mx-auto  w-[80px] h-[80px] md:w-[59px] md:h-[58px] ' />
                    :
                    <img src={dataCard.image} alt="" className='mx-auto  w-[80px] h-[80px] md:w-[100px] md:h-[100px] ' />
                }
                <div className='text-center md:text-left'>
                    <p className='text-left mt-4 md:text-xl text-custom-text-color'>{dataCard.text} </p>
                </div>
            </div>
        </div>
    )
}

export default Card