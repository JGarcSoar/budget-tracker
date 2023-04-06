import React, {Fragment, useState} from "react";

function InputExpense () {

    const [expense, setExpense] = useState("");
    const [expense_cost, setExpenseCost] = useState("")

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = {expense, expense_cost};
            const response = await fetch("http://localhost:5000/expenses/", {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            console.log(response);
        } catch (err) {
        console.error(err.message)
        }
    };
    return (
        <Fragment>
        <h1>Input Expense Here</h1>
        <form onSubmit={onSubmitForm}>
            <h3>Expense</h3>
            <input type ="text" value={expense} onChange={e => setExpense(e.target.value)}/>
            <h3>Cost</h3>
            <input type ="text" value={expense_cost} onChange={e => setExpenseCost(e.target.value)}/>
            <button>Submit</button>
        </form>
        </Fragment>
    )
}

export default InputExpense;