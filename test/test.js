import chai from 'chai';
import {Basket} from '../js/classes/basket';
import {Item} from '../js/classes/item';
import {pricingRules} from '../js/pricingRules';

let expect = chai.expect;

describe('ACME Supermarket Basket', function() {

	describe('Initial Basket', function() {
		it('should start empty', function() {
			const basket = new Basket(pricingRules);

			expect(Object.keys(basket.items).length).to.equal(0);
		});
	});

	describe('Add to Basket', () => {
	     it('Item can be added to Basket', () => {
	      const basket = new Basket(pricingRules);
	      basket.add(new Item('FR1', 'Fruit tea', 'https://www.gourmetgiftbaskets.com/Blog/wp-content/uploads/2015/7/fruit-tea-2015.jpg', 3.11, { code:'bogof', name:'Buy One Get One Free'}));

		  expect(Object.keys(basket.items).length).to.equal(1);
		  expect(basket.items['FR1'].name).to.equal('Fruit tea');
		  expect(basket.items['FR1'].image).to.equal('https://www.gourmetgiftbaskets.com/Blog/wp-content/uploads/2015/7/fruit-tea-2015.jpg');
		  expect(basket.items['FR1'].price).to.equal(3.11);
	 
	      });

	     it('2 Items can be added and correct totals calculated', () => {
		     const basket = new Basket(pricingRules);
		     basket.add(new Item('FR1', 'Fruit tea', 'https://www.gourmetgiftbaskets.com/Blog/wp-content/uploads/2015/7/fruit-tea-2015.jpg', 3.11, { code:'bogof', name:'Buy One Get One Free'}));
			 basket.add(new Item('CF1', 'Coffee', 'https://i2-prod.mirror.co.uk/incoming/article10381392.ece/ALTERNATES/s1200/PROD-Coffee-and-beans.jpg', 11.23));

		     expect(Object.keys(basket.items).length).to.equal(2);
		     expect(basket.total()).to.equal('14.34');
		  });

	     it('3 Strawberry Items can be added and correct totals calculated after promotion applies', () => {
		     const basket = new Basket(pricingRules);
			 basket.add(new Item('SR1', 'Strawberries', 'https://www.organicfacts.net/wp-content/uploads/2013/06/Strawberry1-1020x765.jpg', 5.00, { code:'pricediscount', name:'Buy 3 Get 50p off Each'}));
			 basket.add(new Item('SR1', 'Strawberries', 'https://www.organicfacts.net/wp-content/uploads/2013/06/Strawberry1-1020x765.jpg', 5.00, { code:'pricediscount', name:'Buy 3 Get 50p off Each'}));
			 basket.add(new Item('SR1', 'Strawberries', 'https://www.organicfacts.net/wp-content/uploads/2013/06/Strawberry1-1020x765.jpg', 5.00, { code:'pricediscount', name:'Buy 3 Get 50p off Each'}));

		     expect(Object.keys(basket.items).length).to.equal(1);
		     expect(basket.total()).to.equal('13.50');
		  });

	     it('4 Strawberry Items can be added and correct totals calculated after promotion applies', () => {
		     const basket = new Basket(pricingRules);
			 basket.add(new Item('SR1', 'Strawberries', 'https://www.organicfacts.net/wp-content/uploads/2013/06/Strawberry1-1020x765.jpg', 5.00, { code:'pricediscount', name:'Buy 3 Get 50p off Each'}));
			 basket.add(new Item('SR1', 'Strawberries', 'https://www.organicfacts.net/wp-content/uploads/2013/06/Strawberry1-1020x765.jpg', 5.00, { code:'pricediscount', name:'Buy 3 Get 50p off Each'}));
			 basket.add(new Item('SR1', 'Strawberries', 'https://www.organicfacts.net/wp-content/uploads/2013/06/Strawberry1-1020x765.jpg', 5.00, { code:'pricediscount', name:'Buy 3 Get 50p off Each'}));
			 basket.add(new Item('SR1', 'Strawberries', 'https://www.organicfacts.net/wp-content/uploads/2013/06/Strawberry1-1020x765.jpg', 5.00, { code:'pricediscount', name:'Buy 3 Get 50p off Each'}));

		     expect(Object.keys(basket.items).length).to.equal(1);
		     expect(basket.total()).to.equal('18.00');
		  });

	     it('2 Fruit Tea Items can be added and correct totals calculated after promotion applies', () => {
		     const basket = new Basket(pricingRules);
		     basket.add(new Item('FR1', 'Fruit tea', 'https://www.gourmetgiftbaskets.com/Blog/wp-content/uploads/2015/7/fruit-tea-2015.jpg', 3.11, { code:'bogof', name:'Buy One Get One Free'}));
		     basket.add(new Item('FR1', 'Fruit tea', 'https://www.gourmetgiftbaskets.com/Blog/wp-content/uploads/2015/7/fruit-tea-2015.jpg', 3.11, { code:'bogof', name:'Buy One Get One Free'}));

		     expect(Object.keys(basket.items).length).to.equal(1);
		     expect(basket.total()).to.equal('3.11');
		  });

	     it('3 Fruit Tea Items can be added and correct totals calculated after promotion applies', () => {
		     const basket = new Basket(pricingRules);
		     basket.add(new Item('FR1', 'Fruit tea', 'https://www.gourmetgiftbaskets.com/Blog/wp-content/uploads/2015/7/fruit-tea-2015.jpg', 3.11, { code:'bogof', name:'Buy One Get One Free'}));
		     basket.add(new Item('FR1', 'Fruit tea', 'https://www.gourmetgiftbaskets.com/Blog/wp-content/uploads/2015/7/fruit-tea-2015.jpg', 3.11, { code:'bogof', name:'Buy One Get One Free'}));
		     basket.add(new Item('FR1', 'Fruit tea', 'https://www.gourmetgiftbaskets.com/Blog/wp-content/uploads/2015/7/fruit-tea-2015.jpg', 3.11, { code:'bogof', name:'Buy One Get One Free'}));
		     
		     expect(Object.keys(basket.items).length).to.equal(1);
		     expect(basket.total()).to.equal('6.22');
		  });


	     it('3 Fruit Tea Items can be added, 3 Strawberry Items and 2 Coffees and correct totals calculated after promotion applies', () => {
		     const basket = new Basket(pricingRules);
		     basket.add(new Item('FR1', 'Fruit tea', 'https://www.gourmetgiftbaskets.com/Blog/wp-content/uploads/2015/7/fruit-tea-2015.jpg', 3.11, { code:'bogof', name:'Buy One Get One Free'}));
		     basket.add(new Item('FR1', 'Fruit tea', 'https://www.gourmetgiftbaskets.com/Blog/wp-content/uploads/2015/7/fruit-tea-2015.jpg', 3.11, { code:'bogof', name:'Buy One Get One Free'}));
		     basket.add(new Item('FR1', 'Fruit tea', 'https://www.gourmetgiftbaskets.com/Blog/wp-content/uploads/2015/7/fruit-tea-2015.jpg', 3.11, { code:'bogof', name:'Buy One Get One Free'}));
			 basket.add(new Item('SR1', 'Strawberries', 'https://www.organicfacts.net/wp-content/uploads/2013/06/Strawberry1-1020x765.jpg', 5.00, { code:'pricediscount', name:'Buy 3 Get 50p off Each'}));
			 basket.add(new Item('SR1', 'Strawberries', 'https://www.organicfacts.net/wp-content/uploads/2013/06/Strawberry1-1020x765.jpg', 5.00, { code:'pricediscount', name:'Buy 3 Get 50p off Each'}));
			 basket.add(new Item('SR1', 'Strawberries', 'https://www.organicfacts.net/wp-content/uploads/2013/06/Strawberry1-1020x765.jpg', 5.00, { code:'pricediscount', name:'Buy 3 Get 50p off Each'}));
			 basket.add(new Item('CF1', 'Coffee', 'https://i2-prod.mirror.co.uk/incoming/article10381392.ece/ALTERNATES/s1200/PROD-Coffee-and-beans.jpg', 11.23));
			 basket.add(new Item('CF1', 'Coffee', 'https://i2-prod.mirror.co.uk/incoming/article10381392.ece/ALTERNATES/s1200/PROD-Coffee-and-beans.jpg', 11.23));

		     expect(Object.keys(basket.items).length).to.equal(3);
		     expect(basket.total()).to.equal('42.18');
		  });
	});

});