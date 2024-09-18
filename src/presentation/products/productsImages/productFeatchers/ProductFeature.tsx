import React from 'react'

function ProductFeature({ victor, content }: any) {
    return (
        <div className='w-[233px] h-[50px] text-stone-700 flex justify-between gap-5 items-center '>
            <img src={victor} alt="" className='' />
            <p>{content}</p>
        </div>
    )
}

export default ProductFeature