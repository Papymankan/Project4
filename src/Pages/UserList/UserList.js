import React from 'react'
import { usersRow } from '../../Datas'
import { DataGrid } from '@mui/x-data-grid'
import { Avatar } from '@mui/material'
import { Link } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete';
import './UserList.css'

export default function UserList() {
  const [users, setUsers] = React.useState(usersRow)
  const deleteUser = (userID) => {
    setUsers(users.filter(user => user.id != userID))
  }
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'User', headerName: 'Username', width: 280,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/User/${params.row.id}`} className='UserListUser'>
              <Avatar sx={{ bgcolor: params.row.color }}>{params.row.avatar}</Avatar>
              {params.row.username}
            </Link>
          </>
        )
      }
    },
    { field: 'email', headerName: 'Email', width: 280 },
    { field: 'status', headerName: 'Status', width: 180 },
    { field: 'transaction', headerName: 'Transaction', width: 180 },
    {
      field: 'action', headerName: 'Actions', width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link to={`./${params.row.id}`}>
              <button className='EditUser'>Edit</button>
            </Link>
            <DeleteIcon className='DeleteUser' onClick={() => deleteUser(params.row.id)} />
          </>
        )
      }
    },
  ]
  return (
    <div className='UserList'>
        <DataGrid
          rows={users}
          columns={columns}
          disableRowSelectionOnClick
          className='UserListTable'
        />
    </div>
  )
}