import { useState } from "react";
import {useCookies} from 'react-cookie'

function ExpenseHeader({listName}) {
    const [cookies, setCookie, removeCookie] = useCookies(null)

    const signOut = () => {
        console.log('signout')
        removeCookie('Email')
        removeCookie('AuthToken')
        window.location.reload()
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