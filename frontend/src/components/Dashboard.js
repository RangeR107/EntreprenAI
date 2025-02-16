// client/src/components/Dashboard.js
import React from 'react';
import { Typography, Container, Box } from '@mui/material';

const Dashboard = () => {
  return (
    <Box sx={{ backgroundColor: 'navy', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', color: 'white' }}>
      <Typography variant="h2" gutterBottom>
        <strong>EntreprenAI</strong>
      </Typography>
      <Typography variant="h4" gutterBottom>
        Welcome to your Startup Dashboard
      </Typography>
      <Typography variant="body1" align="center" sx={{ maxWidth: '600px' }}>
        Use the navigation above to check your Financials, run Market Research, or create AI Generated Advertisements.
      </Typography>
    </Box>
  );
};

export default Dashboard;
