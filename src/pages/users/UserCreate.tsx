import axios from 'axios';
import { SyntheticEvent, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Wrapper from '../../components/Wrapper';
import { Role } from '../../models/role'

const UserCreate = () => {

    const [roles, setRoles] = useState([])
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [roleId, setRoleId] = useState('')
    const [redirect, setReditect] = useState(false)
    const [password, setPassword] = useState('')

    useEffect(() => {
        (
          async () => {
            const {data} = await axios.get(`roles`)
            setRoles(data)
            setPassword(Math.random().toString(36).slice(-8))
          }
        )()
    }, [])


    const submit = async (e: SyntheticEvent) => {
        e.preventDefault()
        await axios.post('users', {
            first_name: firstName,
            last_name: lastName,
            email: email,
            role_id: roleId,
            password: password,
        })
        if(window.confirm(`Temporary password: ${password}`)) {
            setReditect(true)
        }
    }

    if(redirect) {
        return <Navigate to="/users" />
    }

    return (
        <div>
            <Wrapper>
                <form onSubmit={submit} className='pt-4'>
                    <h3 className='text-md'>Creating New User</h3>
                    <div className="form-floating">
                        <input type='text' className="form-control mt-4 mb-4 " placeholder='First Name' required
                            onChange={e => setFirstName(e.target.value)}
                        />
                        <label>First Name</label>
                    </div>
                    <div className="form-floating">
                        <input type='text' className="form-control mt-4 mb-4" placeholder='Last Name' required
                            onChange={e => setLastName(e.target.value)}
                        />
                        <label>Last Name</label>
                    </div>
                    <div className="form-floating">
                        <input type='email' className="form-control mt-4 mb-4" placeholder='Email address' required
                            onChange={e => setEmail(e.target.value)}
                        />
                        <label>Email</label>
                    </div>
                    <div className="form-floating">
                        <select className="form-control" onChange={e => setRoleId(e.target.value)}>
                            {roles.map((r: Role) => {
                                return (
                                    <option key={r.id} value={r.id}>{r.name}</option>
                                )
                            })}
                        </select>
                        <label>Role</label>
                    </div>
                    <button className='btn btn-outline-secondary mt-4'>Create User</button>
                </form>
            </Wrapper>
        </div>
    );
};

export default UserCreate;