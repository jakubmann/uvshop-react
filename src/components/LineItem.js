import React from 'react'

const LineItem = ({line_item}) => {


    return (
        <div className="lineitem">
            <div className="lineitem__content">
                <span className="lineitem__title">
                    {line_item.title}
                </span>
                <div className="lineitem__variant-title">
                    {line_item.variant.title}
                </div>
                <div className="lineitem__price">
                    $ {(line_item.quantity * line_item.variant.price).toFixed(2)}
                </div>
            </div>
        </div>
        //TODO: increment/decrement quantity, remove from cart
    )
}

export default LineItem