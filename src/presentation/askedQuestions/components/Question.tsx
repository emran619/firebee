import React from 'react'
import Line from './Line'

function Question({ question }: any) {
    return (
        <>
            <div className='flex justify-between items-center py-4  '>
                <p className='text-[22px] font-[500]'>{question}</p>
                <div className='font-bold text-[30px]'>+</div>
            </div>
            <Line />
        </>
    )
}

export default Question