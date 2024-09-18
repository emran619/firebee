import React from 'react'
import trueVictor from "../../../images/TrueVictor.png"
function Features() {
    const features = [
        '1 Firebeeheadband ',
        '1 Charging cable',
        '1 User manual'
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 justify-between mx-auto '>
            {features.map((feature, index) => (
                <div key={index} className='flex gap-6 mt-4 items-center md:justify-center'>
                    <img src={trueVictor} alt="" className='w-[40px] h-[40px] ' />
                    <p className='text-xl md:text-3xl text-left'>{feature}</p>
                </div>
            ))}
        </div>
    )
}

export default Features