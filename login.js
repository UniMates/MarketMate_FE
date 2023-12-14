async function login() {
    // Get values from the form
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Replace this URL with the actual URL of your authentication endpoint
    var url = '';

    try {
        // Fetch data from the server
        const response = await fetch(url);
        const users = await response.json();

        // Check if the provided username and password match any user in the database
        const authenticatedUser = users.find(user => user.username === username && user.email === password);

        if (authenticatedUser) {
            document.getElementById("error-message").innerText = "Login successful!";
        } else {
            document.getElementById("error-message").innerText = "Invalid username or password";
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        document.getElementById("error-message").innerText = "Error connecting to the server";
    }
}
