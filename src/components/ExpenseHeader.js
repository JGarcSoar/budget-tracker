function ExpenseHeader({listName}) {

    const signOut = () => {
        console.log('signout')
    }

    return (
        <div className ="Expense-Header">
            <h1>{listName}</h1>
            <div className="button-container">
                <button className="signout" onClick={signOut}>SIGN OUT</button>
            </div>
        </div>
    );
  }
  
  export default ExpenseHeader;