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


