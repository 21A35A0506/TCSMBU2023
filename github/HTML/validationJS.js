document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    
    if (validateUser(username, password)) {
        
        window.location.href = 'studentdetails.html';
    } else {
        
        alert('Invalid username or password. Please try again.');
    }
});


function validateUser(username, password) {
    
    return username === 'project@tcsfrt23.com' && password === 'password123';
}
