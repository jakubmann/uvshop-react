import React from 'react'
import ReactDOM from 'react-dom'
import Client from 'shopify-buy'
import './style/style.scss'
import App from './App'
import reportWebVitals from './reportWebVitals'

const client = Client.buildClient({
    domain: 'uv-testing.myshopify.com',
    storefrontAccessToken: '45d55c3968443e1908bede7f65bc2184',
    //language: ''
})

ReactDOM.render(
    <React.StrictMode>
        <App client={client} />
    </React.StrictMode>,
    document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
