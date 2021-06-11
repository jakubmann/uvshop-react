import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

const Home = (props) => {
    const [visibleProducts, setVisibleProducts] = useState([])
    const history = useHistory()

    const handleClick = (handle) => history.push('/product/' + handle)

    const filterProducts = (group) => {
        setVisibleProducts(
            props.products.filter((p) => p.productType === group),
        )
    }

    return (
        <div className="homepage">
            <div className="product-select">
                <div className="product-select__groups">
                    <div className="product-select__group">
                        <button onClick={() => filterProducts('Kosile')}>
                            kosile
                        </button>
                    </div>
                    <div className="product-select__group">
                        <button onClick={() => filterProducts('mikina')}>
                            mikina
                        </button>
                    </div>
                    <div className="product-select__group">
                        <button onClick={() => console.log(props.products)}>
                            piko
                        </button>
                    </div>
                </div>
            </div>

            <div className="trunk">
                {visibleProducts.map((p) => (
                    <div
                        key={p.id}
                        className="product"
                        onClick={() => handleClick(p.handle)}
                    >
                        {p.title}
                        <img
                            src={p.images[0].src}
                            width="200px"
                            height="200px"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home
