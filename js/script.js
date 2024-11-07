// Function to display dynamic welcome message
function displayWelcomeMessage() {
    const welcomeMessageElement = document.getElementById("welcomeMessage");
    const currentHour = new Date().getHours();
    
    let message;
    
    if (currentHour < 12) {
        message = "Good Morning! Ready for an eco-adventure?";
    } else if (currentHour < 18) {
        message = "Good Afternoon! Plan your next green getaway!";
    } else {
        message = "Good Evening! Explore our sustainable travel options!";
    }
    
    welcomeMessageElement.textContent = message;
}

// Function to highlight travel packages
document.getElementById("highlightBtn").addEventListener("click", function() {
    const table = document.querySelector(".travel-packages table");
    
    table.classList.toggle("highlight");
});

// Call the function to display welcome message
displayWelcomeMessage();