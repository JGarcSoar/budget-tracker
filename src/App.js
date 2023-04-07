import React, { Fragment } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//components
import ShowBudget from './components/showBudget';
import InputExpense from './components/InputExpense';
import ListExpenses from './components/ListExpenses';

function App() {
  return (
    <Fragment>
      <ShowBudget />
      <InputExpense />
      <ListExpenses />
      <InputExpense />
    </Fragment>
  );
}

export default App;
