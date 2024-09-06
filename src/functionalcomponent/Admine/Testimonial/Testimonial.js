import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import Breadcrum from '../../Breadcrum'
import Sidebar from '../Sidebar'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTestimonial, getTestimonial } from '../../../store/ActionCreators/TestimonialActionCreators  '
function Testimonial() {
  let [data, setData] = useState([])
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'name',
      headerName: 'Name',
      width: 90,
      editable: true,
    },
    {
      field: 'pic',
      headerName: 'Pic',
      width: 90,
      editable: false,
      renderCell:({row})=><a href={`/img/${row.pic}`}target='_blank'rel="noregerror">
        <img src={`/img/${row.pic}`} height={50} width={50}/>
      </a>
    },
    {
      field: 'star',
      headerName: 'Star',
      width: 50,
      editable: true,
    },
    {
      field: 'message',
      headerName: 'Message',
      width: 200,
      editable: true,
    },
    {
      field: 'edit',
      headerName: 'Edit',
      width: 70,
      editable: true,
      renderCell:({row})=><Link to={`/admine/testimonial/update/${row.id}`} className='btn btn-primary'><i className='fa fa-edit'></i></Link>
    },
    {
      field: 'delete',
      headerName: 'Delete',
      width: 70,
      editable: true,
      renderCell:({row})=><button className='btn btn-danger' onClick={() => deleteRecord(row.id)}><i className='fa fa-trash'></i></button>
    }  ];

  
  let dispatch = useDispatch()
  let TestimonialStateData = useSelector(state => state.TestimonialStateData)
   function deleteRecord(id) {
    if (window.confirm("Are you sure to delete that item:")) {
     dispatch(deleteTestimonial({id:id}))
      getAPIData()
    }


  }
   function getAPIData() {
    dispatch(getTestimonial())
    if (TestimonialStateData.length)

      setData(TestimonialStateData)
  }
  useEffect(() => {
    getAPIData()
  }, [TestimonialStateData.length])


  return (
    <>
      <Breadcrum title="admine" />
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-3'>
            <Sidebar />
          </div>
          <div className='col-9'>
            <h5 className='bg-primary text-center p-2 text-light'>Testimonial<Link to="/admine/testimonial/create" className='float-end text-light'><i className='fa fa-plus'></i></Link></h5>
            {/* <table className='table table-bordered table-border'>
              <thead>
                <tr className='text-center table-primary'>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Pic</th>
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
                      <td className='text-center table-warning'>{item.pic}</td>
                      <td className='text-center table-info'><Link to={`/admine/Testimonial/update/${item.id}`} className='btn btn-primary'><i className='fa fa-edit'></i></Link></td>
                      <td className='text-center table-danger'><button className='btn btn-danger' onClick={() => deleteRecord(item.id)}><i className='fa fa-trash'></i></button></td>
                    </tr>


                  })

                }

              </tbody>

            </table> */}
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

export default Testimonial