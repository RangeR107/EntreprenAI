// client/src/components/Financials.js
import React from 'react';
import { Typography, Container, Table, TableBody, TableCell, TableRow } from '@mui/material';

const Financials = () => {
  // Dummy startup stats
  const financialData = {
    bankBalance: '$50,000',
    profit: '$10,000',
    expenses: '$5,000',
    revenue: '$15,000',
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Financials
      </Typography>
      <Table>
        <TableBody>
          {Object.entries(financialData).map(([key, value]) => (
            <TableRow key={key}>
              <TableCell sx={{ textTransform: 'capitalize' }}>
                {key.replace(/([A-Z])/g, ' $1')}
              </TableCell>
              <TableCell>{value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default Financials;
