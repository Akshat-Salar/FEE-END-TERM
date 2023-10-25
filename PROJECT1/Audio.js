const trendingProducts = [
    { name: "Echo Dot (4th Gen, 2020 release) with clock ", price: 199.99, image: "https://m.media-amazon.com/images/I/81WaomQESKL._SL1500_.jpg" },
    { name: "GOVO GOSURROUND 950", price: 249.99, image: "https://m.media-amazon.com/images/I/712ZgHThQEL._SL1500_.jpg" },
    { name: "pTron Fusion Party v2 40W", price: 179.99, image: "https://m.media-amazon.com/images/I/71xMIZrArlL._SL1200_.jpg" },
];

const featuredProducts = [
    { name: "BLUETOOTH SPEAKER", price: 299.99, image: "https://m.media-amazon.com/images/G/31/img23/CEPC/jupiter2023/event/speakers/shopbycat/Bluetooth_speaker_Shop_by_Category_400x400._CB576824004_.jpg" },
    { name: "SOUNDBARS", price: 329.99, image: "https://m.media-amazon.com/images/G/31/img23/CEPC/jupiter2023/event/speakers/shopbycat/Soundbars_Shop_by_Category_400x400._CB576824004_.jpg" },
    { name: "PARTY SPEAKERS", price: 249.99, image: "https://m.media-amazon.com/images/G/31/img23/CEPC/jupiter2023/event/speakers/shopbycat/Party_speakers_Shop_by_Category_400x400._CB576824004_.jpg" },
];

const allProducts = [
    { name: "Product X", price: 149.99, image: "https://m.media-amazon.com/images/I/71wAXhzCmnS._AC_UL480_QL65_.jpg" },
    { name: "Product Y", price: 179.99, image: "https://m.media-amazon.com/images/I/614pmXRPMFL._AC_UL480_QL65_.jpg" },
    { name: "Product Z", price: 199.99, image: "https://m.media-amazon.com/images/I/71qNKXZftLS._AC_UL480_QL65_.jpg" },
    // Add more products as needed
];

function displayProducts(products, containerId) {
    const container = document.querySelector(`#${containerId} .product-list`);
    container.innerHTML = "";

    products.forEach(product => {
        const productHTML = `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p class="price">$${product.price.toFixed(2)}</p>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', productHTML);
    });
}

// Display products on the page
displayProducts(trendingProducts, 'trending');
displayProducts(featuredProducts, 'featured');
displayProducts(allProducts, 'all');
