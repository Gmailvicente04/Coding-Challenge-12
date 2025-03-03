// TASK 1: Business Dashboard - DOM Element Selection and Creation
// Task 1: Business Dashboard – DOM Element Selection and Creation
function createRevenueCard() {
    const dashboard = document.getElementById("dashboard");
    const dashboardAlt = document.querySelector("#dashboard");
    
    const revenueCard = document.createElement("div");
    revenueCard.setAttribute("class", "metric-card");
    revenueCard.setAttribute("id", "revenueCard");
    
    revenueCard.innerHTML = "<h3>Revenue</h3><p>$0</p>";
    
    dashboard.appendChild(revenueCard);
}
createRevenueCard();

// Task 2: Updating Dashboard Metrics – Working with NodeLists and Arrays
function updateMetricCards() {
    const metricCards = document.querySelectorAll(".metric-card");
    const metricArray = Array.from(metricCards);
    
    metricArray.forEach(card => {
        card.innerText += " - Updated";
        card.style.backgroundColor = "#f0f0f0";
    });
}
updateMetricCards();

// Task 3: Dynamic Inventory Management – Adding and Removing Items
function addProductItem(productName) {
    const inventoryList = document.getElementById("inventoryList");
    const productItem = document.createElement("li");
    
    productItem.setAttribute("class", "product-item");
    productItem.setAttribute("data-product", productName);
    productItem.innerText = productName;
    
    productItem.addEventListener("click", function() {
        inventoryList.removeChild(productItem);
    });
    
    inventoryList.appendChild(productItem);
}

// Example usage:
addProductItem("Product A");
addProductItem("Product B");


// Task 4: Business Customer Section – Handling Event Bubbling
document.getElementById("customerSection").addEventListener("click", function() {
    console.log("Customer section clicked");
});

document.querySelectorAll(".customer-card").forEach(card => {
    card.addEventListener("click", function(event) {
        console.log("Customer card clicked");
        event.stopPropagation(); // Prevents bubbling
    });
});

