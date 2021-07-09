import React, {useState} from 'react'
//import {useHistory} from 'react-router'
import {useTranslation} from 'react-i18next'

import VariantSelector from './VariantSelector'

const Tabule = (props) => {
    const {product} = props
    const {t} = useTranslation()
    //default prop objects
    const variants = product.variants
    //const history = useHistory()

    const [quantity, setQuantity] = useState(1)
    const [variant, setVariant] = useState(
        variants.find((v) => v.available)?.id,
    )

    const handleQuantity = (e) => {
        setQuantity(e.target.value)
    }

    const handleVariant = (e) => {
        setVariant(e.target.value)
    }

    return (
        <div className="tabule">
            <div className="tabule__content">
                <h1 className="tabule__title">{product.title}</h1>
                <div className="tabule__desc">
                    {product.attrs.description.value}
                </div>
                <h2 className="tabule__price">{variants[0].price} Kč</h2>
                <div className="tabule__bottom">
                    {variant && (
                        <VariantSelector
                            handleVariant={handleVariant}
                            variants={variants}
                        />
                    )}
                    {variant && (
                        <input
                            className="tabule__quantity"
                            min="1"
                            type="number"
                            value={quantity}
                            onChange={handleQuantity}
                        />
                    )}

                    {variant && (
                        <button
                            className="tabule__add"
                            onClick={() => props.addToCart(variant, quantity)}
                        >
                            {t('buy')}
                        </button>
                    )}
                    {!variant && <p className="tabule__soldout">SOLD OUT</p>}
                </div>
            </div>
        </div>
    )
}

export default Tabule
