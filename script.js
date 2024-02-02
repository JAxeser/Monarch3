const ws = new WebSocket('wss://your-github-username.github.io/chat'); // Replace with your GitHub username

ws.onmessage = (event) => {
    const messagesDiv = document.getElementById('messages');
    const messageDiv = document.createElement('div');
    messageDiv.textContent = event.data;
    messagesDiv.appendChild(messageDiv);

    // Scroll to the bottom
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
};

function sendMessage() {
    const inputMessage = document.getElementById('messageInput');
    const message = inputMessage.value;

    if (message.trim() !== '') {
        ws.send(message);
        inputMessage.value = '';
    }
}

function postContent() {
    const postInput = document.getElementById('postInput');
    const postContent = postInput.value;

    if (postContent.trim() !== '') {
        ws.send(`User posted: ${postContent}`);
        postInput.value = '';
    }
}
