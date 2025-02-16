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
  const [sellingPrice, setSellingPrice] = useState('');
  const [unitsSold, setUnitsSold] = useState('');

  const handleAddExpense = () => {
    setFinancialData((prevData) => ({
      ...prevData,
      expenses: `₹${parseFloat(prevData.expenses.replace('₹', '')) + parseFloat(newExpense.amount)}`,
      [newExpense.name]: `₹${newExpense.amount}`, // Changed to rupee support
    }));
    setNewExpense({ name: '', amount: '' });
  };

  const totalRevenue = parseFloat(sellingPrice) * parseFloat(unitsSold);
  const totalExpenses = Object.entries(financialData)
    .filter(([key]) => key !== 'bankBalance' && key !== 'profit' && key !== 'revenue')
    .reduce((acc, [key, value]) => acc + parseFloat(value.replace('₹', '')), 0);
  const profit = totalRevenue - totalExpenses;

  const chartData = {
    labels: ['Expenses', 'Profit'],
    datasets: [
      {
        label: 'Unit Economics',
        data: [totalExpenses, profit],
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(75, 192, 192, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(75, 192, 192, 1)'],
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
      <TextField
        label="Selling Price"
        value={sellingPrice}
        onChange={(e) => setSellingPrice(e.target.value)}
        sx={{ marginRight: 2, marginTop: 2 }}
      />
      <TextField
        label="Units Sold"
        value={unitsSold}
        onChange={(e) => setUnitsSold(e.target.value)}
        sx={{ marginRight: 2, marginTop: 2 }}
      />
      <Chart type="pie" data={chartData} />
    </Container>
  );
};

export default Financials;
