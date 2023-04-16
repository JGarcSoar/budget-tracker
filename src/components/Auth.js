import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import {useState} from 'react'
import { useCookies } from 'react-cookie'

function Auth() {
    const [cookies, setCookie, removeCookie] = useCookies(null)
    const [isLogIn, setIsLogin] = useState(true)
    const [email, setEmail] = useState(null)
    //const [user_name, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirmPassword, setConfirm] = useState(null)
    const [error, setError] = useState(null)

    console.log(cookies)
    
    const viewLogin = (status) => {
       setError(null)
       setIsLogin(status) 
    }

    const handleSubmit = async (e, endpoint) => {
        e.preventDefault()
        if (!isLogIn && password !== confirmPassword) {
            setError('Passwords do not match!')
            return
        }

        const response= await fetch(`http://localhost:5000/${endpoint}`, {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({email, password})
        })

        const data = await response.json()
        if (data.detail) {
            setError(data.detail)
        } else {
            setCookie('Email', data.email)
            setCookie('AuthToken', data.token)

            window.location.reload()
        }
        
    }

    return (
        <div className="auth-container">
            <div className="auth-container-box">
            <Form className='auth-container-box form'>

                <h2>{isLogIn ? 'Please Log In' : 'Please Sign Up'}</h2>
                <input 
                    type="email" 
                    placeholder="email" 
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    type="password" 
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                {!isLogIn && <input 
                    type="password" 
                    placeholder="confirm password"
                    onChange={(e) => setConfirm(e.target.value)}
                />}
                <input type="submit" 
                    className="create" 
                    onClick={(e) => handleSubmit(e, isLogIn ? 'login' : 'signup')}/>
                {error && <p>{error}</p>}
            </Form>
            <div className="auth-options">
            <Button variant="primary" onClick={() => viewLogin(false)}
            style={{backgroundColor : !isLogIn ? 'rgb(255, 255, 255)' : 'rgb(188, 188, 188'}}
            >Sign Up</Button>
            <Button variant="secondary" onClick={() => viewLogin(true)}
            style={{backgroundColor : isLogIn ? 'rgb(255, 255, 255)' : 'rgb(188, 188, 188'}}
            >Login</Button>
            </div>

            </div>
        </div>
    );
  }
  
  export default Auth;
  