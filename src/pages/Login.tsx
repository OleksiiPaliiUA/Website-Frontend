import axios from 'axios';
import { SetStateAction, SyntheticEvent, useState } from 'react';
import { Navigate } from 'react-router-dom';
import AuthInput from '../components/AuthInput';
import '../Login.css'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(false)
    const [toSignUpPage, setToSignUpPage] = useState(false)
    const [errorMessage, setErrorMessage] = useState(<></>)

    const submit = (e: SyntheticEvent) => {
        e.preventDefault()
        axios.post('login', {
            email,
            password
        })
            .then(res => {
                setRedirect(true)
            })
            .catch(error => {
                setErrorMessage(
                    <div className='errorMessage'>
                        {(error.response.data.message.toString())[0].toUpperCase() + error.response.data.message.toString().substring(1)}.
                    </div>
                )
            })
    }

    if(toSignUpPage) {
        return <Navigate to={'/register'} />
    }

    if(redirect) {
        return <Navigate to={'/'} />
    }
    
    return (
        <>
            <nav>
                <img src="logo192.png" alt='' />
            </nav>
            <div className='page-signin'>
                <main className="form-signin w-100 m-auto">
                    <form onSubmit={submit} className='components-signin'>
                        <div className='text-center'>
                            <img src="logo192.png" alt='' />
                            <h3 className="h2 mb-3 fw-normal">Welcome</h3>
                            <h5 className="h5 mb-3 fw-normal">Please sign in</h5>
                        </div>
                        <AuthInput
                            type = 'email'
                            placeholder = 'name@example.com'
                            onChange = {(e: SetStateAction<string>) => setEmail(e)}
                            label = 'Email address'
                        />
                        <AuthInput
                            type = 'password'
                            placeholder = 'Password'
                            onChange = {(e: SetStateAction<string>) => setPassword(e)}
                            label = 'Password'
                            id = 'LoginPassword'
                        />
                        {errorMessage}
                        <button type='button' className="btn" onClick={e => setToSignUpPage(true)}>Create account</button>
                        <button type="submit" className="btn btn-primary">Sign in</button>
                    </form>
                </main>
            </div>
        </>
    );
};

export default Login;