// Get elements
const emailPasswordForm = document.getElementById('email-password-form');
const otpForm = document.getElementById('otp-form');
const successNotification = document.getElementById('success-notification');
const signupForm = document.getElementById('signup-form');

// Event listener for the Sign Up form submission
emailPasswordForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('new-password').value;
    
    // Validate that the email is a Gmail account
    if (!email.endsWith('@gmail.com')) {
        alert('Please enter a valid Gmail ID.');
        return;
    }
    
    // Normally, here you would send a request to the server to send the OTP to the user's email.
    // For this demo, we'll skip that and show the OTP form directly.
    alert('OTP sent to your Gmail. Please check your inbox.');
    
    // Hide the signup form and show the OTP form
    signupForm.style.display = 'none';
    otpForm.style.display = 'block';
});

// Event listener for OTP verification
otpForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const otp = document.getElementById('otp').value;
    
    // Normally, here you would send the OTP to the server for verification
    // For now, we'll just assume any 5-digit OTP is valid
    if (otp.length === 5) {
        // OTP verified successfully
        otpForm.style.display = 'none';
        successNotification.style.display = 'block';
        
        // Simulate a redirect to login page after 2 seconds
        setTimeout(function() {
            window.location.href = '../login/loginpage.html'; // Redirect to login page
        }, 2000);
    } else {
        alert('Invalid OTP. Please enter the correct 5-digit OTP.');
    }
});
