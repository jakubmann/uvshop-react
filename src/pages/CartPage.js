import React from 'react'

const CartPage = (props) => {
    let cart = JSON.parse(localStorage.getItem("cart"));

    return (
        <div className="CartPage">
            {
                console.table(cart),
                
                cart.map(p => {
                    return <div className="product"><p>product: {p.product.title} | variant: {p.variant.title} | quant: {p.quantity} </p></div>
                }) 
           
            }
            
            
        </div>
    )
}

export default CartPage