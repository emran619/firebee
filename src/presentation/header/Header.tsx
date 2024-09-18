import React from 'react'
import { BottomHeader, TopHeader } from './index'

function Header() {
    return (
        <div className='w-full overflow-hidden'>
            <TopHeader />
            <BottomHeader />
        </div>
    )
}

export default Header