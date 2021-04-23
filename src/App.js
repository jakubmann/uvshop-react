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
    })

    //fetch products
    this.props.client.product.fetchAll()
    .then(products => {
      this.setState({ products })
      console.log(this.state.products)
    })
  }

  addToCart = (product, variant, quantity) => {
    let newObj = {
      product: product,
      variant: variant,
      quantity: quantity
    }

    let newCart = this.state.cart;
    newCart.push(newObj);

    this.setState({ cart: newCart });
    localStorage.setItem("cart", JSON.stringify(this.state.cart));
    console.log(this.state.cart);
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/product/:handle">
            <Product products={this.state.products} client={this.props.client} cart={this.addToCart}/>
          </Route> 

          <Route path="/cart">
            <CartPage cart={this.props.cart}/>
          </Route> 

          <Route path="/">
            <Home products={this.state.products}/>
          </Route>
        </Switch>
      </Router>
    )
  }
}

