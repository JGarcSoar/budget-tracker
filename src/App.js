import React, { Fragment, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Redirect, Routes} from "react-router-dom";
//components
import ShowBudget from './components/showBudget';
import InputExpense from './components/InputExpense';
import ListExpenses from './components/ListExpenses';
import ExpenseHeader from './components/ExpenseHeader';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  
  return (
    <Fragment>
      <ExpenseHeader listName={'Welcome'}/>
      <ShowBudget />
      <InputExpense />
      <ListExpenses />
      <InputExpense />
    </Fragment>
  );
}

export default App;
