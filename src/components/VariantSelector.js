import React from 'react'

const VariantSelector = (props) => {
  const {variants, handleVariant} = props
  return (
    <select className="tabule__selector" onChange={handleVariant}>
      {variants.map((variant) => (
        <option
          value={variant.id}
          key={variant.id}
          disabled={!variant.available}
        >
          {variant.title}
        </option>
      ))}
    </select>
  )
}

export default VariantSelector
