import React from 'react'
import logo from '../../../images/logoV.png'
function BottomFooter() {
    return (
        <>
            <header className='flex justify-between items-center text-white'>
                <img src={logo} alt="" className='w-[214px]' />
                <div className='hidden text-[#A4A4A5] md:block'>Privacy Policy Terms of Service</div>
            </header>
            <div className='text-[14px] text-[#A4A4A5] mt-6'>
                Copyright © 2020 Firebee Technologies, Inc. All rights reserved.
            </div>
            <div className='text-[14px] text-[#A4A4A5] mt-6  max-w-[900px] text-wrap'>
                The statements on this page have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease.
            </div>
        </>
    )
}

export default BottomFooter