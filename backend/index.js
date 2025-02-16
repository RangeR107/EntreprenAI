import express from 'express';
import axios from 'axios';
import cors from 'cors';
import dotenv from 'dotenv';
import Groq from "groq-sdk";

dotenv.config();

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const app = express();
app.use(cors());
app.use(express.json());

// Chatbot endpoint using Hugging Face's conversational model (DialoGPT)
app.post('/api/chat', async (req, res) => {
  const { message } = req.body;
  // console.log('Response from Hugging Face API:', process.env.HF_API_KEY);

  // try {
  //   const response = await axios.post(
  //     'https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium',
  //     { inputs: message },
  //     { headers: { Authorization: `Bearer ${process.env.HF_API_KEY}` } }
  //   );
  //   console.log('Response from Hugging Face API:', response.data);
  //   // For simplicity, assume the model returns a field named "generated_text"
  //   res.json({ generated_text: response.data.generated_text || "I'm not sure how to answer that." });
  // } catch (error) {
  //   console.log(error);
  //   console.error('Error calling Hugging Face API:', error.message);
  //   res.status(500).json({ error: 'Error processing request' });
  // }

  const completion = await groq.chat.completions
    .create({
      messages: [
        {
          role: "user",
          content: message,
        },
      ],
      model: "llama-3.3-70b-versatile",
    })
    .then((chatCompletion) => {
      console.log(chatCompletion.choices[0]?.message?.content || "");
      return chatCompletion.choices[0]?.message?.content || "I'm not sure how to answer that.";
    });

  res.json({ generated_text: completion });
});

// AI Advertisement endpoint
app.post('/api/generate-ad', async (req, res) => {
  const { prompt } = req.body;

  try {
    const completion = await groq.chat.completions
      .create({
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
        model: "llama-3.3-70b-versatile",
      })
      .then((chatCompletion) => {
        return chatCompletion.choices[0]?.message?.content || "Error generating advertisement.";
      });

    res.json({ generated_text: completion });
  } catch (error) {
    console.error('Error generating advertisement:', error);
    res.status(500).json({ error: 'Error generating advertisement.' });
  }
});

app.get('/', (req, res) => {
  res.send('EntreprenAI Backend is running!');
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



