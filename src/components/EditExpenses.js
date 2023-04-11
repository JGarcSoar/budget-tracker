import React, {Fragment, useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function EditExpenses ({expenses, expense_cost}) {
    const [expense, setExpense] = useState(expenses.expense);
    const [expenseCost, setExpenseCost] =useState(expenses.expense_cost);
    console.log(expenses, expense_cost);
    //Modal Functions
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

return(

    <Fragment><>
    <Button variant="primary" onClick={handleShow}>
      Edit Cost
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Make Changes</Modal.Title>
      </Modal.Header>

      <Modal.Body>
    <h5>Expense</h5>
        <input type='text'
        value={expense}  
        onChange={e => setExpense(e.target.value) }
        />
    
    <h5>Cost</h5>
        <input type='number'
        value={expenseCost}
        onChange={e => setExpenseCost(e.target.value) }
        />
      </Modal.Body>
      
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
        Apply Changes
        </Button>
        
        <Button variant="secondary" onClick={handleClose}>
        Close
        </Button>
      
      </Modal.Footer>
    </Modal>
  </></Fragment>
  );
}

export default EditExpenses;