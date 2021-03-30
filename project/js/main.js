const products = [
    {id: 1, title: 'Notebook', price: 2000, img: 'Notebook.jpg'},
    {id: 2, title: 'Mouse', price: 20, img: 'Mouse.jpg'},
    {id: 3, title: 'Keyboard', price: 200, img: 'Keyboard.jpg'},
    {id: 4, title: 'Gamepad', price: 50, img: 'Gamepad.jpg'},
];
//Функция для формирования верстки каждого товара
const renderProduct = (item) => {
    return `<div class="product-item">
                <img src="img/${item.img}" alt="${item.img}">
                <h3>${item.title}</h3>
                <p>${item.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item));
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList.join('');
};

renderPage(products);