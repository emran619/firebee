import React from 'react'
import ProductFeature from './ProductFeature'
import image1 from '../../../../images/Union.png'
import image2 from '../../../../images/Vector_Erth.png'
import image3 from '../../../../images/Union (1).png'
import image4 from '../../../../images/Vector (1).png'

function ProductFeatures() {
    const Features = [
        {
            victor: image1,
            content: '30-day Money-back Guarantee'
        },
        {
            victor: image2,
            content: 'Free Shipping within USA'
        },
        {
            victor: image3,
            content: 'Signal Catalogue Updates Included'
        },
        {
            victor: image4,
            content: 'Customer Support via E-mail, Phone, and Chat'
        }
    ]
    return (
        <div className='hidden w-full md:grid grid-cols-1 space-y-3 mt-8 md:grid-cols-2 md:gap-8 '>
            {Features.map((feature: any, index: number) =>
                <ProductFeature key={index} victor={feature.victor} content={feature.content} />
            )}
        </div>
    )
}

export default ProductFeatures