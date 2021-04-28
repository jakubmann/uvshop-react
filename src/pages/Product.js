import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Tabule from '../components/Tabule'
import Images from '../components/Images'
import Cart from '../components/Cart'

const Product = (props) => {
    const { handle } = useParams()
    const product = props.products.find(p => p.handle === handle)

    if (product){
        return (
            <div className="product">
                <Images images={product.images} />
                <div className="vetev">
                    <Tabule product={product} client={props.client} addToCart={props.addToCart}/>
                </div>

                <Cart />
            </div>
        )
    } else {
        return (<div>loading...</div>)
    }
}

export default Product