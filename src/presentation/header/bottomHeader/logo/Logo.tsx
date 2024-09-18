import React from 'react'
import logo from '../../../../images/Vector.png'
import firebeeLogo from '../../../../images/firebee.png'
function Logo() {
    return (
        <div className='flex items-center gap-2'>
            <img src={logo} alt="" />
            <img src={firebeeLogo} alt="" />
        </div>)
}

export default Logo