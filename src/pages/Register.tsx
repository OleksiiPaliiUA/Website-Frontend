import {SyntheticEvent, useState} from 'react'
import axios from 'axios'
import '../Login.css'
import { Navigate } from 'react-router-dom'


const Register = () => {

    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password_confirm, setPasswordConfirm] = useState('')
    const [redirect, setRedirect] = useState(false)

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault()
        
        const {status} = await axios.post('http://localhost:8000/api/register', {
            first_name,
            last_name,
            email,
            password,
            password_confirm
        })

        if(status === 201) {
            setRedirect(true)
        }
    }

    if(redirect) {
        return <Navigate to={'/login'}/>
    }
    
    return (
        <div className="page-signin">
            <main className="form-signin w-100 m-auto">
                <form onSubmit={submit} className='components-signin'>
                    <div className='text-center'>
                        <img src="logo192.png" alt='' />
                        <h3 className="h2 mb-3 fw-normal">Welcome</h3>
                        <h5 className="h5 mb-3 fw-normal">Please sign up</h5>
                    </div>
                    <div className="form-floating">
                        <input type="textFirst" className="form-control" placeholder="Oleksii" required
                            onChange={e => setFirstName(e.target.value)}
                        />
                        <label>First name</label>
                    </div>
                    <div className="form-floating">
                        <input type="textLast" className="form-control" placeholder="Palii" required
                            onChange={e => setLastName(e.target.value)}
                        />
                        <label>Last name</label>
                    </div>
                    <div className="form-floating">
                        <input type="email" className="form-control" placeholder="name@example.com" required
                            onChange={e => setEmail(e.target.value)}
                        />
                        <label>Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" placeholder="Password" required
                            onChange={e => setPassword(e.target.value)}
                        />
                        <label>Password</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" placeholder="Password Confirm" required
                            onChange={e => setPasswordConfirm(e.target.value)}
                        />
                        <label>Password Confirm</label>
                    </div>
                    <button className="btn" type="button" onClick={e => setRedirect(true)}>Sign in</button>
                    <button className="btn btn-primary" type="submit">Sign up</button>
                </form>
            </main>
        </div>
    )
}

export default Register;