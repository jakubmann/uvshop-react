import React from 'react'

const CartPage = (props) => {
    let cart = JSON.parse(localStorage.getItem("cart"));

    return (
        <div className="cartpage">
            <div className="cartpage__products">
                {
                    console.table(cart),
                    
                    cart.map(p => {
                        return <div className="cartpage__product"><p>product: {p.product.title} | variant: {p.variant.title} | quant: {p.quantity} </p></div>
                    }) 
            
                }
            </div>
            <button onClick={() => alert("BUY")} className="cartpage__checkout">
                BUY
            </button>
        </div>
    )
}

export default CartPage