import React, { useState } from 'react'

const Home = (props) => {
    const [visibleProducts, setVisibleProducts] = useState([])

    const filterProducts = (group) => {
//        setVisibleProducts(props.products.filter(p => { nejakej function na filtrovani produktu }))
    }
    
    return (
        <div className="homepage">
            <div className="product-select">
                <div className="product-select__groups">
                    <div className="product-select__group" onClick={filterProducts('kosile')}>
                        kosile
                    </div>
                </div>
            </div>
            
            <div className="trunk">
                {props.products.map(p => {
                    return <div className="product">{p.title}</div>
                })}
            </div>
        </div>
    )
}

export default Home