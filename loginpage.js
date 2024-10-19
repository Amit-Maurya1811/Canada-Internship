// Get elements
const toggleBtn = document.getElementById('toggle-login-btn');
const userLoginForm = document.getElementById('user-login');
const adminLoginForm = document.getElementById('admin-login');
const formTitle = document.getElementById('form-title');
const signUpBtn = document.getElementById('sign-up-btn');  // Get the Sign Up button
const userloginbtn = document.getElementById('userloginbtn');
const adminloginbtn = document.getElementById('adminloginbtn');

// Mock database of users (for simplicity, hardcoded credentials)
const users = {
    "user1": { username: "user1", password: "user123", role: "user" },
    "admin1": { username: "admin1", password: "admin123", role: "admin" }
};

// Default: show user login, hide admin login
adminLoginForm.style.display = 'none';

// Event listener for toggling login forms
toggleBtn.addEventListener('click', () => {
    if (userLoginForm.style.display === 'none') {
        // Show user login form
        adminLoginForm.style.display = 'none';
        userLoginForm.style.display = 'block';
        formTitle.textContent = 'User Login';
        toggleBtn.textContent = 'Admin Login';
    } else {
        // Show admin login form
        userLoginForm.style.display = 'none';
        adminLoginForm.style.display = 'block';
        formTitle.textContent = 'Admin Login';
        toggleBtn.textContent = 'User Login';
    }
});

// Event listener for Sign Up button to redirect to the signup page
signUpBtn.addEventListener('click', () => {
    // Adjust the path to point to the signup folder
    window.location.href = '../signup/signup.html';  // Redirect to the sign-up page in the 'signup' folder
});

// Event listener for login button (assuming user-login-btn and admin-login-btn are IDs for submit buttons)
document.getElementById('userloginbtn').addEventListener('click', (e) => {
    e.preventDefault();
    
    // Get user login credentials
    const username = document.getElementById('user-username').value;
    const password = document.getElementById('user-password').value;
    
    // Validate user credentials
    if (users[username] && users[username].password === password && users[username].role === 'user') {
        // Redirect to user main page
        window.location.href = '../usermainpage/usermainpage.html';
    } else {
        alert('Invalid user credentials');
    }
});

document.getElementById('adminloginbtn').addEventListener('click', (e) => {
    e.preventDefault();
    
    // Get admin login credentials
    const username = document.getElementById('admin-username').value;
    const password = document.getElementById('admin-password').value;
    const ministryPosition = document.getElementById('ministry-position').value;  // Optional: use this if required
    
    // Validate admin credentials
    if (users[username] && users[username].password === password && users[username].role === 'admin') {
        // Redirect to admin main page
       
        window.location.href = '../adminmainpage/adminmainpage.html';
    } else {
        alert('Invalid admin credentials');
    }
});