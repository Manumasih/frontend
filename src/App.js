import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './functionalcomponent/Navbar'
import Footer from './functionalcomponent/Footer'
import Home from './functionalcomponent/Home'
import About from './functionalcomponent/About'
import Error from './functionalcomponent/Error'
import Shop from './functionalcomponent/Shop'
import Contactus from './functionalcomponent/Contactus'
import SingleProduct from './functionalcomponent/SingleProduct'
import Adminehome from './functionalcomponent/Admine/Home/Adminehome'
import Cart from './functionalcomponent/Cart'
import Newsletter from'./functionalcomponent/Admine/Newsletter/Newsletter'
import User from'./functionalcomponent/Admine/User/User'
import ContactUsQueries from'./functionalcomponent/Admine/ContactUs/ContactUsQueries'


import Maincategory from './functionalcomponent/Admine/Maincategory/Maincategory'
import CreateMaincategory from './functionalcomponent/Admine/Maincategory/CreateMaincategory'
import UpdateMaincategory from './functionalcomponent/Admine/Maincategory/UpdateMaincategory'

import Subcategory from './functionalcomponent/Admine/Subcategory/Subcategory'
import CreateSubcategory from './functionalcomponent/Admine/Subcategory/CreateSubcategory'
import UpdateSubcategory from './functionalcomponent/Admine/Subcategory/UpdateSubcategory'
import Checkout from './functionalcomponent/Checkout'
import Brand from './functionalcomponent/Admine/Brand/Brand'
import CreateBrand from './functionalcomponent/Admine/Brand/CreateBrand'
import UpdateBrand from './functionalcomponent/Admine/Brand/UpdateBrand'
import ContactUsShow from './functionalcomponent/Admine/ContactUs/ContactUsShow'
import Product from './functionalcomponent/Admine/Product/Product'
import CreateProduct from './functionalcomponent/Admine/Product/CreateProduct'
import UpdateProduct from './functionalcomponent/Admine/Product/UpdateProduct'
import Testimonial from './functionalcomponent/Admine/Testimonial/Testimonial'
import CreateTestimonial from './functionalcomponent/Admine/Testimonial/CreateTestimonial'
import UpdateTestimonial from './functionalcomponent/Admine/Testimonial/UpdateTestimonial'
import Signup from './functionalcomponent/Signup'
import Login from './functionalcomponent/Login'
import Profile from './functionalcomponent/Profile'
import CheckoutQueries from './functionalcomponent/Admine/Checkout/CheckoutQueries'
import UpdateProfile from './functionalcomponent/UpdateProfile'
import Confirmation from './functionalcomponent/Confirmation'
import CheckoutShow from './functionalcomponent/Admine/Checkout/CheckoutShow'
export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
    <Route path='/'element={<Home/>}/>
    <Route path='/About'element={<About/>}/>
    <Route path="/Shop"element={<Shop/>}/>
    <Route path="/single-product/:id" element={<SingleProduct />} />
    <Route path="/Signup" element={<Signup/>} />
    <Route path="/login" element={<Login/>} />

    {/* buyer routes */}
    <Route path="/profile" element={<Profile/>} />
    <Route path="/UpdateProfile" element={<UpdateProfile/>} />
    <Route path="/cart" element={<Cart/>} />
    <Route path="/checkout" element={<Checkout/>} />
    <Route path="/confirmation" element={<Confirmation/>} />
    <Route path="/single-product" element={<SingleProduct/>} />
    <Route path="/update-profile" element={<UpdateProfile/>} />



{/* admine routes */}
    <Route path='/contact'element={<Contactus/>}/>
    <Route path='/admine'element={<Adminehome/>}/>
    <Route path='/admine/maincategory'element={<Maincategory/>}/>
    <Route path='/admine/maincategory/create'element={<CreateMaincategory/>}/>
    <Route path='/admine/maincategory/update/:id'element={<UpdateMaincategory/>}/>
    
    <Route path='/admine/subcategory'element={<Subcategory/>}/>
    <Route path='/admine/subcategory/create'element={<CreateSubcategory/>}/>
    <Route path='/admine/subcategory/update/:id'element={<UpdateSubcategory/>}/>
    
    <Route path='/admine/brand'element={<Brand/>}/>
    <Route path='/admine/brand/create'element={<CreateBrand/>}/>
    <Route path='/admine/brand/update/:id'element={<UpdateBrand/>}/>
    
    <Route path='/admine/product'element={<Product/>}/>
    <Route path='/admine/product/create'element={<CreateProduct/>}/>
    <Route path='/admine/product/update/:id'element={<UpdateProduct/>}/>
    
    <Route path='/admine/testimonial'element={<Testimonial/>}/>
    <Route path='/admine/testimonial/create'element={<CreateTestimonial/>}/>
    <Route path='/admine/testimonial/update/:id'element={<UpdateTestimonial/>}/>
    
    <Route path='/admine/newsletter'element={<Newsletter/>}/>
    <Route path='/admine/user'element={<User/>}/>
    <Route path='/admine/contactus'element={<ContactUsQueries/>}/>
    <Route path='/admine/contactus/show/:id'element={<ContactUsShow/>}/>
     
     <Route path='/admine/checkout'element={<CheckoutQueries/>}/>
     <Route path='/admine/checkout/show/:id'element={<CheckoutShow/>}/>
    
    
    <Route path='/*'element={<Error/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>

    </div>
  )
}
