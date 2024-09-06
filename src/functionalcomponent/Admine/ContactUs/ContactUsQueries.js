import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import Breadcrum from '../../Breadcrum'
import Sidebar from '../Sidebar'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteContactUs, getContactUs } from '../../../store/ActionCreators/ContactUsActionCreators'
function ContactUsQueries() {
  let [data, setData] = useState([])
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'name',
      headerName: 'Name',
      width: 70,
      editable: true,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 150,
      editable: true,
    },
    {
      field: 'phone',
      headerName: 'Phone',
      width: 100,
      editable: true,
    },
    {
      field: 'subject',
      headerName: 'Subject',
      width: 100,
      editable: true,
    },
    {
      field: 'message',
      headerName: 'Message',
      width: 80,
      editable: true,
    },
    {
      field: 'active',
      headerName: 'Active',
      width: 50,
      editable: true,
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
    renderCell: ({ row }) => <Link to={`/admine/contactus/show/${row.id}`}
     className='btn btn-primary'><i className='fa fa-eye'></i></Link>
  },
   
    
    {
      field: 'delete',
      headerName: 'Delete',
      width: 110,
      editable: true,
      renderCell:({row})=><button className='btn btn-danger' onClick={() => deleteRecord(row.id)}><i className='fa fa-trash'></i></button>
    }  ];
  
  let dispatch = useDispatch()
  let ContactUsStateData = useSelector(state => state.ContactUsStateData)
   function deleteRecord(id) {
    if (window.confirm("Are you sure to delete that item:")) {
     dispatch(deleteContactUs({id:id}))
      getAPIData()
    }


  }
   function getAPIData() {
    dispatch(getContactUs())
    if (ContactUsStateData.length)

      setData(ContactUsStateData)
  }
  useEffect(() => {
    getAPIData()
  }, [ContactUsStateData.length])


  return (
    <>
      <Breadcrum title="admine" />
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-3'>
            <Sidebar />
          </div>
          <div className='col-9'>
            <h5 className='bg-primary text-center p-2 text-light'>ContactUsQueries</h5>
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
                      <td className='text-center table-info'><Link to={`/admine/ContactUs/update/${item.id}`} className='btn btn-primary'><i className='fa fa-edit'></i></Link></td>
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

export default ContactUsQueries