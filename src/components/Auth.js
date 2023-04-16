import {useState} from 'react'

function Auth() {
    const [isLogIn, setIsLogin] = useState(true)
    const [error, setError] = useState(null)
    
    const viewLogin = (status) => {
       setError(null)
       setIsLogin(status) 
    }

    return (
        <div className="auth-container">
            <div className="auth-container-box">
            <form>
                <h2>{isLogIn ? 'Please log in' : 'Please sign up'}</h2>
                {!isLogIn && <input type="email" placeholder="email"/>}
                <input placeholder="username" />
                <input type="password" placeholder="password"/>
                {!isLogIn && <input type="password" placeholder="confirm password"/>}
                <input type="submit" className="create"/>
                {error && <p>{error}</p>}
            </form>
            <div className="auth-options">
            <button onClick={() => viewLogin(false)}
            style={{backgroundColor : !isLogIn ? 'rgb(255, 255, 255)' : 'rgb(188, 188, 188'}}
            >Sign Up</button>
            <button onClick={() => viewLogin(true)}
            style={{backgroundColor : isLogIn ? 'rgb(255, 255, 255)' : 'rgb(188, 188, 188'}}
            >Login</button>
            </div>

            </div>
        </div>
    );
  }
  
  export default Auth;
  