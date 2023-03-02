import { TableCell } from '@mui/material';
import React from 'react';

type ExpenseDateProps = {
  date: Date;
};

const ExpenseDate: React.FC<ExpenseDateProps> = ({ date }) => {
  const year = date.getFullYear();
  const month = date.toLocaleString('en-US', { month: 'long' });
  const day = date.toLocaleString('en-US', { day: '2-digit' });

  return <TableCell align="right">{`${year}/${month}/${day}`}</TableCell>;
};

export default ExpenseDate;
