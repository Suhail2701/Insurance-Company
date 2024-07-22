window.onload = function () {
    // Retrieve the customer ID from the query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const customerId = urlParams.get('customerId');

    // Retrieve user data from local storage
    const userData = JSON.parse(localStorage.getItem('users'));

    // Find the user data based on the customer ID
    const user = userData.find(user => user.customerId === customerId);

    if (user) {
        // Update the content of the span elements with user data
        document.getElementById('dCustomerId').textContent = user.customerId;
        document.getElementById('dCustomerName').textContent = user.name;
        document.getElementById('dCustomerEmail').textContent = user.email;
    }
};

