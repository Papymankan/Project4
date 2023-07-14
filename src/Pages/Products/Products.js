import React from 'react'
import { products } from '../../Datas'
import { DataGrid } from '@mui/x-data-grid'
import { Avatar } from '@mui/material'
import { Link } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete';
import './Products.css'

export default function UserList() {
  const [product, setProduct] = React.useState(products)

  const deleteProduct = (userID) => {
    setProduct(product.filter(user => user.id != userID))
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'product', headerName: 'Product', width: 320,
      renderCell: (params) => {
        return (
          <>
            <Link to="/" className='ProductListProduct'>
              <Avatar src={params.row.img}></Avatar>
              {params.row.title}
            </Link>
          </>
        )
      }
    },
    { field: 'Price', headerName: 'Price', width: 700 },
    {
      field: 'action', headerName: 'Actions', width: 100,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/product/${params.row.id}`}>
              <button className='EditProduct'>Edit</button>
            </Link>
            <DeleteIcon className='DeleteProduct' onClick={() => deleteProduct(params.row.id)} />
          </>
        )
      }
    },
  ]
  return (
    <div className='ProductList'>
      <DataGrid
        rows={product}
        columns={columns}
        disableRowSelectionOnClick
        className='ProductListTable'
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
      />
    </div>
  )
}