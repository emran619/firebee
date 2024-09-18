import React from 'react'
import ProductsData from './productsData/ProductsData'
import ProductsImages from './productsImages/ProductsImages'

function Products() {
    return (
        <div className='bg-custom-color w-full overflow-hidden'>
            <div className='grid grid-cols-1 md:grid-cols-2 mx-auto pb-6'>
                <ProductsImages />
                <ProductsData />
            </div>
        </div>
    )
}

export default Products