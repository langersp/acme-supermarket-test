import { Basket } from './classes/basket';
import { Item } from './classes/item';
import { pricingRules } from './pricingRules';


const basket = new Basket(pricingRules);

//creat new items and show on UI
const item1 = new Item('FR1', 'Fruit tea', 'https://www.gourmetgiftbaskets.com/Blog/wp-content/uploads/2015/7/fruit-tea-2015.jpg', 3.11, { code:'bogof', name:'Buy One Get One Free'});
item1.displayItem();
const item2 = new Item('SR1', 'Strawberries', 'https://www.organicfacts.net/wp-content/uploads/2013/06/Strawberry1-1020x765.jpg', 5.00, { code:'pricediscount', name:'Buy 3 Get 50p off Each'});
item2.displayItem();
const item3 = new Item('CF1', 'Coffee', 'https://i2-prod.mirror.co.uk/incoming/article10381392.ece/ALTERNATES/s1200/PROD-Coffee-and-beans.jpg', 11.23);
item3.displayItem();

const clickHandler = (item) => {
	basket.add(item);
	//update UI
	basket.displayBasket();
}

item1.attachEventListener(clickHandler);
item2.attachEventListener(clickHandler);
item3.attachEventListener(clickHandler);






