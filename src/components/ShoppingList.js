import '../styles/ShoppingList.css'
import { plantList } from '../datas/plantList'

function ShoppingList() {
    // Make the new list who extract plants categories
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

    // Show results on the app
	return (
		<div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='lmj-plant-list'>
				{plantList.map((plant) => (
                    <li key={plant.id} className='lmj-plant-item'>
                        {plant.name}
                        {/* This element will be generated only if the condition is respected*/}
                        {plant.isBestSale && <span>🔥</span>}
                        {plant.isSpecialOffer && <div className='lmj-sales'>Soldes</div>}
                    </li>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList