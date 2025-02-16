// client/src/components/Advertisement.js
import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Paper } from '@mui/material';
import axios from 'axios';

const Advertisement = () => {
  const [prompt, setPrompt] = useState('');
  const [adText, setAdText] = useState('');
  const [loading, setLoading] = useState(false);

  const generateAd = async () => {
    setLoading(true);
    try {
      // Using Hugging Face's GPT2 model for ad text generation
      const response = await axios.post(
        'https://api-inference.huggingface.co/models/gpt2',
        { inputs: prompt },
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_HF_API_KEY}`,
          },
        }
      );
      setAdText(response.data[0].generated_text);
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
          <Typography variant="body1">{adText}</Typography>
        </Paper>
      )}
    </Container>
  );
};

export default Advertisement;
