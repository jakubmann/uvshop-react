import React from 'react'
import ReactDOM from 'react-dom'
import Client from 'shopify-buy'
import './style/style.scss'
import App from './App'
import reportWebVitals from './reportWebVitals'
import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'

import cz from './locale/cz'

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources: {
            cz: {
                translation: cz,
            },
        },
        lng: 'cz',
        fallbackLng: 'cz',

        interpolation: {
            escapeValue: false,
        },
    })

console.log('cz: ', cz)

const client = Client.buildClient({
    domain: 'ultravagant.myshopify.com',
    storefrontAccessToken: 'd4947582b88e98a373fcceb7613b5028',
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
