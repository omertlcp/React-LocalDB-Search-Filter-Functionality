import React from 'react'
import './App'

const Table = ({data}) => {
  return (
    <div>
    <table>
    <tbody>
    <tr>
    <th>ID</th>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Email</th>
    </tr>
    {data.map((item) => (
        <tr key={item.id}>
    <td>{item.id}</td>
    <td>{item.first_name}</td>
    <td>{item.last_name}</td>
    <td>{item.email}</td>
    </tr>
    ))}
    </tbody>
    </table>
    </div>
  )
}

export default Table;