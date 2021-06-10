import React, {useState, useCallback, useEffect} from 'react'
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom'

import Home from './pages/Home'
import Product from './pages/Product'
import CartPage from './pages/CartPage'

const App = (props) => {
  const {client} = props
  const [checkout, setCheckout] = useState({})
  const [products, setProducts] = useState([])

  const initCheckout = useCallback(async () => {
    const checkout = await client?.checkout?.create()
    setCheckout(checkout)
  }, [client.checkout])

  const initProducts = useCallback(async () => {
    const products = await client?.product?.fetchAll()
    setProducts(products)
  }, [client.product])

  useEffect(() => {
    initCheckout()
    initProducts()
  }, [initProducts, initCheckout])

  const addVariantToCart = async (variantId, quantity) => {
    const newCheckout = await client?.checkout?.addLineItems(checkout?.id, [
      {variantId, quantity: parseInt(quantity, 10)},
    ])
    console.log('client?')
    console.log(client.checkout)
    setCheckout(newCheckout)
  }
  return (
    <Router>
      <Switch>
        <Route path="/product/:handle">
          <Product
            products={products}
            client={client}
            addToCart={addVariantToCart}
          />
        </Route>
        <Route path="/cart">
          <CartPage
            client={client}
            checkout={checkout}
            setCheckout={setCheckout}
          />
        </Route>
        <Route path="/">
          <Home products={products} />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
