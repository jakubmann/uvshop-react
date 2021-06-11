import React, {useState} from 'react'
import {useHistory} from 'react-router'
import VariantSelector from './VariantSelector'

const Tabule = (props) => {
    //default prop objects
    const product = props.product
    const variants = product.variants
    const history = useHistory()

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
                <div
                    className="tabule__desc"
                    //???
                    dangerouslySetInnerHTML={{
                        __html: product.attrs.descriptionHtml.value,
                    }}
                />
                <div className="tabule__bottom">
                    <VariantSelector
                        handleVariant={handleVariant}
                        variants={variants}
                    />
                    <input
                        className="tabule__quantity"
                        min="1"
                        type="number"
                        value={quantity}
                        onChange={handleQuantity}
                    ></input>
                    <h2 className="tabule__price">{variant.price}</h2>

                    <button
                        className="tabule__add"
                        onClick={() => props.addToCart(variant, quantity)}
                    >
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Tabule
