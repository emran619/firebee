import React from 'react'
import { Companies, DataCard, HeaderProductsData } from './components'
import toRight from '../../../images/Union__.png'
function ProductsData() {
    const dataCards = [
        {
            title: 'Firebee Starter Kit',
            subtracts: [
                'Access to 7 signals (and future signal releases)',
                'Firebee Headband ',
                '$19/month membership, first 2 months free'
            ],
            price: '$999.00',
            newPrice: '$379.00',
            buttonContent: 'MOST POPULAR KIT',
            text: (<p className='text-[#3F3631]'>
                The starter kit is the most affordable way to get started with Firebee. Pay $299 for the Firebee headband and access to the entire Firebee Signal Catalogue for only $19 a month. <span className='text-black font-[600]'>Membership can be cancelled anytime. No contracts. Satisfaction guaranteed.</span>
            </p>),
        },
        {
            title: 'Founder’s Kit',
            subtracts: [
                'Access to 7 signals (and future signal releases)',
                'Firebee Headband ',
                'No Monthly Membership'
            ],
            price: '$799.00',
            text: (<p className='text-[#3F3631]'>
                The Founders kit allows you to get the Firebee headband and lifetime access to the entire Firebee Signal Catalogue for a one-time payment. The Founders is kit can be paid through Affirm allowing customers to make small payments of $73 a month.            </p>),
        }
    ]

    return (
        <div className='flex flex-col gap-5 pb-3'>
            <HeaderProductsData />
            {dataCards.map((dataCard: any, i: number) => (
                <DataCard dataCard={dataCard} key={i} />
            ))}
            <button className='w-[345px] h-[60px] md:w-[548px] md:h-[79px] bg-green-500 mx-auto rounded-full flex justify-center items-center text-[24px] text-white gap-4'>Add to Cart<img src={toRight} alt="" /></button>
            <Companies />
        </div>
    )
}

export default ProductsData