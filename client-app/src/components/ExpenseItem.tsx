import { TableCell, TableRow } from '@mui/material';
import React from 'react';
import { Expense } from '../types/product';
import ExpenseDate from './ExpenseDate';

type ExpenseItemProps = {
  expense: Expense;
};

const ExpenseItem: React.FC<ExpenseItemProps> = ({ expense }) => (
  <TableRow>
    <TableCell component="th" scope="row">
      {expense.title}
    </TableCell>
    <ExpenseDate date={expense.date} />
    <TableCell align="right">{`€${expense.amount}`}</TableCell>
  </TableRow>
);

export default ExpenseItem;
