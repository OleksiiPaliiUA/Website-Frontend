import {SetStateAction, SyntheticEvent, useState} from 'react'
import axios from 'axios'
import '../Login.css'
import { Navigate } from 'react-router-dom'
import AuthInput from '../components/AuthInput'


const Register = () => {

    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password_confirm, setPasswordConfirm] = useState('')
    const [redirect, setRedirect] = useState(false)
    const [errorMessage, setErrorMessage] = useState(<></>)

    const submit = (e: SyntheticEvent) => {
        e.preventDefault()
        if(password.length < 8 || password_confirm.length < 8){
            setErrorMessage(
                <div className='errorMessage'>
                    Password must be at least 8 characters. 
                </div>
            )
            return
        }
        axios.post('register', {
            first_name,
            last_name,
            email,
            password,
            password_confirm
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

    if(redirect) {
        return <Navigate to={'/login'}/>
    }
    
    return (
        <>
            <nav>
                <img src="logo192.png" alt='' />
            </nav>
            <div className="page-signin">
                <main className="form-signin w-100 m-auto">
                    <form onSubmit={submit} className='components-signin'>
                        <div className='text-center'>
                            <img src="logo192.png" alt='' />
                            <h3 className="h2 mb-3 fw-normal">Welcome</h3>
                            <h5 className="h5 mb-3 fw-normal">Please sign up</h5>
                        </div>
                        <AuthInput
                            type = 'textFirst'
                            placeholder = 'First Name'
                            onChange = {(e: SetStateAction<string>) => setFirstName(e)}
                            label = 'First name'
                        />
                        <AuthInput
                            type = 'textLast'
                            placeholder = 'Last Name'
                            onChange = {(e: SetStateAction<string>) => setLastName(e)}
                            label = 'Last name'
                        />
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
                        />
                        <AuthInput
                            type = 'password'
                            placeholder = 'Password Confirm'
                            onChange = {(e: SetStateAction<string>) => setPasswordConfirm(e)}
                            label = 'Password Confirm'
                        />
                        {errorMessage}
                        <button className="btn" type="button" onClick={e => setRedirect(true)}>Already have account?</button>
                        <button className="btn btn-primary" type="submit">Sign up</button>
                    </form>
                </main>
            </div>
        </>
    )
}

export default Register;