// JavaScript code for buttons
document.addEventListener("DOMContentLoaded", function() {
    const camerasButton = document.getElementById("cameras-button");
    const dronesButton = document.getElementById("drones-button");
    const productsButton = document.getElementById("products-button");

    camerasButton.addEventListener("click", () => {
        // Add functionality for Cameras button
        // For example, scroll to the Cameras section
        document.getElementById("cameras").scrollIntoView({ behavior: "smooth" });
    });

    dronesButton.addEventListener("click", () => {
        // Add functionality for Drones button
        // For example, scroll to the Drones section
        document.getElementById("drones").scrollIntoView({ behavior: "smooth" });
    });

    productsButton.addEventListener("click", () => {
        // Add functionality for Products button
        // For example, scroll to the Products section
        document.getElementById("products").scrollIntoView({ behavior: "smooth" });
    });
});
