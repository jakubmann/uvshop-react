import React from 'react'

const Tabule = props => {
    const product = props.product
    return(
        <div className="tabule">
            <h1 className="tabule__title">{ product.title }</h1>
            <div className="tabule__desc" dangerouslySetInnerHTML={{__html: product.attrs.descriptionHtml.value}} />
        </div>
    )
}

export default Tabule