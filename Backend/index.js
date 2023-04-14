const express = require("express");
const app= express();
const cors = require("cors");
const pool = require("./db")

const jwt = require('jsonwebtoken')

//middleware
app.use(cors());
app.use(express.json()); //req.body

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



////////////////Authentication Routes/////////////////

//register & Login

app.use("/auth", require("./routes/BudgetAuth"));

//dashboard route

app.use("/dashboard", require("./routes/dashboard"))