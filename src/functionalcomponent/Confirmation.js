import React from 'react'
import { Link } from 'react-router-dom'
import Breadcrum from './Breadcrum'
export default function Confirmation() {
  return (
    <>
    <Breadcrum title='Order Confirmation'/>
    <div className='text-center my-5'>
        <h3>Thank You</h3>
        <h4>you can track your order in profile section</h4>
        <Link to="/shop"className='btn btn-primary'>Shop More</Link>
    </div>
    </>
  )
}
