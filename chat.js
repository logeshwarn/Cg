document.addEventListener('DOMContentLoaded', function() {
    const volunteerChatMessages = document.getElementById('volunteerChatMessages');
    const volunteerMessageInput = document.getElementById('volunteerMessageInput');
    const sendVolunteerMessageButton = document.getElementById('sendVolunteerMessageButton');
    
    const communityChatMessages = document.getElementById('communityChatMessages');
    const communityMessageInput = document.getElementById('communityMessageInput');
    const sendCommunityMessageButton = document.getElementById('sendCommunityMessageButton');

    // Handle sending a message to Volunteer
    sendVolunteerMessageButton.addEventListener('click', function() {
        const message = volunteerMessageInput.value.trim();
        if (message) {
            const messageItem = document.createElement('li');
            messageItem.textContent = `You (Elderly): ${message}`;
            volunteerChatMessages.appendChild(messageItem);
            volunteerMessageInput.value = ''; // Clear input after sending
            volunteerChatMessages.scrollTop = volunteerChatMessages.scrollHeight; // Auto-scroll to the bottom
        }
    });

    // Handle sending a message to the Local Community
    sendCommunityMessageButton.addEventListener('click', function() {
        const message = communityMessageInput.value.trim();
        if (message) {
            const messageItem = document.createElement('li');
            messageItem.textContent = `You (Elderly): ${message}`;
            communityChatMessages.appendChild(messageItem);
            communityMessageInput.value = ''; // Clear input after sending
            communityChatMessages.scrollTop = communityChatMessages.scrollHeight; // Auto-scroll to the bottom
        }
    });
});
