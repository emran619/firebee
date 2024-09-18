import React from 'react'
import Star from '../../../../images/Start_Vector.png'

function Stars({ count }: any) {
    const stars: any = () => {
        const starElements = [];
        for (let i = 0; i < count; i++) {
            starElements.push(<img src={Star} key={i} alt="star" className='w-[16px] h-[17px]' />);
        }
        return starElements
    }
    return (
        < div className='flex gap-3'> {stars()}</div >
    )
}

export default Stars