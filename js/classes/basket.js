export class Basket {

	constructor(pricingRules = {}) {
		this.items = {};
		this.pricingRules = pricingRules;
		
	}

	add(item) {
		if (!this.items[item.code]) {
			this.items[item.code] = Object.assign({}, item);
			this.items[item.code].quantity = 1;
	 	} else {
	 		this.items[item.code].quantity += 1;
	 	}
 	}

 	total() {
 		Object.values(this.items).forEach(item => {
 			if(Object.keys(item.promotion).length !== 0 ) {
 				item.subtotal = this.pricingRules[item.promotion.code](item);
 			} else {
 				item.subtotal = item.price * item.quantity;
 			}
 		});

 		// we are using an object so turn object values into array and utilise reduce method
 		const total = Object.values(this.items).reduce(function(total, item) {
 			return total + item.subtotal;
 		}, 0);

 		return total.toFixed(2);
 	}

 	displayBasket() {
 		let basketHTML = '', totalHTML = '';

 		totalHTML = `&pound;${this.total()}`;

 		Object.values(this.items).forEach(item => {
 			const promotionApplied = item.promotion.applied ? `${item.promotion.name} Applied` : '';
 			const promotionAlert =  item.promotion.alert != undefined ? `<div class="alert alert-info" role="alert">${item.promotion.alert}</div>` : '';

	 		basketHTML += `<tr><td>
					<img src='${item.image}' class='product__image' width='100' /></td>
					<td>${item.name}</td>
				    <td>&pound;${item.price.toFixed(2)}<br />${promotionApplied}<br />${promotionAlert}</td>
				    <td>${item.quantity}</td>
				    <td>${item.subtotal.toFixed(2)}</td>				
					</tr>`;			
		});

		this.DOMNodes = {
			'basket': document.getElementById('basketItems'),
			'basketTotal': document.querySelector('.basket__total')
		} 

		this.DOMNodes.basket.innerHTML = '';
		this.DOMNodes.basketTotal.innerHTML = '';
		this.DOMNodes.basket.insertAdjacentHTML('beforeend', basketHTML);
		this.DOMNodes.basketTotal.insertAdjacentHTML('beforeend', totalHTML);
 	}	
}