import React from 'react'

export default class Home extends React.Component {
    state = {
        filteredProducts: []
    }

    filterProducts = (group) => {
        this.setState({
            products: this.props.products.filter(p => { /* podminka pro filtrovani vsech produktu */})
        })
    }
    
    render() {
        return (
            <div className="homepage">
                <div className="product-select">
                    <div className="product-select__groups">
                        <div className="product-select__group" onClick={this.filterProducts('kosile')}>
                            kosile
                        </div>
                    </div>
                </div>
                
                <div className="trunk">
                    {this.props.products.map(p => {
                        return <div className="product">{p.title}</div>
                    })}
                </div>
            </div>
        )
    }
}