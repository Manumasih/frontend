import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import Breadcrum from '../../Breadcrum'
import Sidebar from '../Sidebar'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteNewsletter, getNewsletter } from '../../../store/ActionCreators/NewsletterActionCreators'
function Newsletter() {
  let [data, setData] = useState([])
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'email',
      headerName: 'Email',
      width: 150,
      editable: true,
    },
    {
      field: 'delete',
      headerName: 'Delete',
      width: 110,
      editable: true,
      renderCell:({row})=><button className='btn btn-danger' onClick={() => deleteRecord(row.id)}><i className='fa fa-trash'></i></button>
    }  ];
  
  let dispatch = useDispatch()
  let NewsletterStateData = useSelector(state => state.NewsletterStateData)
   function deleteRecord(id) {
    if (window.confirm("Are you sure to delete that item:")) {
     dispatch(deleteNewsletter({id:id}))
      getAPIData()
    }


  }
   function getAPIData() {
    dispatch(getNewsletter())
    if (NewsletterStateData.length)

      setData(NewsletterStateData)
  }
  useEffect(() => {
    getAPIData()
  }, [NewsletterStateData.length])


  return (
    <>
      <Breadcrum title="admine" />
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-3'>
            <Sidebar />
          </div>
          <div className='col-9'>
            <h5 className='bg-primary text-center p-2 text-light'>Newsletter<Link to="/admine/Newsletter/create" className='float-end text-light'></Link></h5>
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
                      <td className='text-center table-info'><Link to={`/admine/Newsletter/update/${item.id}`} className='btn btn-primary'><i className='fa fa-edit'></i></Link></td>
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
        pageSizeOptions={[5]}
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

export default Newsletter