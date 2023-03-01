import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Expense from './types/product';

const App: React.FC = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/expenses')
      .then((res) => res.json())
      .then((data) => setExpenses(data));
  }, []);

  return (
    <Box>
      <Typography variant="h3" component="h1">
        Expense Tracker
      </Typography>
      {expenses.map((expense) => (
        <Typography key={expense.id}>{expense.title}</Typography>
      ))}
    </Box>
  );
};

export default App;
