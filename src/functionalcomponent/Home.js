import React, { useEffect, useState } from 'react'
import ProductSlider from './ProductSlider'
import { getProduct } from "../store/ActionCreators/ProductActionCreators "
import { useDispatch, useSelector } from 'react-redux'
import ProductItem from './ProductItem'
import { Link } from 'react-router-dom'
function Home() {
    let [products, setProducts] = useState([])
    let dispatch = useDispatch()
    let ProductStateData = useSelector(state => state.ProductStateData)
    function getAPIData() {
        dispatch(getProduct())
        if (ProductStateData.length) {
            setProducts(ProductStateData)
        }
    }
    useEffect(() => {
        getAPIData()

    }, [ProductStateData.length])

    return (
        <>

            <div className="container-fluid p-0 mb-3 wow fadeIn" data-wow-delay="0.1s">
                <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="w-100" src="img/img8.jpg" style={{ height: 570 }} alt="Image" />
                            <div className="carousel-caption">
                                <div className="container">
                                    <div className="row justify-content-start">
                                        <div className="col-lg-8">
                                            <p
                                                className="d-inline-block border border-white rounded text-primary fw-semi-bold py-1 px-3 animated slideInDown">
                                                Welcome to Finanza</p>
                                            <h1 className="display-3 mb-4 animat0ed slideInDown">Best in industrial product for men
                                            </h1>
                                            <Link to="/shop?&mc=Male" className="btn btn-primary py-3 px-3 animated slideInDown">Shop Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="w-100" src="img/img9.jpg" style={{ height: 570 }} alt="Image" />
                            <div className="carousel-caption">
                                <div className="container">
                                    <div className="row justify-content-start">
                                        <div className="col-lg-7">
                                            <p
                                                className="d-inline-block border border-white rounded text-primary fw-semi-bold py-1 px-3 animated slideInDown">
                                                Welcome to Finanza</p>
                                            <h1 className="display-3 mb-4 animated slideInDown text-white">Best in industrial product for women</h1>
                                            <Link to="/shop?&mc=Male" className="btn btn-primary py-3 px-3 animated slideInDown">Shop Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="w-100" src="img\img10.jpg" style={{ height: 570 }} alt="Image" />
                            <div className="carousel-caption">
                                <div className="container">
                                    <div className="row justify-content-start">
                                        <div className="col-lg-7">
                                            <p
                                                className="d-inline-block border border-white rounded text-primary fw-semi-bold py-1 px-3 animated slideInDown">
                                                Welcome to Finanza</p>
                                            <h1 className="display-3 mb-4 animated slideInDown">Best in industrial product for Kids</h1>
                                            <Link to="/shop?&mc=Male" className="btn btn-primary py-3 px-3 animated slideInDown">Shop Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className="container-xxl py-1">
                <div className="container">
                    <div className="row g-4 align-items-end mb-4">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <img className="img-fluid rounded " src="img/img11.jpg" style={{ height: 500, width: "100%" }} />
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                            <h1 className=" mb-4">Secure Payments for all cards</h1>
                            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et
                                eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
                            </p>
                            <div className="border rounded p-4">
                                <nav>
                                    <div className="nav nav-tabs mb-3" id="nav-tab" role="tablist">
                                        <button className="nav-link fw-semi-bold active" id="nav-story-tab" data-bs-toggle="tab"
                                            data-bs-target="#nav-story" type="button" role="tab" aria-controls="nav-story"
                                            aria-selected="true">Refund</button>
                                        <button className="nav-link fw-semi-bold" id="nav-mission-tab" data-bs-toggle="tab"
                                            data-bs-target="#nav-mission" type="button" role="tab" aria-controls="nav-mission"
                                            aria-selected="false">Return</button>
                                        <button className="nav-link fw-semi-bold" id="nav-vision-tab" data-bs-toggle="tab"
                                            data-bs-target="#nav-vision" type="button" role="tab" aria-controls="nav-vision"
                                            aria-selected="false">Shipping</button>
                                    </div>
                                </nav>
                                <div className="tab-content" id="nav-tabContent">
                                    <div className="tab-pane fade show active" id="nav-story" role="tabpanel"
                                        aria-labelledby="nav-story-tab">
                                        <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam
                                            amet diam et eos labore.</p>
                                        <p className="mb-0">Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore.
                                            Clita erat ipsum et lorem et sit</p>
                                    </div>
                                    <div className="tab-pane fade" id="nav-mission" role="tabpanel"
                                        aria-labelledby="nav-mission-tab">
                                        <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam
                                            amet diam et eos labore.</p>
                                        <p className="mb-0">Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore.
                                            Clita erat ipsum et lorem et sit</p>
                                    </div>
                                    <div className="tab-pane fade" id="nav-vision" role="tabpanel" aria-labelledby="nav-vision-tab">
                                        <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam
                                            amet diam et eos labore.</p>
                                        <p className="mb-0">Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore.
                                            Clita erat ipsum et lorem et sit</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border rounded p-4 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="row g-4">
                            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                                <div className="h-100">
                                    <div className="d-flex">
                                        <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                                            <i className="fa fa-times text-white"></i>
                                        </div>
                                        <div className="ps-3">
                                            <h4>Free Shipping available</h4>
                                            <span>fee shipping if total card balance is above 1000</span>
                                        </div>
                                        <div className="border-end d-none d-lg-block"></div>
                                    </div>
                                    <div className="border-bottom mt-4 d-block d-lg-none"></div>
                                </div>
                            </div>
                            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                                <div className="h-100">
                                    <div className="d-flex">
                                        <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                                            <i className="fa fa-users text-white"></i>
                                        </div>
                                        <div className="ps-3">
                                            <h4>100% 0riginal Products</h4>
                                            <span>Clita erat ipsum lorem sit sed stet duo justo</span>
                                        </div>
                                        <div className="border-end d-none d-lg-block"></div>
                                    </div>
                                    <div className="border-bottom mt-4 d-block d-lg-none"></div>
                                </div>
                            </div>
                            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                                <div className="h-100">
                                    <div className="d-flex">
                                        <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                                            <i className="fa fa-phone text-white"></i>
                                        </div>
                                        <div className="ps-3">
                                            <h4>24/7 Customer Supports</h4>
                                            <span>Clita erat ipsum lorem sit sed stet duo justo</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-xxl py-2">
                <div className="container">
                    <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "600px;" }}>
                        <h3 className=" mb-3">Latest Male Products</h3>
                    </div>
                    <ProductSlider data={products.filter((x) => x.maincategory === "Male")} />
                </div>
            </div>

            <div className="container-xxl py-2">
                <div className="container">
                    <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "600px;" }}>

                        <h3 className=" mb-3">Latest Female Products</h3>
                    </div>
                    <ProductSlider data={products.filter((x) => x.maincategory === "Female")} />
                </div>
            </div>

            <div className="container-xxl py-2">
                <div className="container">
                    <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "600px;" }}>

                        <h3 className=" mb-3">Latest Kids Products</h3>
                    </div>
                    <ProductSlider data={products.filter((x) => x.maincategory === "Kids")} />
                </div>
            </div>





            <div className="container-fluid facts my-2 py-2">
                <div className="container py-3">
                    <div className="row g-3">
                        <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.1s">
                            <i className="fa fa-users fa-2x text-white mb-3"></i>
                            <h4 className=" text-white" data-toggle="counter-up">10000</h4>
                            <span className=" text-white">Happy Customers</span>
                            <hr className="bg-white w-25 mx-auto mb-0" />
                        </div>
                        <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.3s">
                            <i className="fa fa-check fa-2x text-white mb-3"></i>
                            <h4 className=" text-white" data-toggle="counter-up">1000</h4>
                            <span className=" text-white">Original Products</span>
                            <hr className="bg-white w-25 mx-auto mb-0" />
                        </div>
                        <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.5s">
                            <i className="fa fa-thumbs-up fa-2x text-white mb-3"></i>
                            <h4 className=" text-white" data-toggle="counter-up">2000</h4>
                            <span className=" text-white">Top Brands</span>
                            <hr className="bg-white w-25 mx-auto mb-0" />
                        </div>
                        <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.7s">
                            <i className="fa fa-star fa-2x text-white mb-3"></i>
                            <h4 className=" text-white" data-toggle="counter-up">1000</h4>
                            <span className=" text-white">Top Rating products</span>
                            <hr className="bg-white w-25 mx-auto mb-0" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-xxl feature py-3">
                <div className="container">
                    <div className="row g-3 align-items-center">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">Why Choosing Us!</p>
                            <h1 className=" mb-4">Few Reasons Why People Choosing Us!</h1>
                            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et
                                eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
                            </p>
                            <a className="btn btn-primary py-3 px-3" href="">Explore More</a>
                        </div>
                        <div className="col-lg-6">
                            <div className="row g-4 align-items-center">
                                <div className="col-md-6">
                                    <div className="row g-4">
                                        <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                                            <div className="feature-box border rounded p-4">
                                                <i className="fa fa-check fa-2x text-primary mb-3"></i>
                                                <h4 className="mb-3">Male product</h4>
                                                <p className="mb-3">Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo
                                                    justo erat amet</p>
                                                <a className="fw-semi-bold" href="/shop/male">shop now <i
                                                    className="fa fa-arrow-right ms-1"></i></a>
                                            </div>
                                        </div>
                                        <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                                            <div className="feature-box border rounded p-4">
                                                <i className="fa fa-check fa-2x text-primary mb-3"></i>
                                                <h4 className="mb-3">women Products</h4>
                                                <p className="mb-3">Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo
                                                    justo erat amet</p>
                                                <a className="fw-semi-bold" href="/shop/women">shop now <i
                                                    className="fa fa-arrow-right ms-1"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 wow fadeIn" data-wow-delay="0.7s">
                                    <div className="feature-box border rounded p-4">
                                        <i className="fa fa-check fa-2x text-primary mb-3"></i>
                                        <h4 className="mb-3">Kids products</h4>
                                        <p className="mb-3">Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo
                                            erat amet</p>
                                        <a className="fw-semi-bold" href="/shop/kids">Shop now<i className="fa fa-arrow-right ms-1"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-xxl py-2">
                <div className="container">
                    <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "600px;" }}>
                        <h1 className=" mb-3">Latest Products</h1>
                    </div>
                    <div className="row g-4">
                        {
                            products.slice(0,20).map((item, index) => {
                                return <div key={index} className='col-xxl-2 col-lg-3 col-md-4 col-sm-6 col-mb-12'>
                                    <ProductItem item={item} />
                                </div>
                            })
                        }


                    </div>
                </div>
            </div>















            <div className="container-xxl service py-3">
                <div className="container">
                    <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "600px;" }}>
                        <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">About Us</p>
                        <h1 className=" mb-3">Awesome E-Commerce platform for clothes</h1>
                    </div>
                    <div className="row g-4 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="col-lg-4">
                            <div className="nav nav-pills d-flex justify-content-between w-100 h-100 me-4">
                                <button className="nav-link w-100 d-flex align-items-center text-start border p-4 mb-4 active"
                                    data-bs-toggle="pill" data-bs-target="#tab-pane-1" type="button">
                                    <h5 className="m-0"><i className="fa fa-bars text-primary me-3"></i>100% Original Products</h5>
                                </button>
                                <button className="nav-link w-100 d-flex align-items-center text-start border p-4 mb-4"
                                    data-bs-toggle="pill" data-bs-target="#tab-pane-2" type="button">
                                    <h5 className="m-0"><i className="fa fa-bars text-primary me-3"></i>top brands</h5>
                                </button>
                                <button className="nav-link w-100 d-flex align-items-center text-start border p-4 mb-4"
                                    data-bs-toggle="pill" data-bs-target="#tab-pane-3" type="button">
                                    <h5 className="m-0"><i className="fa fa-bars text-primary me-3"></i>Great deals on clothes</h5>
                                </button>
                                <button className="nav-link w-100 d-flex align-items-center text-start border p-4 mb-0"
                                    data-bs-toggle="pill" data-bs-target="#tab-pane-4" type="button">
                                    <h5 className="m-0"><i className="fa fa-bars text-primary me-3"></i>7 days Refund Policies</h5>
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="tab-content w-100">
                                <div className="tab-pane fade show active" id="tab-pane-1">
                                    <div className="row g-4">
                                        <div className="col-md-6" style={{ minHeight: " 350px;" }}>
                                            <div className="position-relative h-100">
                                                <img className="position-absolute rounded w-100 h-100" src="img/service-1.jpg"
                                                    style={{ objectFit: "cover;" }} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <h3 className="mb-4">25 Years Of Experience In Financial Support</h3>
                                            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
                                                diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit
                                                clita duo justo erat amet.</p>
                                            <p><i className="fa fa-check text-primary me-3"></i>Secured Loans</p>
                                            <p><i className="fa fa-check text-primary me-3"></i>Credit Facilities</p>
                                            <p><i className="fa fa-check text-primary me-3"></i>Cash Advanced</p>
                                            <a href="/shop" className="btn btn-primary py-3 px-3 mt-3">shop now</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="tab-pane-2">
                                    <div className="row g-4">
                                        <div className="col-md-6" style={{ minHeight: " 350px;" }}>
                                            <div className="position-relative h-100">
                                                <img className="position-absolute rounded w-100 h-100" src="img/service-2.jpg"
                                                    style={{ objectFit: "cover;" }} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <h3 className="mb-4">25 Years Of Experience In Financial Support</h3>
                                            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
                                                diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit
                                                clita duo justo erat amet.</p>
                                            <p><i className="fa fa-check text-primary me-3"></i>Secured Loans</p>
                                            <p><i className="fa fa-check text-primary me-3"></i>Credit Facilities</p>
                                            <p><i className="fa fa-check text-primary me-3"></i>Cash Advanced</p>
                                            <a href="/shop" className="btn btn-primary py-3 px-3 mt-3">Shop now</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="tab-pane-3">
                                    <div className="row g-4">
                                        <div className="col-md-6" style={{ minHeight: " 350px;" }}>
                                            <div className="position-relative h-100">
                                                <img className="position-absolute rounded w-100 h-100" src="img/service-3.jpg"
                                                    style={{ objectFit: "cover;" }} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <h3 className="mb-4">25 Years Of Experience In Financial Support</h3>
                                            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
                                                diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit
                                                clita duo justo erat amet.</p>
                                            <p><i className="fa fa-check text-primary me-3"></i>Secured Loans</p>
                                            <p><i className="fa fa-check text-primary me-3"></i>Credit Facilities</p>
                                            <p><i className="fa fa-check text-primary me-3"></i>Cash Advanced</p>
                                            <a href="" className="btn btn-primary py-3 px-3 mt-3">Read More</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="tab-pane-4">
                                    <div className="row g-4">
                                        <div className="col-md-6" style={{ minHeight: "350px;" }}>
                                            <div className="position-relative h-100">
                                                <img className="position-absolute rounded w-100 h-100" src="img/service-4.jpg"
                                                    style={{ objectFit: "cover;" }} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <h3 className="mb-4">25 Years Of Experience In Financial Support</h3>
                                            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
                                                diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit
                                                clita duo justo erat amet.</p>
                                            <p><i className="fa fa-check text-primary me-3"></i>Secured Loans</p>
                                            <p><i className="fa fa-check text-primary me-3"></i>Credit Facilities</p>
                                            <p><i className="fa fa-check text-primary me-3"></i>Cash Advanced</p>
                                            <a href="" className="btn btn-primary py-3 px-3 mt-3">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid callback my-3 pt-3">
                <div className="container pt-3">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="bg-white border rounded p-4 p-sm-3 wow fadeInUp" data-wow-delay="0.5s">
                                <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "600px;" }}>
                                    <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">Get In Touch
                                    </p>
                                    <h1 className=" mb-3">Request A Call-Back</h1>
                                </div>
                                <div className="row g-3">
                                    <div className="col-sm-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                            <label htmlFor="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="mail" placeholder="Your Email" />
                                            <label htmlFor="mail">Your Email</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="mobile" placeholder="Your Mobile" />
                                            <label htmlFor="mobile">Your Mobile</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="subject" placeholder="Subject" />
                                            <label htmlFor="subject">Subject</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea className="form-control" placeholder="Leave a message here" id="message"
                                                style={{ height: "100px" }}></textarea>
                                            <label htmlFor="message">Message</label>
                                        </div>
                                    </div>
                                    <div className="col-12 text-center">
                                        <button className="btn btn-primary w-100 py-3" type="submit">Submit Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>






          

        </>
    )
}

export default Home