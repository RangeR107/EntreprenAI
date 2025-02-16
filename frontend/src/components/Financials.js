import React, { useState } from 'react';
import { Typography, Container, Table, TableBody, TableCell, TableRow, TextField, Button } from '@mui/material';
import { Chart } from 'react-chartjs-2';
import 'chart.js/auto';

const Financials = () => {
  const [financialData, setFinancialData] = useState({
    bankBalance: '₹50,000',
    profit: '₹10,000',
    expenses: '₹5,000',
    revenue: '₹15,000',
    loss: '₹2,000', // Added loss support
  });

  const [newExpense, setNewExpense] = useState({ name: '', amount: '' });

  const handleAddExpense = () => {
    setFinancialData((prevData) => ({
      ...prevData,
      [newExpense.name]: `₹${newExpense.amount}`, // Changed to rupee support
    }));
    setNewExpense({ name: '', amount: '' });
  };

  const chartData = {
    labels: Object.keys(financialData),
    datasets: [
      {
        label: 'Financial Data',
        data: Object.values(financialData).map((value) => parseFloat(value.replace('₹', ''))),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
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
      <TextField
        label="Expense Name"
        value={newExpense.name}
        onChange={(e) => setNewExpense({ ...newExpense, name: e.target.value })}
        sx={{ marginRight: 2 }}
      />
      <TextField
        label="Amount"
        value={newExpense.amount}
        onChange={(e) => setNewExpense({ ...newExpense, amount: e.target.value })}
        sx={{ marginRight: 2 }}
      />
      <Button variant="contained" onClick={handleAddExpense}>
        Add Expense
      </Button>
      <Chart type="bar" data={chartData} />
    </Container>
  );
};

export default Financials;
