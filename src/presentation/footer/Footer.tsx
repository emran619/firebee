import React from 'react'
import { BottomFooter, TopFooter } from './components'

function Footer() {
  return (
    <div className='mt-custom-margin bg-[#12151A] py-10'>
      <div className='container mx-auto'>
        <TopFooter />
        <hr className='my-5' />
        <BottomFooter />
      </div>
    </div>
  )
}

export default Footer