// Sample product data
const products = [
    { id: 1, name: "Television Model 1", price: 499.99 },
    { id: 2, name: "Television Model 2", price: 799.99 },
    { id: 3, name: "Television Model 3", price: 499.99 },
    { id: 4, name: "Television Model 4", price: 799.99 },
    { id: 6, name: "Television Model 5", price: 499.99 },
    { id: 5, name: "Television Model 6", price: 799.99 },
    { id: 7, name: "Television Model 7", price: 499.99 },
    { id: 8, name: "Television Model 8", price: 799.99 },
    { id: 9, name: "Television Model 9", price: 799.99 }
];

const cart = [];

function addToCart(productId) {
    const product = products.find(item => item.id === productId);
    if (product) {
        cart.push(product);
        updateCart();
    }
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.classList.add('cart-item');
        li.innerHTML = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    cartTotal.innerText = `$${total.toFixed(2)}`;
}

