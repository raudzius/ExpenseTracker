export type FetchedExpense = {
  id: string;
  title: string;
  amount: number;
  date: string;
};

export type Expense = {
  id: string;
  title: string;
  amount: number;
  date: Date;
};
