import React from 'react'
import {useHistory, useParams} from 'react-router-dom'

import Tabule from '../components/Tabule'
import Images from '../components/Images'
import Cart from '../components/Cart'
import {useTranslation} from 'react-i18next'

const Product = (props) => {
    const {client, addToCart, openCart, lang} = props
    const {t} = useTranslation()
    const {handle} = useParams()
    const product = props.products.find((p) => p.handle === handle)
    const history = useHistory()

    if (product) {
        return (
            <div className="product">
                <div className="product__navhome">
                    <h2
                        className="product__navhome-text"
                        onClick={() => history.push('/')}
                    >
                        {t('shop')}
                    </h2>
                </div>
                <div className="product__navtree">
                    <h2
                        className="product__navtree-text"
                        onClick={() =>
                            window.location.replace(
                                'https://www.ultravagant.cz',
                            )
                        }
                    >
                        {t('home')}
                    </h2>
                </div>
                <Cart openCart={openCart} />
                <Images images={product.images} />
                <div className="vetev">
                    <Tabule
                        lang={lang}
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
