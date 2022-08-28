import {Component} from 'react'
import '../Login.css'

export default class Register extends Component {
    render() {
        return (
            <div>
                <main className="form-signin w-100 m-auto">
                    <form>
                        <h1 className="h3 mb-3 fw-normal">Sign Up</h1>

                        <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required/>
                        <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating">
                        <input type="text" className="form-control" id="floatingInput" placeholder="Last Name" required/>
                        <label htmlFor="floatingInput">Password</label>
                        </div>
                        <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required/>
                        <label htmlFor="floatingPassword">Password</label>
                        </div>
                        <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required/>
                        <label htmlFor="floatingPassword">Password Confirm</label>
                        </div>
                        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign Up</button>
                    </form>
                </main>
            </div>
        )
    }
}