// client/src/components/MarketResearch.js
import React from 'react';
import { Typography, Container, Table, TableBody, TableCell, TableRow, TableHead } from '@mui/material';

const MarketResearch = () => {
  // Dummy competitor data (e.g., for clothing industry)
  const competitors = [
    { name: 'Brand A', revenue: '$1M', marketShare: '15%' },
    { name: 'Brand B', revenue: '$2M', marketShare: '25%' },
    { name: 'Brand C', revenue: '$500K', marketShare: '10%' },
  ];

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Market Research
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Brand</TableCell>
            <TableCell>Revenue</TableCell>
            <TableCell>Market Share</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {competitors.map((comp, index) => (
            <TableRow key={index}>
              <TableCell>{comp.name}</TableCell>
              <TableCell>{comp.revenue}</TableCell>
              <TableCell>{comp.marketShare}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default MarketResearch;
