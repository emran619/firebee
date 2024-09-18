import React from 'react'
import Line from './Line'

function QuestionOpend() {
    return (
        <>
            <div>
                <div className='flex justify-between items-center py-4'>
                    <p className='text-[22px] font-[500] py-3'>Is Firebee Safe?</p>
                    <div className='font-bold text-[30px]'>-</div>
                </div>
                <p className='font-[16px]'>Yes, Firebee is safe. Firebee meets the safety standards set by ICNIRP (International Commission on Non-Ionizing Radiation Protection). Firebee is 3000x less powerful than your average smartphone. Firebee uses an ultra-low signal that is completely safe for home use. The technology behind Firebee has been rigorously safety tested and has over 300,000 hours tested by users for efficacy and safety. </p>
            </div>
            <Line />
        </>
    )
}

export default QuestionOpend