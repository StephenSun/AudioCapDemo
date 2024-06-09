document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript loaded!");
    
    // Example function to demonstrate interactivity
    function showAlert() {
        alert("Button clicked!");
    }

    // Bind the function to a button click event
    var button = document.getElementById("myButton");
    if (button) {
        button.addEventListener("click", showAlert);
    }
});
