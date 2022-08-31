import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { User } from "../models/user";

const Nav = () => {

    const [user, setUser] = useState(new User())

    useEffect(() => {
        axios.get('user')
            .then(res => {
                setUser(new User(
                    res.data.id,
                    res.data.first_name,
                    res.data.last_name,
                    res.data.email,
                    res.data.role
                ))
            })
            .catch(e => {})
    }, [])

    const logOut = async () => {
        await axios.post('logout', {})
    }

    return (
        <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
            <div className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6">Admin Panel</div>
            <div className="navbar-nav">
                <div className="nav-item text-nowrap">
                    <Link to={'/profile'} className="signLink px-3">
                        {user?.name}
                    </Link>
                    <Link to={'/login'} className="signLink px-3" onClick={e => logOut()}>
                        Sign out
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Nav;
