import React, { useState } from 'react';
import { Typography, Container, TextField, Button } from '@mui/material';
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

  const chartData = {
    labels: [...expenses.map(expense => expense.name), 'Profit'],
    datasets: [
      {
        label: 'Unit Economics',
        data: [...expenses.map(expense => expense.amount), profit],
        backgroundColor: [
          ...expenses.map(() => 'rgba(255, 99, 132, 0.2)'),
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          ...expenses.map(() => 'rgba(255, 99, 132, 1)'),
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Financials
      </Typography>
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
      <Chart type="pie" data={chartData} />
    </Container>
  );
};

export default Financials;
