import React, {useState, useCallback, useEffect} from 'react'
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom'

import Home from './pages/Home'
import Product from './pages/Product'
import NotFound from './pages/NotFound'
import CartModal from './pages/CartModal'

const App = (props) => {
    const {client} = props
    const [checkout, setCheckout] = useState({})
    const [products, setProducts] = useState([])
    const [cartVisible, setCartVisible] = useState(false)

    const initCheckoutAndProducts = useCallback(async () => {
        const checkout = await client?.checkout?.create()
        setCheckout(checkout)
        const products = await client?.product?.fetchAll()
        setProducts(products)
    }, [client.checkout, client.product])

    useEffect(() => {
        initCheckoutAndProducts()
    }, [initCheckoutAndProducts])

    const openCart = () => {
        setCartVisible(true)
    }

    const closeCart = () => {
        setCartVisible(false)
    }

    const addVariantToCart = async (variantId, quantity) => {
        const newCheckout = await client?.checkout?.addLineItems(checkout?.id, [
            {variantId, quantity: parseInt(quantity, 10)},
        ])
        console.log('client?')
        console.log(client.checkout)
        setCheckout(newCheckout)
    }

    return (
        <div>
            <CartModal
                client={client}
                checkout={checkout}
                setCheckout={setCheckout}
                visible={cartVisible}
                closeCart={closeCart}
            />
            <Router>
                <Switch>
                    <Route path="/product/:handle">
                        <Product
                            products={products}
                            client={client}
                            addToCart={addVariantToCart}
                            openCart={openCart}
                        />
                    </Route>
                    <Route exact path="/">
                        <Home products={products} />
                    </Route>
                    <Route component={NotFound} />
                </Switch>
            </Router>
        </div>
    )
}

export default App
