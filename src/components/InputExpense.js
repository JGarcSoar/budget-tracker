import React, {Fragment, useState} from "react";


function InputExpense () {

    const [expense, setExpense] = useState("");
    const [expense_cost, setExpenseCost] = useState("")
    const [user_email, setUserEmail] = useState("")

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = {expense, expense_cost, user_email};
            const response = await fetch("http://localhost:5000/expenses/", {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            window.location = "/";
        } catch (err) {
        console.error(err.message)
        }
    };
    return (
        <Fragment>
        <h1>Input Expenses Here</h1>
        <form onSubmit={onSubmitForm}>
            {/*<h5>Email</h5>
            <input type="text" value={user_email} onChange={e => setUserEmail(e.target.value)}></input>*/}
            <h5>Expense</h5>
            <input type ="text" value={expense} onChange={e => setExpense(e.target.value)}/>
            <h5>$ Cost</h5>
            <input type ="text" value={expense_cost} onChange={e => setExpenseCost(e.target.value)}/>
            <button className="submit">Add Expense</button>
        </form>
        </Fragment>
    )
}

export default InputExpense;