import React from 'react'
import trueVictor from '../../../../images/TrueVictor.png'

function DataCard({ dataCard }: any) {

    return (
        <div className='w-[98%] mx-auto flex flex-col gap-3 bg-white p-5 border border-solid border-[#C4C4C4] border[2px] rounded-xl md:w-full'>
            <header className='flex  flex-col md:flex-row md:justify-between '>
                <h1 className='text-[#3F3631] font-bold text-2xl'>{dataCard.title}</h1>
                <div className='flex gap-3'>
                    <p className='text-2xl text-stone-600 relative flex justify-center items-center'>{dataCard.price} {dataCard.newPrice && <span className='w-full h-[2px] absolute -rotate-[10deg] bg-red-500'></span>}</p>
                    {dataCard.newPrice && <p className='text-2xl text-stone-600'>{dataCard.newPrice}</p>}
                </div>
            </header>
            {dataCard.buttonContent &&
                <button className='bg-gradient-to-l from-[#275FD0] to-[#A34D9F] w-[244px] h-[30px] rounded-full text-white'>{dataCard.buttonContent}</button>}
            {dataCard.subtracts.map((subtract: string, index: number) => (
                <div key={index} className='flex gap-4' >
                    <img src={trueVictor} alt="" className='w-[28px] h-[28px]' />
                    <p className='text-[#3F3631]'>{subtract}</p>
                </div>
            ))}
            <p>{dataCard.text}</p>
        </div>
    )
}

export default DataCard