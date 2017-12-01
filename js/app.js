import { Basket } from './classes/basket';
import { Item } from './classes/item';
import { pricingRules } from './pricingRules';

const productData = [
	{
		'code': 'FR1',
		'name': 'Fruit tea',
		'image': 'https://www.gourmetgiftbaskets.com/Blog/wp-content/uploads/2015/7/fruit-tea-2015.jpg',
		'price': 3.11,
		'promotion': { 
			'code': 'bogof', 
			'name': 'Buy One Get One Free'
		}
	},
	{
		'code': 'SR1',
		'name': 'Strawberries',
		'image': 'https://www.organicfacts.net/wp-content/uploads/2013/06/Strawberry1-1020x765.jpg',
		'price': 5.00,
		'promotion': {
			'code': 'pricediscount',
			'name': 'Buy 3 Get 50p off Each'
		}
	},
	{
		'code': 'CF1',
		'name': 'Coffee',
		'image': 'https://i2-prod.mirror.co.uk/incoming/article10381392.ece/ALTERNATES/s1200/PROD-Coffee-and-beans.jpg',
		'price': 11.23
	}
];

const basket = new Basket(pricingRules);

const clickHandler = (item) => {
	basket.add(item);
	//update UI
	basket.displayBasket();
}

productData.forEach(item => {
	let productItem = new Item(item.code, item.name, item.image, item.price, item.promotion);
	productItem.displayItem();
    productItem.attachEventListener(clickHandler);
});