import React, { Fragment, useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//components
import Auth from './components/Auth';
import ShowBudget from './components/showBudget';
import InputExpense from './components/InputExpense';
import ListExpenses from './components/ListExpenses';
import ExpenseHeader from './components/ExpenseHeader';
import {useCookies} from 'react-cookie'

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(null)
  const authToken = cookies.AuthToken
  
  return (
    <Fragment>
    {!authToken && <Auth/>}
     {authToken &&
     <>
     <ExpenseHeader listName={`Welcome home, ${cookies.Email}`}/>
      <ShowBudget />
      <InputExpense />
      <ListExpenses />
      <InputExpense /> 
      </>
      } 
    </Fragment>
  );
}

export default App;
