import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'

import border1 from '../assets/homepage/foto1.png'
import border2 from '../assets/homepage/foto2.png'
import border3 from '../assets/homepage/foto3.png'
import border4 from '../assets/homepage/foto4.png'
import border5 from '../assets/homepage/foto5.png'
import border6 from '../assets/homepage/foto6.png'

import hrebik from '../assets/homepage/hrebik.png'
import nuz from '../assets/homepage/nuz.png'
import paska from '../assets/homepage/paska.png'
import paska2 from '../assets/homepage/paska2.png'
import paska3 from '../assets/homepage/paska3.png'
import paska4 from '../assets/homepage/paska4.png'
import sroub from '../assets/homepage/sroub.png'

const Home = (props) => {
    const {products} = props
    const [visibleProducts, setVisibleProducts] = useState([])
    const history = useHistory()

    const borders = [border1, border2, border3, border4, border5, border6]
    const pins = [hrebik, nuz, paska, paska2, paska3, paska4, sroub]

    const handleClick = (handle) => history.push('/product/' + handle)

    const randomBorder = (type) => {
        const index = Math.floor(Math.random() * type.length)
        return type[index]
    }

    const filterProducts = (group) => {
        setVisibleProducts(products.filter((p) => p.productType === group))
    }

    useEffect(() => {
        console.log(visibleProducts)
    }, [visibleProducts])

    useEffect(() => {
        setVisibleProducts(products)
    }, [])

    return (
        <div className="homepage">
            <div className="homepage__link" onClick={() => history.push('/')} />
            <div className="product-select">
                <div className="product-select__groups">
                    <div
                        className="product-select__horni"
                        onClick={() => filterProducts('Horni')}
                    />
                    <div
                        className="product-select__dolni"
                        onClick={() => filterProducts('Dolni')}
                    />
                    <div
                        className="product-select__other"
                        onClick={() => filterProducts('Doplnky')}
                    />
                </div>
            </div>

            <div className="trunk">
                <div className="trunk__products">
                    {visibleProducts.length === 0 ? (
                        <div className="trunk__empty">Nic tu není :(</div>
                    ) : null}
                    {visibleProducts.map((p) => (
                        <div
                            key={p.id}
                            className="product-small"
                            onClick={() => handleClick(p.handle)}
                            style={{backgroundImage: `url(${p.images[0].src})`}}
                        >
                            <div
                                className="product-small__pin"
                                style={{
                                    backgroundImage: `url(${randomBorder(
                                        pins,
                                    )})`,
                                }}
                            ></div>
                            <div className="product-small__title">
                                {p.title}
                            </div>
                            <div
                                className="product-small__border"
                                style={{
                                    backgroundImage: `url(${randomBorder(
                                        borders,
                                    )})`,
                                }}
                            ></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home
