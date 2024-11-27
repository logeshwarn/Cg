document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const userType = document.getElementById('userType').value;
    const username = document.getElementById('username').value;

    localStorage.setItem('userType', userType);
    localStorage.setItem('username', username);

    window.location.href = "home.html";  // Redirect to home page
});

document.addEventListener('DOMContentLoaded', function() {
    const username = localStorage.getItem('username');
    document.getElementById('userName').innerText = username;

    // If user navigates directly to home page without logging in
    if (!username) {
        window.location.href = "login.html"; 
    }
});

// Emergency Alert Function
function sendEmergencyAlert() {
    alert('Emergency alert sent to all nearby volunteers!');
    // In a real app, you would send this data to a backend server
}

// Send message to chat
function sendMessage(chatType) {
    const messageBox = document.getElementById(chatType + 'Message');
    const message = messageBox.value;
    messageBox.value = '';

    const chatBox = document.getElementById(chatType + 'ChatBox');
    const newMessage = document.createElement('div');
    newMessage.textContent = message;
    chatBox.appendChild(newMessage);
}


document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const userType = document.getElementById('userType').value;
    const username = document.getElementById('username').value;

    if (!userType) {
        alert('Please select whether you are a Volunteer or Elderly.');
        return;
    }

    // Store the user type and username for use on other pages
    localStorage.setItem('userType', userType);
    localStorage.setItem('username', username);

    // Redirect to home page
    window.location.href = "home.html";
});

