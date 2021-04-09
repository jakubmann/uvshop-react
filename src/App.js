import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import Home from './pages/Home'
import Product from './pages/Product'

export default class App extends React.Component {
  state = {
    checkout: { lineItems: [] },
    products: [],
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

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/product/:handle">
            <Product products={this.state.products} client={this.props.client} />
          </Route> 
          <Route path="/">
            <Home products={this.state.products}/>
          </Route>
        </Switch>
      </Router>
    )
  }
}

