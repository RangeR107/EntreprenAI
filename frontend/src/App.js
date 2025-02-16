// client/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Financials from './components/Financials';
import MarketResearch from './components/MarketResearch';
import Advertisement from './components/Advertisement';
import Chatbot from './components/Chatbot';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

function App() {
  return (
    <Router>
      <AppBar position="static" sx={{ backgroundColor: 'black' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            EntreprenAI
          </Typography>
          <Button color="inherit" component={Link} to="/">Dashboard</Button>
          <Button color="inherit" component={Link} to="/financials">Financials</Button>
          <Button color="inherit" component={Link} to="/market-research">Market Research</Button>
          <Button color="inherit" component={Link} to="/advertisement">AI Advertisement</Button>
        </Toolbar>
      </AppBar>
      <Box sx={{ padding: 2 }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/financials" element={<Financials />} />
          <Route path="/market-research" element={<MarketResearch />} />
          <Route path="/advertisement" element={<Advertisement />} />
        </Routes>
      </Box>
      <Chatbot />
    </Router>
  );
}

export default App;
