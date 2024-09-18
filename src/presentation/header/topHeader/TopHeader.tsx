import React from 'react'
import backGroundImage from '../../../images/image_16.png'
import leftImage from '../../../images/image_15.png'
import leftSmallImage from '../../../images/image _S_17.png'
import rightBigImage from '../../../images/image_17.png'
import rightSmallImage from '../../../images/image_S_18.png'
function TopHeader() {
  return (
    <div
      style={{
        backgroundImage: `url(${backGroundImage})`,
      }}
      // justify-around items-center
      className='overflow-hidden h-16 bg-cover bg-no-repeat w-full flex relative items-center justify-between md:h-18 md:justify-around'>
      <img src={leftImage} alt="" className='hidden md:w-[692px] md:h-18 md:block' />
      <img src={leftSmallImage} alt="" className='w-[188px]  md:hidden' />
      <h1 className='text-white min-w-[212px] absolute left-1/2 -translate-x-1/2 text-center text-lg md:text-2xl md:translate-x-0 md:static md:min-w-[464px]'>Black Friday Sale - Save $100</h1>
      <img src={rightBigImage} alt="" className='hidden md:w-[692px] md:block md:h-18' />
      <img src={rightSmallImage} alt="" className='w-[188px]  md:hidden' />
    </div>
  )
}

export default TopHeader