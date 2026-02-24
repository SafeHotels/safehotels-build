// SafeHotels.ai — Chat Widget Script

const chatButton = document.getElementById('chatButton');
const chatContainer = document.getElementById('chatContainer');
const chatMinimize = document.getElementById('chatMinimize');
const chatSend = document.getElementById('chatSend');
const chatInput = document.getElementById('chatInput');
const chatMessages = document.getElementById('chatMessages');

if (chatButton) {
    chatButton.addEventListener('click', () => {
        chatContainer.classList.toggle('open');
    });
}
if (chatMinimize) {
    chatMinimize.addEventListener('click', () => {
        chatContainer.classList.remove('open');
    });
}

function addMessage(text, isUser) {
    const div = document.createElement('div');
    div.className = isUser ? 'user-message' : 'bot-message';
    div.innerHTML = `
        <div class="message-avatar">${isUser ? 'You' : 'AI'}</div>
        <div class="message-bubble"><p>${text}</p></div>
    `;
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function sendMessage() {
    const text = chatInput.value.trim();
    if (!text) return;
    addMessage(text, true);
    chatInput.value = '';
    setTimeout(() => {
        addMessage("Thanks for your question! I'm here to help you find the safest hotels. Please visit our <a href='search.html' style='color:#ff751f;font-weight:700;'>hotel search</a> to explore options by safety score.", false);
    }, 800);
}

if (chatSend) chatSend.addEventListener('click', sendMessage);
if (chatInput) chatInput.addEventListener('keypress', e => { if (e.key === 'Enter') sendMessage(); });
