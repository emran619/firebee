import React from 'react'
import trueVictor from '../../../images/TrueVictor.png'

function Content() {
    const data = [
        'Can’t sleep? Turn on the deep sleep signal ',
        'Feeling tired? Turn on the alert signal ',
        'Feeling anxious? Turn on the calm signal',
        'Feeling unproductive? Turn on the focus signal ',
        'Feeling blue? Turn on the happy signal '
    ]
    return (
        <div className='order-3'>
            <div className=' mt-9 md:h-[346px] flex flex-col justify-between'>
                {data.map((dataItem: any, index: number) => (
                    <div key={index} className='flex gap-6 mt-4 items-center'>
                        <img src={trueVictor} alt="" className='w-[40px] h-[40px] ' />
                        <p className='text-xl md:text-3xl text-left'>{dataItem}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Content