import React from 'react'
import LineItem from '../components/LineItem'

const CartPage = ({setCheckout, client, checkout}) => {
  return (
    <div className="cartpage">
      <div className="cartpage__left">
        <div className="cartpage__products">
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
      <div className="cartpage__right">
        <button
          onClick={() => window.open(checkout.webUrl)}
          className="cartpage__checkout"
        >
          BUY
        </button>
      </div>
    </div>
  )
}

export default CartPage
