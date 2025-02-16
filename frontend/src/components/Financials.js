import React, { useState } from 'react';
import { Typography, Container, TextField, Button, Box } from '@mui/material';
import { Chart } from 'react-chartjs-2';
import 'chart.js/auto';

const Financials = () => {
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState({ name: '', amount: '' });
  const [sellingPrice, setSellingPrice] = useState('');

  const handleAddExpense = () => {
    setExpenses([...expenses, { name: newExpense.name, amount: parseFloat(newExpense.amount) }]);
    setNewExpense({ name: '', amount: '' });
  };

  const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);
  const profit = parseFloat(sellingPrice) - totalExpenses;

  const colors = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(255, 159, 64, 0.2)',
  ];

  const borderColors = [
    'rgba(255, 99, 132, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)',
  ];

  const chartData = {
    labels: [...expenses.map(expense => expense.name), 'Profit'],
    datasets: [
      {
        data: [...expenses.map(expense => expense.amount), profit],
        backgroundColor: [
          ...expenses.map((_, index) => colors[index % colors.length]),
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          ...expenses.map((_, index) => borderColors[index % borderColors.length]),
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.label}: ${context.raw}`;
          },
        },
      },
    },
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Financials
      </Typography>
      <Box display="flex" flexDirection="column" alignItems="flex-start">
        <Typography variant="h6" gutterBottom>
          Unit Economics
        </Typography>
        <Box width={300} height={300}>
          <Chart type="pie" data={chartData} options={options} />
        </Box>
      </Box>
      <TextField
        label="Selling Price"
        value={sellingPrice}
        onChange={(e) => setSellingPrice(e.target.value)}
        sx={{ marginRight: 2, marginBottom: 2 }}
      />
      <TextField
        label="Expense Name"
        value={newExpense.name}
        onChange={(e) => setNewExpense({ ...newExpense, name: e.target.value })}
        sx={{ marginRight: 2, marginBottom: 2 }}
      />
      <TextField
        label="Amount"
        value={newExpense.amount}
        onChange={(e) => setNewExpense({ ...newExpense, amount: e.target.value })}
        sx={{ marginRight: 2, marginBottom: 2 }}
      />
      <Button variant="contained" onClick={handleAddExpense} sx={{ marginBottom: 2 }}>
        Add Expense
      </Button>
    </Container>
  );
};

export default Financials;
