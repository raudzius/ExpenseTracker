import {
  Box, Paper, Table, TableBody, TableContainer, Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import ExpenseItem from './components/ExpenseItem';
import { Expense, FetchedExpense } from './types/product';

const App: React.FC = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/expenses')
      .then((res) => res.json())
      .then((fetchedExpenses: FetchedExpense[]) => {
        const parsedExpenses = fetchedExpenses.map(({ date, ...props }) => ({
          ...props,
          date: new Date(date),
        }));
        setExpenses(parsedExpenses);
      });
  }, []);

  return (
    <Box>
      <Typography variant="h3" component="h1">
        Expense Tracker
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableBody>
            {expenses.map((expense) => (
              <ExpenseItem key={expense.id} expense={expense} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default App;
