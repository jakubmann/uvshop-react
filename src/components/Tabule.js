import React, { useState } from 'react'
import { useHistory } from 'react-router'
import VariantSelector from './VariantSelector'

const Tabule = props => {
	//default prop objects
	const product = props.product
	const variants = product.variants
	const history = useHistory()

	let defaultOptions = []

	product.options.forEach(selector => {
		defaultOptions[selector.name] = selector.values[0].value
	})

	//state
	const [quantity, setQuantity] = useState(1)
	const [variant, setVariant] = useState(variants[0])
	const [selectedOptions, setSelectedOptions] = useState(defaultOptions)

	console.log(variant)

	const handleQuantity = e => {
		setQuantity(e.target.value)
	}

	const handleOption = e => {
		let options = selectedOptions
		options[e.target.name] = e.target.value
		setSelectedOptions(options)
		setVariant(
			props.client.product.helpers.variantForOptions(product, options),
		)
	}

	const VariantSelectors = product.options.map(option => {
		return (
			<VariantSelector
				handleOption={handleOption}
				key={option.id.toString()}
				option={option}
			/>
		)
	})

	return (
		<div className="tabule">
			<div className="tabule__content">
				<h1 className="tabule__title">{product.title}</h1>
				<div
					className="tabule__desc"
					dangerouslySetInnerHTML={{
						__html: product.attrs.descriptionHtml.value,
					}}
				/>
				{VariantSelectors}
				<input
					className="tabule__quantity"
					min="1"
					type="number"
					value={quantity}
					onChange={handleQuantity}
				></input>
				<h2 className="tabule__price">{variant.price}</h2>

				<button onClick={() => props.addToCart(variant.id, quantity)}>
					Add To Cart
				</button>
				<button onClick={() => history.push('/cart/')}>Cart</button>
			</div>
		</div>
	)
}

export default Tabule
