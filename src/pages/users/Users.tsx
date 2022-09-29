/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Wrapper from '../../components/Wrapper'
import { User } from '../../models/user'

const Users = () => {

  const [users, setUsers] = useState([])
  const [page, setPage] = useState(1)
  const [lastPage, setLastPage] = useState(0)

  useEffect(() => {
    (
      async () => {
        const {data} = await axios.get(`users?page=${page}`)
        setUsers(data.data)
        setLastPage(data.meta.last_page)
      }
    )()
  }, [page])

  const next = () => {
    if(page < lastPage){
      setPage(page+1)
    }
  }

  const prev = () => {
    if(page >= 1) {
      setPage(page-1)
    }
  }

  const del = async (id: number, name: string) => {
    if(window.confirm(`Are you sure you want to delete user (${name}) with ID: (${id})?`)) {
      await axios.delete(`users/${id}`)
      setUsers(users.filter((user: User) => user.id !== id))
    }
  }

  return (
    <Wrapper>
      <div className='btn-group mr-2 pt-2 pb-2'>
        <Link to='/users/create' className='btn btn-outline-secondary padding-top:50px'>
          Add User
        </Link>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Role</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user: User) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.first_name} {user.last_name}</td>
                  <td>{user.email}</td>
                  <td>{user.role.name}</td>
                  <td>
                    <div className='btn-group mr-2'>
                      <a href="#" className='btn btn-sm btn-outline-secondary'
                        onClick={() => del(user.id, (user.first_name + ' ' + user.last_name))}
                      >Delete</a>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <>
        <ul className='pagination'>
          <li className='page-item'>
            <a href="#" className='page-link' onClick={prev}>Previous</a>
          </li>
          <li className='page-item'>
            <a href="#" className='page-link' onClick={next}>Next</a>
          </li>
        </ul>
      </>
    </Wrapper>
  )
}

export default Users