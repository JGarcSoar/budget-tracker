import React, {Fragment, useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function EditExpenses ({expenses}) {
    const [expense, setExpense] = useState(expenses.expense)
    const [cost, setCost] = useState()
    //Modal Functions
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    //Edit Function
    updateExpense = async(e) => {
        e.preventDefault();
        try {
          const body = { expense};
          const response = await fetch(`http://localhost:5000/expenses/${id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
          }) 
        } catch (err) {
           console.error(err.message) 
        }
    };

    return (
    <Fragment>
<>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h5>Expense</h5>
            <input type="text" 
            value={expenses.expense} 
            onChange={e => setExpense(e.target.value)}
            ></input>
            <h5>Cost</h5>
            <input type="number">
            onChange={e => setExpense(e.target.value)}
            </input>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button 
          variant="primary" 
          onClick={handleClose}
          onClick={e => updateExpense(e)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    </Fragment>
    )
};

export default EditExpenses;