import React, {useState} from 'react'

const ListUserComponent = () => {

    const [users, setUsers] = useState([])

    return (
        <div className = "container">
            <h2 className='text-center'>List Users</h2>
            <table className='table table-bordered table-striped'>
                <thead>
                    <th> User Id </th>

                    <th> User First Name </th>
                    <th> User Last Name </th>
                    <th> User Email It </th>
                </thead>
                <tbody>
                    {
                        users.map(
                            user =>
                            <tr key = {user.id}>
                                <td> {user.id} </td>
                                <td> {user.firstName} </td>
                                <td> {user.lastName} </td>
                                <td> {user.emailId} </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>            
        </div>
    )
}

export default ListUserComponent