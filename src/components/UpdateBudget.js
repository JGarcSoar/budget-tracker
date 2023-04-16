import React, {Fragment, useState} from "react"
function UpdateBudget({budget}){
    console.log(budget)
    const [current_budget, setCurrentBudget] = useState(budget.current_budget);

    //
    const changeBudget = async e => {
        e.preventDefault();
        try {
          const body = {current_budget} 
          const response = await fetch('http://localhost:5000/Budget/1', {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
          })
          window.location ="/";
        } catch (err) {
            console.error(err.message)
        }
    }
    //
    return(
        <Fragment>
        <form>
            <h5>Input New Budget Here</h5>
            <input type ="numbers" value={current_budget} onChange ={e => setCurrentBudget(e.target.value)}/>
            <button onClick={e => changeBudget(e)}>Submit</button>
        </form>
        </Fragment>
    )
    
}

export default UpdateBudget