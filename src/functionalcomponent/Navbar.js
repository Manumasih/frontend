import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
function Navbar() {
  let  navigate=useNavigate()
function logout(){
    localStorage.clear()
    navigate("/login")
}
    return (
        <>
            <div className="container-fluid fixed-top px-0 wow fadeIn" data-wow-delay="0.1s">
                <div className="top-bar row gx-0 align-items-center d-none d-lg-flex">
                    <div className="col-lg-6 px-5 text-start">
                        <div className="d-none d-lg-flex ms-2">
                            <Link className="btn btn-light btn-sm-square rounded-circle ms-3" to="">
                                <small className="fab fa-facebook-f text-primary"></small>
                            </Link>
                            <Link className="btn btn-light btn-sm-square rounded-circle ms-3" to="">
                                <small className="fab fa-twitter text-primary"></small>
                            </Link>
                            <Link className="btn btn-light btn-sm-square rounded-circle ms-3" to="">
                                <small className="fab fa-linkedin-in text-primary"></small>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-6 px-5 text-end">
                        <small><Link to='kunalmassy673@gmail.com' className='text-dark'> <i className="fa fa-envelope text-primary me-2"></i>kunalmassy673@gmail.com</Link></small>
                        <small className="ms-4"><Link to='mob-6398957578' className='text-dark'> <i className="fa fa-phone-alt text-primary me-2"></i>+916398957578</Link></small>

                    </div>
                </div>

                <nav className="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
                    <Link to="/" className="navbar-brand ms-4 ms-lg-0">
                        <h1 className="display-5 text-primary m-0">FASHION 2 BASKET</h1>
                    </Link>
                    <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto p-4 p-lg-0">
                            <Link to="/" className="nav-item nav-link active">Home</Link>
                            <Link to="/about" className="nav-item nav-link">About</Link>
                            <Link to="/shop" className="nav-item nav-link">Shop</Link>
                            <Link to="/contact" className="nav-item nav-link">Contact</Link>
                            <Link to="/admine" className="nav-item nav-link">Admine</Link>

                            {
                                localStorage.getItem("login") ?
                                    <div className="nav-item dropdown">
                                        <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">{localStorage.getItem("name")}</Link>
                                        <div className="dropdown-menu border-light m-0">
                                            <Link to={localStorage.getItem("role")==="Admine"?"/admine":"/profile"} className="dropdown-item">Profile</Link>
                                           {
                                            localStorage.getItem("role")==="Buyer"?
                                            <>
                                             <Link to="/cart" className="dropdown-item">card</Link>
                                            <Link to="/checkout" className="dropdown-item">checkout</Link>
                                           
                                            </>:""
                                           }
                                            <button className="dropdown-item"onClick={logout}>logout</button>
                                        </div>
                                    </div> :
                                    <Link to="/login" className="nav-item nav-link">Login</Link>

                            }

                        </div>

                    </div>
                </nav>
            </div>

        </>
    )
}

export default Navbar