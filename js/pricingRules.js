export const pricingRules = {

	bogof: (item) => {

		item.quantity > 1 ? item.promotion.applied = true : item.promotion.applied = false;

		//1. find odd number of items and ignore those
		const remainderOfItems = item.quantity % 2;
		//2. calculate how many items should be set at reduced price
		const reducedItemsTotal = (item.quantity - remainderOfItems) * item.price / 2;
		//3. calculate how many items should be set at normal price
		const nonReducedItemsTotal = remainderOfItems * item.price;

		//perhaps flag this on UI and offer additional item if they have odd number at checkout
		remainderOfItems > 0 ? item.promotion.alert = 'Add another item - it\'s free!' : item.promotion.alert = undefined;

		const reducedTotal = reducedItemsTotal + nonReducedItemsTotal;

		return reducedTotal;
	},
	pricediscount: (item) => {
		//console.log("item", item)
		if(item.quantity >=3) { item.promotion.applied = true; }

		// return item.quantity * item.price;

		return item.quantity >= 3 ? (item.price - .5) * item.quantity : item.price * item.quantity;
	}
}