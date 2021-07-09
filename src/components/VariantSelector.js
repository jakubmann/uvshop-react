import React from 'react'

const VariantSelector = (props) => {
    const {variants, handleVariant} = props
    return (
        <div className="select">
            <select onChange={handleVariant}>
                {variants.map((variant) => (
                    <option
                        value={variant.id}
                        key={variant.id}
                        disabled={!variant.available}
                    >
                        {variant.title}
                    </option>
                ))}
                <div className="select__arrow"></div>
            </select>
        </div>
    )
}

export default VariantSelector
