document.addEventListener('DOMContentLoaded', function() {
    // Add student information dynamically
    var studentInfo = document.getElementById('student-info');
    studentInfo.innerText = "Student ID: 200556299 | Name: Laxit Sompura";

    // Function to handle order button click
    document.getElementById('order-btn').addEventListener('click', function() {
        var size = document.getElementById('size').value;
        var crust = document.getElementById('crust').value;
        var toppings = [];
        var checkboxes = document.querySelectorAll('input[name="topping"]:checked');
        checkboxes.forEach(function(checkbox) {
            toppings.push(checkbox.value);
        });

        // Create Pizza object
        var pizza = new Pizza(size, crust, toppings);

        // Display order summary
        var orderSummary = document.getElementById('order-summary');
        orderSummary.innerHTML = `
            <h2>Order Summary:</h2>
            <p>Size: ${pizza.size}</p>
            <p>Crust: ${pizza.crust}</p>
            <p>Toppings: ${pizza.toppings.join(', ')}</p>
        `;
    });
});

// Pizza class
class Pizza {
    constructor(size, crust, toppings) {
        this.size = size;
        this.crust = crust;
        this.toppings = toppings;
    }
}
