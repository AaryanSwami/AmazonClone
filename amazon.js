document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Example: Simple email and password validation
    const validEmail = 'user@amazon.com';
    const validPassword = 'password123';

    if (email === validEmail && password === validPassword) {
        alert('Login successful!');
    } else {
        alert('Invalid email or password.');
    }
});
