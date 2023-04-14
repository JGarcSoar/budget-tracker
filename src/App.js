import React, { Fragment, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Redirect, Routes} from "react-router-dom";
//components
import ShowBudget from './components/showBudget';
import InputExpense from './components/InputExpense';
import ListExpenses from './components/ListExpenses';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  
  return (
    <Fragment>
      <Router>
      <div className='container'>
        <Routes>
        <Route exact path="/login" element ={<Login/>}/>
        <Route exact path="/register" element ={<Register/>}/>
        <Route exact path="/dashboard" element ={<Dashboard/>}/>
        </Routes>
        </div>
      </Router>
      <ShowBudget />
      <InputExpense />
      <ListExpenses />
      <InputExpense />
    </Fragment>
  );
}

export default App;
