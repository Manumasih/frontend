import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <>
    <div className="list-group">
  <Link to="/admine" className="list-group-item list-group-item-action active" aria-current="true">
    Admine Home
  </Link>
  <Link to="/admine/user" className="list-group-item list-group-item-action"><i className='fa fa-users text-primary'></i><span className='float-end'>Users</span></Link>
  <Link to="/admine/maincategory" className="list-group-item list-group-item-action"><i className='fa fa-list text-primary'></i><span className='float-end'>Maincategory</span></Link>
  <Link to="/admine/subcategory" className="list-group-item list-group-item-action"><i className='fa fa-list text-primary'></i><span className='float-end'>Subcategory</span></Link>
  <Link to="/admine/brand" className="list-group-item list-group-item-action"><i className='fa fa-tag text-primary'></i><span className='float-end'>Brand</span></Link>
  <Link to="/admine/product" className="list-group-item list-group-item-action"><i class='fa fa-tag text-primary'></i><span className='float-end'>Product</span></Link>
  <Link to="/admine/testimonial" className="list-group-item list-group-item-action"><i className='fa fa-star text-primary'></i><span className='float-end'>Testimonial</span></Link>
  <Link to="/admine/newsletter" className="list-group-item list-group-item-action"><i className='fa fa-envelope text-primary'></i><span className='float-end'>Newsletter</span></Link>

  <Link to="/admine/contactus" className="list-group-item list-group-item-action"><i className='fa fa-phone text-primary'></i><span className='float-end'>Contactus</span></Link>
  <Link to="/admine/checkout" className="list-group-item list-group-item-action"><i className='fa fa-shopping-bag text-primary'></i><span className='float-end'>Checkouts</span></Link>
  </div>
    
    </>
  )
}
