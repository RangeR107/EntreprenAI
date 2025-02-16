// client/src/components/Dashboard.js
import React from 'react';
import { Typography, Container } from '@mui/material';

const Dashboard = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Welcome to your Startup Dashboard
      </Typography>
      <Typography variant="body1">
        Use the navigation above to check your Financials, run Market Research, or create AI Generated Advertisements.
      </Typography>
    </Container>
  );
};

export default Dashboard;
