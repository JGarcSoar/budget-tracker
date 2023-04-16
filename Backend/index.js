const express = require("express");
const app= express();
const cors = require("cors");
const pool = require("./db")
const bcrypt = require('bcrypt')
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
        const {expense, expense_cost, user_email} = req.body;
        const newExpense = await pool.query("INSERT INTO expenses (expense, expense_cost, user_email) VALUES($1, $2, $3)", 
        [expense, expense_cost, user_email]
        );
        res.json(newExpense.rows[0])
    } catch (err) {
        console.error(err.message);
    }
    });



//Show all of user's expenses 
//app.get("/Expenses/:userEmail", async(req, res) => {
    
   // const userEmail = req.params.userEmail
    //try {
     //   const allExpenses = await pool.query/("SELECT * FROM expenses WHERE user_email = $1", [userEmail])
     //   res.json(allExpenses.rows)
    //} catch (err) {
    //    console.error(err.message)
   // }
//});

//Show all expenses
app.get("/Expenses", async (req, res) => {
    try{
        const expenses = await pool.query("SELECT * FROM expenses");
        res.json(expenses.rows)
    } catch (err) {
        console.error(err.message);
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

//Register 
app.post('/signup', async (req, res) => {
    const {email, password} = req.body
    const salt = bcrypt.genSaltSync(10)
    const hashedPassword = bcrypt.hashSync(password, salt)
    try {
       const signup = await pool.query(`INSERT INTO users (email, password) VALUES($1, $2)`,
        [email, hashedPassword])
    
        const token = jwt.sign({email}, 'secret', {expiresIn: '1hr'})

        res.json({email, token})
    } catch (err) {
        console.error(err)
        if (err) {
           res.json({detail: err.detail}) 
        }
    }
})


//Login
app.post('/login', async (req, res) => {
    const {email, password} = req.body
    try {
        const users = await pool.query('SELECT * FROM users WHERE email = $1', [email])

        if (!users.rows.length) return res.json({ detail : 'User does not exist!'})

        const success = await bcrypt.compare(password, users.rows[0].password)
        const token = jwt.sign({email}, 'secret', {expiresIn: '1hr'})

        if (success) {
            res.json({ 'email' : users.rows[0].email, token})
        } else {
            res.json({detail: "Login failed"})
        }
    } catch (err) {
        console.error(err)
    }
})
