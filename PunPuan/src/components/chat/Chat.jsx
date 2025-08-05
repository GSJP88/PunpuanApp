import React, { useState } from 'react';
import '../../Styles/chat.css';
import chatBg from '../../assets/smallcondo.jpg';

const initialMessages = [
  { id: 1, sender: 'admin', type: 'text', text: "How can we help? We're here for you!", time: '3:09 pm' },
  { id: 2, sender: 'user', type: 'text', text: 'Hey John, I am looking for the best admin template.', time: '3:09 pm' },
  { id: 3, sender: 'user', type: 'text', text: 'It should be Bootstrap 4 compatible', time: '3:09 pm' },
  { id: 4, sender: 'admin', type: 'text', text: 'Absolutely!', time: '3:09 pm' },
  { id: 5, sender: 'admin', type: 'text', text: 'Modern admin is the responsive bootstrap 4 admin template!', time: '3:09 pm' },
];

const Chat = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [modalImage, setModalImage] = useState(null); // ← For modal preview

  const handleSend = () => {
    if (newMessage.trim() !== '') {
      const newMsg = {
        id: messages.length + 1,
        sender: 'user',
        type: 'text',
        text: newMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([...messages, newMsg]);
      setNewMessage('');
    }

    if (selectedFile) {
      const fileUrl = URL.createObjectURL(selectedFile);
      const isImage = selectedFile.type.startsWith('image/');
      const fileMsg = {
        id: messages.length + 2,
        sender: 'user',
        type: isImage ? 'image' : 'file',
        fileUrl,
        fileName: selectedFile.name,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, fileMsg]);
      setSelectedFile(null);
    }
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  return (
    <>
      <div className="chat-container box_container" style={{ backgroundImage: `url(${chatBg})` }}>
        <div className="chat-header">
          <div className="avatar">
            <i className="bi bi-headset"></i>
            <div className="status">
              <i className="bi bi-circle-fill"></i>
            </div>
          </div>
          <div>
            <div className="name">Jane Rowlis</div>
          </div>
        </div>

        <div className="chat-box">
          {messages.map(msg => (
            <div key={msg.id} className={`message-row ${msg.sender === 'admin' ? 'admin' : 'user'}`}>
              {msg.type === 'text' && (
                <div className="message">{msg.text}</div>
              )}
              {msg.type === 'image' && (
                <img
                  src={msg.fileUrl}
                  alt="sent"
                  className="image-preview"
                  onClick={() => setModalImage(msg.fileUrl)}
                />
              )}
              {msg.type === 'file' && (
                <a href={msg.fileUrl} download className="file-link">{msg.fileName}</a>
              )}
              <div className="time">{msg.time}</div>
            </div>
          ))}
        </div>

        <div className="chat-input">
          <label className="file-label">
            <i className="bi bi-paperclip"></i>
            <input type="file" onChange={handleFileChange} hidden />
          </label>
          <input
            type="text"
            placeholder="Type Your Message"
            value={newMessage}
            onChange={e => setNewMessage(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSend()}
          />
          <button onClick={handleSend}><i className="bi bi-send"></i></button>
        </div>
      </div>

      {/* Image modal */}
      {modalImage && (
        <div className="image-modal" onClick={() => setModalImage(null)}>
          <span className="close-btn" onClick={() => setModalImage(null)}>&times;</span>
          <img src={modalImage} alt="Full View" className="modal-image" />
        </div>
      )}
    </>
  );
};

export default Chat;
