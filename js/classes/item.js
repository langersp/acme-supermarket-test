import {Basket} from './basket.js';

export class Item {

	constructor(code, name, image, price, promotion = {}) {
		this.code = code;
		this.name = name;
		this.image = image;
		this.price = price;
		// we may want to assign more than 1 promotion to a product, but for keep it a single promotion at a time
		this.promotion = promotion;	
		this.addBtn = 'productAdd-'+ this.code;
	}	

	attachEventListener(callback) {
		document.getElementById(this.addBtn).addEventListener('click', () => callback(this));
	}

	displayItem() {

		let promotionHTML;

		promotionHTML = Object.keys(this.promotion).length !== 0 ? `<div class='product__promotion alert alert-info' role='alert'>${this.promotion.name}</div>` : '';

		let itemHTML = `<li class='product col-12 col-md-4'>
			<div class='card'>
				<img src='${this.image}' class='product__image card-img-top' width='100%' />
				<div class='card-body'>
					<h4 class='card-title'>${this.name}</h4>
					<div class='product__price'>&pound;${this.price.toFixed(2)}</div>				
					<input type='button' value='Add to Bag' id='${this.addBtn}' class='product__button btn btn-primary' />
					${promotionHTML}
				</div>
			</div>
		</li>`;

		const productList = document.getElementById('productList');
		productList.insertAdjacentHTML('beforeend', itemHTML);
	}
}