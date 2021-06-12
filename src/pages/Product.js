import React from 'react'
import {useParams} from 'react-router-dom'

import Tabule from '../components/Tabule'
import Images from '../components/Images'
import Cart from '../components/Cart'

const Product = (props) => {
    const {client, addToCart, openCart} = props
    const {handle} = useParams()
    const product = props.products.find((p) => p.handle === handle)

    if (product) {
        return (
            <div className="product">
                <Cart openCart={openCart} />
                <Images images={product.images} />
                <div className="vetev">
                    <Tabule
                        product={product}
                        client={client}
                        addToCart={addToCart}
                    />
                </div>
            </div>
        )
    } else {
        return <div>loading...</div>
    }
}

export default Product
