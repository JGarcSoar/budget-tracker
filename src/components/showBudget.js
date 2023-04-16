import React, {Fragment, useEffect, useState} from "react";
import UpdateBudget from "./UpdateBudget";


function ShowBudget(){

    const [budgets, setBudgets] = useState([]);

    const getBudget = async () => {
        try {

            const response = await fetch("http://localhost:5000/Budget/");
            const jsonData = await response.json(); 
            setBudgets(jsonData);
        } catch (err) {
            console.error(err.message)   
        }
    };

    useEffect(() => {
        getBudget();
    }, []);
    return (
        <Fragment>
    <h1>Current Budget</h1>
    <p>${budgets.map(budget =>budget.current_budget)}</p>
    <UpdateBudget budget={budgets}/>
    </Fragment>
    )

};

export default ShowBudget;