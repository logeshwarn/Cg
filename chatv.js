document.addEventListener('DOMContentLoaded', function() {
    const elderlyChatMessages = document.getElementById('elderlyChatMessages');
    const elderlyMessageInput = document.getElementById('elderlyMessageInput');
    const sendElderlyMessageButton = document.getElementById('sendElderlyMessageButton');

    const communityChatMessages = document.getElementById('communityChatMessages');
    const communityMessageInput = document.getElementById('communityMessageInput');
    const sendCommunityMessageButton = document.getElementById('sendCommunityMessageButton');

    // Handle sending a message to Elderly chat
    sendElderlyMessageButton.addEventListener('click', function() {
        const message = elderlyMessageInput.value.trim();
        if (message) {
            const messageItem = document.createElement('li');
            messageItem.textContent = `You (Volunteer): ${message}`;
            elderlyChatMessages.appendChild(messageItem);
            elderlyMessageInput.value = ''; // Clear input after sending
            elderlyChatMessages.scrollTop = elderlyChatMessages.scrollHeight; // Auto-scroll to the bottom
        }
    });

    // Handle sending a message to Local Community chat
    sendCommunityMessageButton.addEventListener('click', function() {
        const message = communityMessageInput.value.trim();
        if (message) {
            const messageItem = document.createElement('li');
            messageItem.textContent = `You (Community): ${message}`;
            communityChatMessages.appendChild(messageItem);
            communityMessageInput.value = ''; // Clear input after sending
            communityChatMessages.scrollTop = communityChatMessages.scrollHeight; // Auto-scroll to the bottom
        }
    });
});
