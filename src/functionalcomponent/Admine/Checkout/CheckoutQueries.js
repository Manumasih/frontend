import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import Breadcrum from '../../Breadcrum'
import Sidebar from '../Sidebar'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {getCheckout, } from '../../../store/ActionCreators/CheckoutActionCreators'
import { render } from '@testing-library/react';
function CheckoutQueries() {
  let [data, setData] = useState([])
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'userid',
      headerName: 'Userid',
      width: 100,
      editable: true,
    },
    {
      field: 'orderstatus',
      headerName: 'Order Status',
      width: 150,
      editable: true,
    },
    {
      field: 'paymentstatus',
      headerName: 'Payment Status',
      width: 100,
      editable: true,
    },
    {
      field: 'subtotal',
      headerName: 'Subtotal',
      width: 100,
      editable: true,
      renderCell:({row})=><p>&#8377;{row.subtotal}</p>
    },
    {
      field: 'shipping',
      headerName: 'Shipping',
      width: 100,
      editable: true,
      renderCell:({row})=><p>&#8377;{row.shipping}</p>
    },{
      field: 'total',
      headerName: 'Total',
      width: 100,
      editable: true,
      renderCell:({row})=><p>&#8377;{row.total}</p>
    },
    {
      field: 'date',
      headerName: 'Date',
      width: 170,
      editable: true,
      renderCell:({row})=><p>{new Date(row.date).toLocaleString()}</p>
  },
  {
    field: 'show',
    headerName: 'Show',
    width: 60,
    sortable:false,
    renderCell: ({ row }) => <Link to={`/admine/checkout/show/${row.id}`}
     className='btn btn-primary'><i className='fa fa-eye'></i></Link>
  },
     ];
  
  let dispatch = useDispatch()
  let CheckoutStateData = useSelector(state => state.CheckoutStateData)
   function getAPIData() {
    dispatch(getCheckout())
    if (CheckoutStateData.length)

      setData(CheckoutStateData)
  }
  useEffect(() => {
    getAPIData()
  }, [CheckoutStateData.length])


  return (
    <>
      <Breadcrum title="admine" />
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-3'>
            <Sidebar />
          </div>
          <div className='col-9'>
            <h5 className='bg-primary text-center p-2 text-light'>CheckoutQueries<Link to="/admine/Checkout/show/:id" className='float-end text-light'><i className='fa fa-plus'></i></Link></h5>
            {/* <table className='table table-bordered table-border'>
              <thead>
                <tr className='text-center table-primary'>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {
                  data.map((item, index) => {
                    return <tr key={index}>
                      <td className='text-center table-success'>{item.id}</td>
                      <td className='text-center table-warning'>{item.name}</td>
                      <td className='text-center table-info'><Link to={`/admine/Checkout/update/${item.id}`} className='btn btn-primary'><i className='fa fa-edit'></i></Link></td>
                      <td className='text-center table-danger'><button className='btn btn-danger' onClick={() => deleteRecord(item.id)}><i className='fa fa-trash'></i></button></td>
                    </tr>


                  })

                }

              </tbody>

            </table>
 */}
<div className='table-responsive'>
<DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5,10,50,100]}
        checkboxSelection={false}
        disableRowSelectionOnClick
      />

</div>


          </div>
        </div>
      </div>
    </>
  )
}

export default CheckoutQueries