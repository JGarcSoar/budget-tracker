const express = require("express");
const app= express();
const cors = require("cors");
const pool = require("./db")

//middleware
app.use(cors());
app.use(express.json());

app.listen(5000, () => {
    console.log("server has started on port 5000");
});

//ROUTES//

//Show Budget
app.get("/Budget", async(req, res) => {
    try {
        const showBudget = await pool.query("SELECT * FROM your_budget");
        res.json(showBudget.rows)
    } catch (err) {
        console.error(err.message)
    }
});
//Update Budget
app.put("/Budget/:budget_id", async (req, res) => {
    try {
        const {budget_id} = req.params;
        const {current_budget} = req.body;
        const updateBudget = await pool.query("UPDATE your_budget SET current_budget = $1 WHERE budget_id = $2", [current_budget, budget_id]
        );

        res.json("Budget updated!");
    }catch (err) {
        console.error(err.message)
    }
})
//Add expense
app.post("/Expenses", async(req, res) => {
    try {
        const {expense, expense_cost} = req.body;
        const newExpense = await pool.query("INSERT INTO expenses (expense, expense_cost) VALUES($1, $2)", 
        [expense, expense_cost]
        );
        res.json(newExpense.rows[0])
    } catch (err) {
        console.error(err.message);
    }
    });

//Show all expenses
app.get("/Expenses", async(req, res) => {
    try {
        const allExpenses = await pool.query("SELECT * FROM expenses");
        res.json(allExpenses.rows)
    } catch (err) {
        console.error(err.message)
    }
});

//Show specific expense (Might not use)
app.get("/Expenses/:expense", async (req, res) => {
    try{
        const {expense} = req.params;
        const expenses = await pool.query("SELECT * FROM expenses WHERE expense = $1", [expense])

        res.json(expenses.rows[0])
    } catch (err) {
        console.error(err.message);
    }
})

//Update expense Cost
app.put("/Expenses/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const {expense_cost} = req.body;
        const updateExpense = await pool.query("UPDATE expenses SET expense_cost = $1 WHERE id = $2", [expense_cost, id]
        );

        res.json("Expense updated!");
    }catch (err) {
        console.error(err.message)
    }
})

////////////
/*app.put("/Expenses/:id", async (req, res) => {
    const {id} = req.params;
    const {expense_cost} = req.body;
    try {
        const updateExpense = await pool.query("UPDATE expenses SET expense_cost = $1 WHERE id = $2;", [expense_cost, id]
        );
        res.json(updateExpense);
    }catch (err) {
        console.error(err.message)
    }
})*/
///////////


//Delete expense
app.delete("/Expenses/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const deleteExpense = await pool.query("DELETE FROM expenses WHERE id = $1", [id]
        );
        res.json("You deleted the expense!");
    }catch (err) {
        console.error(err.message)
    }
})

