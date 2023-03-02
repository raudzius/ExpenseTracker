import { Box, TextField, Button } from '@mui/material';
import React from 'react';

const ExpenseForm: React.FC = () => (
  <Box component="form" noValidate sx={{ mt: 1 }}>
    <TextField margin="normal" id="title" label="Title" name="title" />
    <TextField
      margin="normal"
      name="amount"
      label="Amount"
      id="amount"
      type="number"
    />
    <TextField margin="normal" name="date" id="date" type="date" />
    <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
      Add Expense
    </Button>
  </Box>
);

export default ExpenseForm;
