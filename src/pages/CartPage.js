import React from 'react'
import LineItem from '../components/LineItem'

const CartPage = ({ checkout }) => {


    let LineItems = () => {
        return (
            checkout.lineItems.map((line_item) => {
                return (
                    <LineItem
                        key={line_item.id.toString()}
                        line_item={line_item}
                    />
                )
            })
        )

    }

    return (
        <div className="cartpage">
            <div className="cartpage__left">
                <div className="cartpage__products">
                    <LineItems />
                </div>
            </div>
            <div className="cartpage__right">
                <button onClick={() => window.open(checkout.webUrl)} className="cartpage__checkout">
                    BUY
                </button>
            </div>
        </div>
    )
}

export default CartPage