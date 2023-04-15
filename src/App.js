import React, { Fragment, useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Redirect, Routes} from "react-router-dom";
//components
import ShowBudget from './components/showBudget';
import InputExpense from './components/InputExpense';
import ListExpenses from './components/ListExpenses';
import ExpenseHeader from './components/ExpenseHeader';

function App() {

  /*const getData = async () => {
    const userEmail= 'lol@aol.com'
    try {
      const response = await fetch(`http://localhost:3000/${userEmail}`)
      const json = await response.json()
      console.log(json)
    } catch (err) {
      console.error(err)
    }
  }

useEffect(() => getData, [])*/


  //const [isAuthenticated, setIsAuthenticated] = useState(false);

  
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
