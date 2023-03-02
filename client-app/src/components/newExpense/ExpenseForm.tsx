import { Box, TextField, Button } from '@mui/material';
import React, { useState } from 'react';

const ExpenseForm: React.FC = () => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEnteredTitle(event.target.value);
  };
  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEnteredAmount(event.target.value);
  };
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEnteredDate(event.target.value);
  };

  return (
    <Box component="form" noValidate sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        id="title"
        label="Title"
        name="title"
        value={enteredTitle}
        onChange={handleTitleChange}
      />
      <TextField
        margin="normal"
        name="amount"
        label="Amount"
        id="amount"
        type="number"
        onChange={handleAmountChange}
        value={enteredAmount}
      />
      <TextField
        margin="normal"
        name="date"
        id="date"
        type="date"
        onChange={handleDateChange}
        value={enteredDate}
      />
      <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
        Add Expense
      </Button>
    </Box>
  );
};

export default ExpenseForm;
