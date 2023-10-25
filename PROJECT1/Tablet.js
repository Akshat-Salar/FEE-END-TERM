// JavaScript code for button functionality
document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const wishlistButtons = document.querySelectorAll(".wishlist");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", function() {
            // Replace with actual cart handling logic
            alert("Added to Cart: " + this.parentNode.querySelector("h2").textContent);
        });
    });

    wishlistButtons.forEach(button => {
        button.addEventListener("click", function() {
            // Replace with actual wishlist handling logic
            alert("Added to Wishlist: " + this.parentNode.querySelector("h2").textContent);
        });
    });
});
