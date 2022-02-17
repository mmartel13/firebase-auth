import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { app } from '../ConnectAuth';

import Button from 'react-bootstrap/Button';


export default function Login({ setUser, user }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    
    useEffect(() => {
        const localUser = localStorage.getItem('displayName')
        console.log('localUser from LS', localUser)
        if(localUser) setUser(localUser)
    }, [])

    
    const handleFormSubmit = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            //setUser
            setUser(result.user)//got this prop from the parent (app.js)
            // navigate to home
            navigate('/')
        })
        .catch(alert)
    }
    

    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider)
        .then(result => {
            setUser(result.user)
            localStorage.setItem('displayName', result.user.displayName)
            localStorage.setItem('avatar', result.user.photoURL)
            localStorage.setItem('uid', result.user.uid)

            console.log('this is my result', result.user.displayName)
            navigate('/')
            
        })
        .catch(alert)
    }

    console.log('here is my user from my parent App component', user)

    return (
    <>
        <h1>Login</h1>
        <hr />
        <form onSubmit={handleFormSubmit}>
            <label>Email: <input type={email} onChange={e => setEmail(e.target.value)}/></label>
            <br />
            <label>Password: <input type="password" onChange={e => setPassword(e.target.value)}/> </label>
            <br />
            <input type="submit" value="Login" />
        </form>
        <button onClick={handleGoogleLogin} 
        style={{backgroundColor: 'black', 
        color: 'white', 
        border: 'none'}}
        >Sign in with Google</button>
        <Button>Test</Button>

        <p>Not a user? <Link to="/signup">Sign Up</Link></p>
    </>
    )
    
}

