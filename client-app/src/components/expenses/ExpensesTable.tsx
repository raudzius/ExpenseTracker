import {
  TableContainer, Paper, Table, TableBody,
} from '@mui/material';
import React from 'react';
import { Expense } from '../../types/product';
import ExpenseItem from './ExpenseItem';

type ExpensesTableProps = {
  expenses: Expense[];
};

const ExpensesTable: React.FC<ExpensesTableProps> = ({ expenses }) => (
  <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }}>
      <TableBody>
        {expenses.map((expense) => (
          <ExpenseItem key={expense.id} expense={expense} />
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default ExpensesTable;
