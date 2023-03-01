import { TableCell, TableRow } from '@mui/material';
import React from 'react';
import { Expense } from '../types/product';

type ExpenseItemProps = {
  expense: Expense;
};

const ExpenseItem: React.FC<ExpenseItemProps> = ({ expense }) => {
  const year = expense.date.getFullYear();
  const month = expense.date.toLocaleString('en-US', { month: 'long' });
  const day = expense.date.toLocaleString('en-US', { day: '2-digit' });

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {expense.title}
      </TableCell>
      <TableCell align="right">{`${year}/${month}/${day}`}</TableCell>
      <TableCell align="right">{`€${expense.amount}`}</TableCell>
    </TableRow>
  );
};

export default ExpenseItem;
