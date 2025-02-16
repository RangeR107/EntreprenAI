// client/src/components/Chatbot.js
import React, { useState, useEffect, useRef } from 'react';
import { Paper, IconButton, TextField, Typography, Box } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [conversation, setConversation] = useState([]); // Each item: { sender: 'user'|'bot', message: string }
  const [input, setInput] = useState('');
  const chatEndRef = useRef(null);

  const toggleChat = () => {
    setOpen(!open);
  };

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { sender: 'user', message: input };
    setConversation(prev => [...prev, userMessage]);
    setInput('');
    try {
      const response = await axios.post('http://localhost:5001/api/chat', { message: input });
      const botMessage = { sender: 'bot', message: response.data.generated_text };
      setConversation(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error communicating with chatbot:', error);
      const botMessage = { sender: 'bot', message: 'Error: Unable to get response.' };
      setConversation(prev => [...prev, botMessage]);
    }
  };

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [conversation]);

  return (
    <>
      <IconButton
        onClick={toggleChat}
        color="primary"
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          backgroundColor: 'white',
          boxShadow: 3,
        }}
      >
        {open ? <CloseIcon /> : <ChatIcon />}
      </IconButton>
      {open && (
        <Paper
          elevation={4}
          sx={{
            position: 'fixed',
            bottom: 70,
            right: 16,
            width: 300,
            maxHeight: 400,
            overflowY: 'auto',
            padding: 2,
          }}
        >
          <Typography variant="h6">Startup Chatbot</Typography>
          <Box sx={{ maxHeight: 300, overflowY: 'auto', marginBottom: 1 }}>
            {conversation.map((msg, index) => (
              <Box
                key={index}
                sx={{ marginBottom: 1, textAlign: msg.sender === 'bot' ? 'left' : 'right' }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    backgroundColor: msg.sender === 'bot' ? '#f0f0f0' : '#d1e7dd',
                    display: 'inline-block',
                    padding: '5px 10px',
                    borderRadius: '10px',
                  }}
                >
                  <ReactMarkdown>{msg.message}</ReactMarkdown>
                </Typography>
              </Box>
            ))}
            <div ref={chatEndRef} />
          </Box>
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') sendMessage();
            }}
          />
        </Paper>
      )}
    </>
  );
};

export default Chatbot;
