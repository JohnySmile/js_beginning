class ProductsList{
    constructor(container = '.products'){
        this.container = container;
        this.goods = [];
        this._fetchProducts();
    } 
    
    _fetchProducts(){
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000, img: 'Notebook.jpg'},
            {id: 2, title: 'Mouse', price: 20, img: 'Mouse.jpg'},
            {id: 3, title: 'Keyboard', price: 200, img: 'Keyboard.jpg'},
            {id: 4, title: 'Gamepad', price: 50, img: 'Gamepad.jpg'},
        ];
    }
    render() {
        const block = document.querySelector(this.container);
        for(let product of this.goods){
            const productObj = new ProductItem(product);
            block.insertAdjacentHTML('beforeend',productObj.render())
//            block.innerHTML += productObj.render();
        }
    }
    getSum() {
    let sum = 0;
    for(let product of this.goods ){
        sum += product.price;
    }
    alert(sum);
}
    
}


class ProductItem{
	constructor(product,){
        this.img = product.img;
		this.title = product.title;
		this.price = product.price;
		this.id = product.id;
		
	}
	
	render(){
		 return `<div class="product-item" data-id="${this.id}">
                <img src="img/${this.img}" alt="${this.img}">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
	}
}

let list = new ProductsList();
list.render();
list.getSum();

class Cart {
    addGoods(){
        
    }
    removeGoods(){
        
    }
    sortGoods(){
        
    }
    getSumOfGoods() {
        
    }
}

class CartElement {
    render(){
        
    }
}



    



