import React from 'react'

const LineItem = (props) => {
    const {client, checkout, line_item, setCheckout} = props

    const update = async (lineItems) => {
        console.log('lm')
        console.log(lineItems)
        const newCheckout = await client.checkout.updateLineItems(
            checkout.id,
            lineItems,
        )
        setCheckout(newCheckout)
    }

    const rm = async (lineItemIds) => {
        const newCheckout = await client.checkout.removeLineItems(
            checkout.id,
            lineItemIds,
        )
        setCheckout(newCheckout)
    }

    const incQuant = () => {
        const updatedLineItem = {
            id: line_item.id,
            quantity: line_item.quantity + 1,
        }
        return update([updatedLineItem])
    }

    const decQuant = () => {
        const updatedLineItem = {
            id: line_item.id,
            quantity: line_item.quantity - 1,
        }
        return updatedLineItem.quantity > 0
            ? update([updatedLineItem])
            : rm([line_item.id])
    }

    return (
        <div className="lineitem">
            <div className="lineitem__content">
                <span className="lineitem__title">{line_item.title}</span>
                <div className="lineitem__variant-title">
                    {line_item.variant.title}
                </div>
                <button onClick={() => incQuant()}>+</button>
                <button onClick={() => decQuant()}>
                    {line_item.quantity > 1 ? '-' : 'X'}
                </button>
                <div>{line_item.quantity}</div>
                <div className="lineitem__price">
                    {(line_item.quantity * line_item.variant.price).toFixed(2)}
                </div>
            </div>
        </div>
    )
}

export default LineItem
