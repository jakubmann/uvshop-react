import { render } from '@testing-library/react'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
    let { id } = useParams()

    return (
        <div className="product">
            { id }
        </div>
    )
}

export default Product