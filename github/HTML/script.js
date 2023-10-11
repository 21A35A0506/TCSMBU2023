document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get the entered username and password
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Perform validation (replace with your own validation logic)
    if (validateUser(username, password)) {
        // Redirect to user-details.html
        window.location.href = 'StudentDetails.html';
    } else {
        // Display an error message (you can modify this part)
        alert('Invalid username or password. Please try again.');
    }
});

// Sample validation function (replace with your own logic)
function validateUser(username, password) {
    // Replace this with your actual validation logic
    // For simplicity, let's assume valid credentials are "user123" and "password123"
    return username === 'project@tcsfrt23.com' && password === 'password123';
}
