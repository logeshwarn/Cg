document.addEventListener('DOMContentLoaded', function() {
    const settingsForm = document.getElementById('settingsForm');
    const volunteerNameInput = document.getElementById('volunteerName');
    const volunteerEmailInput = document.getElementById('volunteerEmail');
    const volunteerPhoneInput = document.getElementById('volunteerPhone');

    // Pre-fill fields with the current volunteer's information from localStorage
    volunteerNameInput.value = localStorage.getItem('volunteerName') || '';
    volunteerEmailInput.value = localStorage.getItem('volunteerEmail') || '';
    volunteerPhoneInput.value = localStorage.getItem('volunteerPhone') || '';

    // Save settings to localStorage when form is submitted
    settingsForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = volunteerNameInput.value;
        const email = volunteerEmailInput.value;
        const phone = volunteerPhoneInput.value;

        // Save data to localStorage (you can save this to a database in a real app)
        localStorage.setItem('volunteerName', name);
        localStorage.setItem('volunteerEmail', email);
        localStorage.setItem('volunteerPhone', phone);

        alert('Settings updated successfully!');
    });
});
