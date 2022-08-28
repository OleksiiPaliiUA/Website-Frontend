import {Component, SyntheticEvent} from 'react'
import axios from 'axios'
import '../Login.css'
import { Navigate } from 'react-router-dom'


export default class Register extends Component {

    firstName = ''
    lastName = ''
    email = ''
    password = ''
    passwordConfirm = ''
    state = {
        redirect: false
    }

    submit = (e: SyntheticEvent) => {
        e.preventDefault()
        
        axios.post('http://localhost:8000/api/register', {
            first_name: this.firstName,
            last_name: this.lastName,
            email: this.email,
            password: this.password,
            password_confirm: this.passwordConfirm
        }).then(response => {
            if(response.status === 201) {
                this.setState({
                    redirect: true
                })
            }
        })
    }

    render() {

        if(this.state.redirect) {
            return <Navigate to={'/login'}/>
        }
        
        return (
            <div>
                <main className="form-signin w-100 m-auto">
                    <form onSubmit={this.submit}>
                        <h1 className="h3 mb-3 fw-normal">Please sign Up</h1>

                        <div className="form-floating">
                        <input type="textFirst" className="form-control" placeholder="Oleksii" required
                            onChange={e => this.firstName = e.target.value}
                        />
                        <label>First name</label>
                        </div>
                        <div className="form-floating">
                        <input type="textLast" className="form-control" placeholder="Palii" required
                            onChange={e => this.lastName = e.target.value}
                        />
                        <label>Last name</label>
                        </div>
                        <div className="form-floating">
                        <input type="email" className="form-control" placeholder="name@example.com" required
                            onChange={e => this.email = e.target.value}
                        />
                        <label>Email address</label>
                        </div>
                        <div className="form-floating">
                        <input type="password" className="form-control" placeholder="Password" required
                            onChange={e => this.password = e.target.value}
                        />
                        <label>Password</label>
                        </div>
                        <div className="form-floating">
                        <input type="password" className="form-control" placeholder="Password Confirm" required
                            onChange={e => this.passwordConfirm = e.target.value}
                        />
                        <label>Password Confirm</label>
                        </div>
                        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign Up</button>
                    </form>
                </main>
            </div>
        )
    }
}