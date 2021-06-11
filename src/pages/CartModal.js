import React, {useEffect, useState} from 'react'
import LineItem from '../components/LineItem'

const CartModal = ({setCheckout, client, checkout, visible}) => {
    const [total, setTotal] = useState(0)
    useEffect(() => {
        let newTotal = 0
        checkout?.lineItems?.forEach((item) => {
            newTotal += item.variant.price * item.quantity
        })
        console.log('total: ', total)
        setTotal(newTotal.toFixed(2))
    }, [checkout])

    return (
        <div
            className={
                visible
                    ? 'cartmodal__container'
                    : 'cartmodal__container cartmodal__container--hidden'
            }
        >
            <div className="cartmodal">
                <div className="cartmodal__left">
                    <div className="cartmodal__products">
                        {checkout?.lineItems?.map((line_item) => (
                            <LineItem
                                client={client}
                                checkout={checkout}
                                key={line_item.id}
                                line_item={line_item}
                                setCheckout={setCheckout}
                            />
                        ))}
                    </div>
                </div>
                <div className="cartmodal__right">
                    <h1 className="cartmodal__total">{total},-</h1>
                    <button
                        onClick={() => window.open(checkout.webUrl)}
                        className="cartmodal__checkout"
                    >
                        BUY
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CartModal
