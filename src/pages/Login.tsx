import axios from 'axios';
import { SyntheticEvent, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import '../Login.css'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(false)
    const [toSignUpPage, setToSignUpPage] = useState(false)

    useEffect(() => {
        (
            async () => {
                const {data} = await axios.get('user')
                if(data.first_name !== ''){
                    setRedirect(true)
                }
            } 
        )()            
    })

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault()

        const {status} = await axios.post('login', {
            email,
            password
        })

        if(status === 201){
            setRedirect(true)
        }
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
                        <div className="form-floating">
                            <input type="email" className="form-control" placeholder="name@example.com" required 
                                onChange={e => setEmail(e.target.value)}
                            />
                            <label>Email address</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control" placeholder="Password" id='LoginPassword' required 
                                onChange={e => setPassword(e.target.value)}
                            />
                            <label>Password</label>
                        </div>
                        <button type='button' className="btn" onClick={e => setToSignUpPage(true)}>Create account</button>
                        <button type="submit" className="btn btn-primary">Sign in</button>
                    </form>
                </main>
            </div>
        </>
    );
};

export default Login;