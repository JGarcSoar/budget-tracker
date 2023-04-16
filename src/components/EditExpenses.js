import React, { Fragment, useState } from "react";

const EditExpenses = ({ expenses }) => {
  const [expense_cost, setExpenseCost] = useState(expenses.expense_cost);

  //edit expense function

  const updateExpense = async e => {
    e.preventDefault();
    try {
      const body = { expense_cost };
      const response = await fetch(
        `http://localhost:5000/expenses/${expenses.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <button
        type="button"
        class="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${expenses.id}`}
      >
        Edit
      </button>

      {/* 
        id = id10
      */}
      <div
        class="modal"
        id={`id${expenses.id}`}
        onClick={() => setExpenseCost(expenses.expense_cost)}
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit Cost</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                onClick={() => setExpenseCost(expenses.expense_cost)}
              >
                &times;
              </button>
            </div>

            <div class="modal-body">
              <input
                type="text"
                className="form-control"
                value={expense_cost}
                onChange={e => setExpenseCost(e.target.value)}
              />
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-warning"
                data-dismiss="modal"
                onClick={e => updateExpense(e)}
              >
                Edit
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setExpenseCost(expenses.expense_cost)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditExpenses;