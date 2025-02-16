# EntreprenAI

EntreprenAI is an AI-driven web application designed to empower solo startup founders. The platform provides a comprehensive dashboard with multiple modules to help founders manage finances, perform market research, generate AI-powered advertisements, and access a smart chatbot for strategic guidance and pitch deck support. Powered by Groq’s generative AI, EntreprenAI streamlines the startup journey with real-time insights and actionable recommendations.


## Features

- *Dashboard Modules:*
  - **Financials:** View real-time startup stats (bank balance, profit, expenses, revenue).
  - **Market Research:** Analyze competitor and industry data relevant to your startup niche.
  - **AI-Generated Advertisement:** Create compelling ad content on demand.
- **Smart Chatbot:**
  - Provides pitch deck creation assistance, investor Q&A simulations, SWOT analysis, and personalized startup roadmap guidance.
  - Powered by Groq’s generative AI for dynamic, conversational support.
- **Future Community Platform (Planned):**
  - Profile creation for entrepreneurs.
  - AI-driven recommendations to connect with co-founders, mentors, and partners.

## Tech Stack

- **Frontend:** React, Material UI, React Router
- **Backend:** Node.js, Express, Axios
- **AI Integration:** Groq API for generative AI functionality
- **Version Control:** Git & GitHub

## Project Structure

EntreprenAI/ ├── client/ # React frontend application │ ├── public/ │ ├── src/ │ │ ├── components/ # React components for dashboard modules and chatbot │ │ ├── App.js # Main app with routing and layout │ │ └── index.js # Entry point for the React app │ └── package.json ├── server/ # Node/Express backend application │ ├── index.js # Main server file with API endpoints │ ├── .env # Environment variables (e.g., GROQ_API_KEY) │ └── package.json └── README.md


## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v14+ recommended)
- [Git](https://git-scm.com/)

### Clone the Repository


git clone https://github.com/your-username/EntreprenAI.git
cd EntreprenAI
Set Up the Backend
Navigate to the server folder:


cd server
Install dependencies:

npm install
Create a .env file in the server folder and add your Groq API key:


GROQ_API_KEY=your_groq_api_key_here
PORT=5001
Start the backend server:


node index.js
Set Up the Frontend
Open a new terminal and navigate to the client folder:


cd client
Install dependencies:


npm install
Create a .env file in the client folder if needed (e.g., for API keys you might want to proxy):


REACT_APP_GROQ_API_KEY=your_groq_api_key_here
Start the React development server:

npm start
Usage
Dashboard Navigation:
Use the navigation bar to switch between the Financials, Market Research, and AI Advertisement modules.
Smart Chatbot:
Click the chat icon at the bottom-right of the screen to open the chatbot and interact for strategic guidance.
Backend API:
The backend is running on port 5001 and handles requests to /api/chat for chatbot interactions.
Environment Variables
Backend (server/.env)
GROQ_API_KEY: Your API key for accessing Groq’s generative AI services.
PORT: The port on which the backend server will run (default: 5001).
Frontend (client/.env)
REACT_APP_GROQ_API_KEY: (Optional) Your API key if needed for direct integration.
Future Enhancements
Community Platform:
Enable entrepreneurs to create profiles and network.
AI-driven recommendations to match founders with potential co-founders, mentors, and collaborators.
Real-Time Data Integrations:
Enhance market research with live data feeds and analytics.
Additional AI Features:
Expand chatbot capabilities and integrate more advanced AI-driven insights.
Contributing
Contributions are welcome! Feel free to fork the repository, create a branch, and submit pull requests. For major changes, please open an issue first to discuss your ideas.

License
This project is licensed under the MIT License.


---

Feel free to customize this README to suit your project's details and any additional instructions or notes you’d like to provide for your users or contributors.
