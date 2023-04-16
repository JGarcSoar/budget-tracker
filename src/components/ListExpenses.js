import React, {Fragment, useEffect, useState} from "react";
import {UseCookies} from 'react-cookie'
//import EditExpenses from "./EditExpenses";

const authToken = false


const ListExpenses = () => {

    const [expense, setExpense] = useState([]);

//Delete expense Function

const deleteExpense = async id => {
    try {
        const deleteExpense = await fetch(`http://localhost:5000/expenses/${id}`, {
            method: "DELETE"
        });

        setExpense(expense.filter(expenses => expenses.id !== id))
        console.log(deleteExpense);
    } catch (err) {
        console.error(err.message)
        
    }
}
////
    const showExpenses = async () => {
      const authToken = cookies.AuthToken
      const [cookies, setCookie, removeCookie] = UseCookies(null)
      const userEmail= cookies.Email
        try {
        const response = await fetch/*("http://localhost:5000/expenses")*/(`http://localhost:5000/expenses/${userEmail}`);
        const jsonData = await response.json();
        setExpense(jsonData);
    } catch (err) {
        console.error(err.message);
    }
    };
    //useEffect(() => {
        //showExpenses();
    //}, []);
    useEffect(() => {
      if (authToken) {
        showExpenses()
      }
    }, [])

    console.log(expense);
    return (
    <Fragment>
    <h1>Your Expenses</h1>
    <table className="table">
    <thead>
      <tr>
        <th>Expense</th>
        <th>Cost</th>
        {/*<th>Edit</th> */}
        {/*<th>Delete</th>*/}
      </tr>
    </thead>
    <tbody>
        {expense.map(expenses => (
        <tr key={expenses.id}>
        <td>{expenses.expense}</td>
        <td>${expenses.expense_cost}</td>
        <td>
        </td>
        <td><button onClick={() => deleteExpense(expenses.id)}>Delete</button></td>
      </tr>
        ))}
    </tbody>
    <tfoot>
    <tr>
      <td>Sum</td>
      <td></td>
    </tr>
  </tfoot>
  </table>
  </Fragment>
  ) 
}

export default ListExpenses;