import React, { Fragment } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
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
