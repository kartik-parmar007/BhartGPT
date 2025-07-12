import { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const userMessage = { text: inputMessage, sender: 'user', timestamp: new Date() };
      setMessages(prev => [...prev, userMessage]);
      setInputMessage('');
      setIsTyping(true);
      
      // Simulate AI response
      setTimeout(() => {
        const aiMessage = { 
          text: `नमस्ते! मैं BharatGPT हूं। आपकी मदद कैसे कर सकता हूं? (Hello! I'm BharatGPT. How can I help you?)`, 
          sender: 'ai', 
          timestamp: new Date() 
        };
        setMessages(prev => [...prev, aiMessage]);
        setIsTyping(false);
      }, 1500);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>🇮🇳 BharatGPT</h1>
        <nav>
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#languages">Languages</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      
      <main>
        {!showChat ? (
          <>
            <section className="hero">
              <h2>Welcome to BharatGPT</h2>
              <p>भारत के लिए AI सहायक - Your AI assistant tailored for India with support for multiple Indian languages and cultural context.</p>
              <button onClick={() => setShowChat(true)}>Start Chatting</button>
            </section>
            
            <section id="features">
              <h3>Key Features</h3>
              <div className="features-grid">
                <div className="feature-card">
                  <h4>🌍 Multilingual Support</h4>
                  <p>Chat in Hindi, English, Tamil, Telugu, Bengali, and more Indian languages</p>
                </div>
                <div className="feature-card">
                  <h4>🏛️ Cultural Context</h4>
                  <p>Understanding of Indian traditions, festivals, and cultural nuances</p>
                </div>
                <div className="feature-card">
                  <h4>🎓 Educational Support</h4>
                  <p>Help with Indian curriculum, entrance exams, and local education systems</p>
                </div>
                <div className="feature-card">
                  <h4>💼 Business Insights</h4>
                  <p>Indian market analysis, business practices, and regulatory information</p>
                </div>
                <div className="feature-card">
                  <h4>🏥 Healthcare Guidance</h4>
                  <p>Information about Indian healthcare systems and Ayurveda</p>
                </div>
                <div className="feature-card">
                  <h4>🚀 Technology Updates</h4>
                  <p>Latest in Indian tech innovations and digital initiatives</p>
                </div>
              </div>
            </section>
            
            <section id="languages">
              <h3>Supported Languages</h3>
              <div className="language-grid">
                <span className="language-tag">हिंदी</span>
                <span className="language-tag">English</span>
                <span className="language-tag">தமிழ்</span>
                <span className="language-tag">తెలుగు</span>
                <span className="language-tag">বাংলা</span>
                <span className="language-tag">ગુજરાતી</span>
                <span className="language-tag">मराठी</span>
                <span className="language-tag">ಕನ್ನಡ</span>
                <span className="language-tag">മലയാളം</span>
                <span className="language-tag">ਪੰਜਾਬੀ</span>
              </div>
            </section>
          </>
        ) : (
          <section className="chat-interface">
            <div className="chat-header">
              <h3>Chat with BharatGPT</h3>
              <button onClick={() => setShowChat(false)} className="close-chat">×</button>
            </div>
            
            <div className="chat-messages">
              {messages.length === 0 && (
                <div className="welcome-message">
                  <p>🙏 नमस्ते! Welcome to BharatGPT</p>
                  <p>Ask me anything about India, in any Indian language!</p>
                </div>
              )}
              
              {messages.map((message, index) => (
                <div key={index} className={`message ${message.sender}`}>
                  <div className="message-content">
                    {message.text}
                  </div>
                  <div className="message-time">
                    {message.timestamp.toLocaleTimeString()}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="message ai typing">
                  <div className="message-content">
                    <div className="typing-indicator">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            
            <div className="chat-input">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message in any Indian language..."
              />
              <button onClick={handleSendMessage} disabled={!inputMessage.trim()}>Send</button>
            </div>
          </section>
        )}
      </main>
      
      <footer>
        <p>© 2025 BharatGPT - Made in India 🇮🇳</p>
      </footer>
    </div>
  );
}

export default App;
