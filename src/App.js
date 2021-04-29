import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import Home from './pages/Home'
import Product from './pages/Product'
import CartPage from './pages/CartPage'

export default class App extends React.Component {
  state = {
    checkout: { lineItems: [] },
    products: [],
    cart: [],
    shop: {}
  }

  componentDidMount() {
    //create checkout
    this.props.client.checkout.create()
    .then(checkout => {
      this.setState({ checkout }) 
      console.log(checkout)
    })

    //fetch products
    this.props.client.product.fetchAll()
    .then(products => {
      this.setState({ products })
      console.log(this.state.products)
    })
  }

  addVariantToCart = (variantId, quantity) => {
    const lineItemsToAdd = [{variantId, quantity: parseInt(quantity, 10)}]
    const checkoutId = this.state.checkout.id

    return this.props.client.checkout.addLineItems(checkoutId, lineItemsToAdd).then(res => {
      this.setState({
        checkout: res,
      })
    })
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/product/:handle">
            <Product products={this.state.products} client={this.props.client} addToCart={this.addVariantToCart}/>
          </Route> 

          <Route path="/cart">
            <CartPage  checkout={this.state.checkout}/>
          </Route> 

          <Route path="/">
            <Home products={this.state.products}/>
          </Route>
        </Switch>
      </Router>
    )
  }
}

