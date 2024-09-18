import React from 'react'
import ProductActive from './productActive/ProductActive'
import Products from './products/Products'
import ProductFeatchers from './productFeatchers/ProductFeatchers'

function ProductsImages() {
    return (
        <div className=' pt-10 px-8'>
            <ProductActive />
            <Products />
            <ProductFeatchers />
        </div>
    )
}

export default ProductsImages