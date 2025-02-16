// client/src/components/Advertisement.js
import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Paper } from '@mui/material';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

const Advertisement = () => {
  const [prompt, setPrompt] = useState('');
  const [adText, setAdText] = useState('');
  const [loading, setLoading] = useState(false);

  const generateAd = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        'http://localhost:5001/api/generate-ad',
        { prompt },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      setAdText(response.data.generated_text);
    } catch (error) {
      console.error('Error generating advertisement:', error);
      setAdText('Error generating advertisement.');
    }
    setLoading(false);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        AI Generated Advertisement
      </Typography>
      <TextField
        label="Enter your advertisement prompt"
        variant="outlined"
        fullWidth
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <Button variant="contained" onClick={generateAd} disabled={loading}>
        {loading ? 'Generating...' : 'Generate Advertisement'}
      </Button>
      {adText && (
        <Paper elevation={3} sx={{ padding: 2, marginTop: 2 }}>
          <ReactMarkdown>{adText}</ReactMarkdown>
        </Paper>
      )}
    </Container>
  );
};

export default Advertisement;
