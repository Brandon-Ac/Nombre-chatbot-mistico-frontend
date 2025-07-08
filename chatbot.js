document.addEventListener('DOMContentLoaded', function() {
  const chatContainer = document.getElementById('chat-container');
  const messageInput = document.getElementById('message-input');
  const sendButton = document.getElementById('send-button');
  const typingIndicator = document.getElementById('typing-indicator');
  const starsContainer = document.getElementById('stars-container');
  const constellation = document.getElementById('constellation');

  // 🕒 Inactivity management
  let inactivityAlertTimer;
  let inactivityResetTimer;

  function resetInactivityTimers() {
    clearTimeout(inactivityAlertTimer);
    clearTimeout(inactivityResetTimer);

    inactivityAlertTimer = setTimeout(() => {
      addMessage("¿Sigues ahí? Han pasado 2 minutos sin actividad.", false, true);
    }, 2 * 60 * 1000);

    inactivityResetTimer = setTimeout(() => {
      addMessage("Sesión finalizada por inactividad. Chat limpiado automáticamente.", false, true);
      setTimeout(() => {
        chatContainer.innerHTML = '';
        chatContainer.appendChild(typingIndicator);
      }, 3000);
    }, 5 * 60 * 1000);
  }

  function addMessage(text, isSent, italic = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isSent ? 'sent' : 'received'}`;
    if (Math.random() > 0.9 && !isSent) messageDiv.classList.add('special-message');

    messageDiv.innerHTML = `
      <div>${italic ? `<em>${text}</em>` : text}</div>
      <div class="message-time">${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
    `;

    chatContainer.insertBefore(messageDiv, typingIndicator);
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }

  async function simulateBotResponse(pregunta) {
    typingIndicator.classList.add('active');

    try {
      const response = await fetch("https://backend-web-b7rm.onrender.com/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: pregunta })  // 👈 este nombre debe coincidir con tu backend
      });


      const data = await response.json();
      typingIndicator.classList.remove('active');
      addMessage(data.respuesta, false);
    } catch (error) {
      typingIndicator.classList.remove('active');
      addMessage("<strong>Error:</strong> No se pudo conectar al servidor.", false);
    }
  }

  function sendMessage() {
    const text = messageInput.value.trim();
    if (!text) return;
    addMessage(text, true);
    messageInput.value = '';
    simulateBotResponse(text);
    resetInactivityTimers();
  }

  sendButton.addEventListener('click', sendMessage);
  messageInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') sendMessage();
  });
  messageInput.addEventListener('keydown', resetInactivityTimers);
  chatContainer.addEventListener('scroll', resetInactivityTimers);

  function createStars() {
    const count = Math.floor(window.innerWidth * window.innerHeight / 1000);
    for (let i = 0; i < count; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      const size = Math.random() * 2 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.opacity = Math.random() * 0.5 + 0.3;
      star.style.animationDuration = `${Math.random() * 4 + 2}s`;
      starsContainer.appendChild(star);
    }
  }

  function createConstellation() {
    const stars = 15;
    const points = [];
    for (let i = 0; i < stars; i++) {
      points.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight * 0.5,
        connections: []
      });
    }
    points.forEach((point, index) => {
      const connections = Math.floor(Math.random() * 3) + 1;
      for (let i = 0; i < connections; i++) {
        let targetIndex;
        do {
          targetIndex = Math.floor(Math.random() * points.length);
        } while (targetIndex === index || point.connections.includes(targetIndex));
        point.connections.push(targetIndex);
        const targetPoint = points[targetIndex];
        const line = document.createElement('div');
        line.className = 'constellation-line';
        const distance = Math.sqrt(Math.pow(targetPoint.x - point.x, 2) + Math.pow(targetPoint.y - point.y, 2));
        line.style.width = `${distance}px`;
        line.style.left = `${point.x}px`;
        line.style.top = `${point.y}px`;
        const angle = Math.atan2(targetPoint.y - point.y, targetPoint.x - point.x) * 180 / Math.PI;
        line.style.transform = `rotate(${angle}deg)`;
        line.style.opacity = Math.random() * 0.3 + 0.1;
        constellation.appendChild(line);
      }
    });
  }

  function createTwinkleEffect() {
    const existingStars = document.querySelectorAll('.star');
    existingStars.forEach(star => {
      if (Math.random() > 0.9) {
        star.style.animation = 'none';
        void star.offsetWidth;
        star.style.animation = 'intenseTwinkle 1s ease-in-out';
        setTimeout(() => {
          star.style.animation = 'twinkle 3s infinite alternate';
        }, 1000);
      }
    });
    const styleSheet = document.styleSheets[0];
    if (![...styleSheet.cssRules].some(rule => rule.name === 'intenseTwinkle')) {
      styleSheet.insertRule(`
        @keyframes intenseTwinkle {
          0% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
          100% { opacity: 0.7; transform: scale(1); }
        }
      `, styleSheet.cssRules.length);
    }
  }

  resetInactivityTimers();
  createStars();
  createConstellation();

  let resizeTimeout;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function() {
      starsContainer.innerHTML = '';
      constellation.innerHTML = '';
      createStars();
      createConstellation();
    }, 200);
  });
});
