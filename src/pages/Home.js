import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Home = (props) => {
    const [visibleProducts, setVisibleProducts] = useState([])
    const history = useHistory()

    const handleClick = (handle) => history.push("/product/" + handle)

    const filterProducts = (group) => {

        setVisibleProducts(props.products.filter(p => p.productType === group))

    }
    
    return (
        <div className="homepage">
            <div className="product-select">
                <div className="product-select__groups">

                    <div className="product-select__group">
                        <a onClick={() => filterProducts('Kosile')}>
                            kosile
                        </a>
                    </div>
                    <div className="product-select__group">
                        <a onClick={() => filterProducts("mikina")}>
                            mikina
                        </a>
                    </div>
                    <div className="product-select__group">
                        <a onClick={() => console.log(props.products)}>
                            piko
                        </a>
                    </div>

                </div>
            </div>   

            <div className="trunk">
                {visibleProducts.map(p => {
                    return <div className="product" onClick={() => handleClick(p.handle) } > {p.title} <img src={p.images[0].src} width="200px" height="200px"></img></div>
                } )}
            </div>
        </div>
    )
}

export default Home