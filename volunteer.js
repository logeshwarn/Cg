document.addEventListener('DOMContentLoaded', function() {
    // Get volunteer name from localStorage
    const volunteerName = localStorage.getItem('username');
    document.getElementById('volunteerName').textContent = volunteerName;

    // Request List - You can replace this with real dynamic data (e.g., from an API)
    const requestList = [
        "Elderly person needs assistance with groceries",
        "Help with walking from the park to home",
        "Assist with setting up a medical appointment"
    ];

    // Dynamically populate the request list
    const requestListElement = document.getElementById('requestList');
    requestList.forEach(request => {
        const listItem = document.createElement('li');
        listItem.textContent = request;
        requestListElement.appendChild(listItem);
    });

    // Handle "I'm Ready to Help" button
    const readyButton = document.getElementById('readyButton');
    readyButton.addEventListener('click', function() {
        alert('You are now marked as ready to help!');
        // Here you can add functionality to update the backend or status of the volunteer
    });
});
