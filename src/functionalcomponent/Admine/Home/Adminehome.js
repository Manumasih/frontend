import React, { useState,useEffect } from 'react'
import Breadcrum from '../../Breadcrum'
import Sidebar from '../Sidebar'
import { Link } from 'react-router-dom'
function Adminehome() {
  let [user,setUser]=useState({})
  useEffect(() => {
    (async () => {
        let response = await fetch("/user/" + localStorage.getItem("userid"), {
            method: "get",
            headers: {
                "content-type": "application/json"
            }
        })
        response = await response.json()
        if (response)
            setUser({ ...response })
    })()
}, [])

  return (
    <>
    <Breadcrum title="admine"/>
  <div className='container-fluid'>
    <div className='row'>
      <div className='col-3'>
        <Sidebar/>
      </div>
      <div className='col-9'>
        <div className='row'>
        <h5 className='bg-primary text-center p-2'>admine section</h5>
          <div className='col-md-6'>
          {

user.pic?
<img src={`/img/${user.pic}`} style={{height:"360",width:"100%"}}/>:
<img src={`/img/user.png`}style={{height:"360",width:"100%"}}/>
}

          </div>
          <div className='col-md-6'>
            <table className='table table-border'>
              <tbody>
              <tr>
                  <th>Name</th>
                  <td>{user.name}</td>
                </tr>
                <tr>
                  <th>User name</th>
                  <td>{user.username}</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>{user.email}</td>
                </tr>
                <tr>
                  <th>phone</th>
                  <td>{user.phone}</td>
                </tr>
                <tr>
                  <td colSpan={2}><Link to='/UpdateProfile'className='btn btn-primary w-100'>Update</Link></td>
               </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default Adminehome