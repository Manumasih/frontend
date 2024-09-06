import React from 'react'
import { Link } from 'react-router-dom'
import About from './About'
export default function Breadcrum({title}) {
  return (
    <>
        <div className="container-fluid page-header mt-5 wow fadeIn"id='top' data-wow-delay="0.1s">
        <div className="container">
            <h1 className="display-3 mb-4 animated slideInDown">{title}</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">{title}</li>
                </ol>
            </nav>
        </div>
    </div>

    </>
  )
}
