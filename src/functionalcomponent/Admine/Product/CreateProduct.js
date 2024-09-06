import { useState, useEffect } from 'react'
import Breadcrum from '../../Breadcrum'
import Sidebar from '../Sidebar'
import Formvalidation from '../../Validation/Formvalidation'
import { useNavigate } from 'react-router-dom'
import { addProduct } from "../../../store/ActionCreators/ProductActionCreators "
import { getMaincategory } from "../../../store/ActionCreators/MaincategoryActionCreators"
import { getSubcategory } from "../../../store/ActionCreators/SubcategoryActionCreators "
import { getBrand } from "../../../store/ActionCreators/BrandActionCreators "
import { useDispatch, useSelector } from 'react-redux'
import ImageValidation from '../../Validation/ImageValidation'
import { useRef } from 'react'
var rte
function CreateProduct() {
  let [data, setData] = useState({
    name: "",
    maincategory: "",
    subcategory: "",
    brand: "",
    color: "",
    size: "",
    baseprice: 0,
    discount: 0,
    finalprice: 0,
    stock: true,
    description: "",
    quantity: 0,
    pic: "",

  })
  let [show, setShow] = useState(false)
  let [errorMessage, setErrorMessage] = useState({
    name: "name field is minedetory",
    pic: "pic is minedetory",
    color: "color is minedetory",
    size: "size is minedetory",
    baseprice: "base is minedetory",
    discount: "discount is minedetory",
    quantity: "stock quantity field is minedetory"
  })
  let dispatch = useDispatch()
  let MaincategoryStateData = useSelector(state => state.MaincategoryStateData)
  let SubcategoryStateData = useSelector(state => state.SubcategoryStateData)
  let BrandStateData = useSelector(state => state.BrandStateData)
  let navigate = useNavigate()
  var refdiv = useRef(null);

  function getInputData(e) {
    let name = e.target.name
    let value = e.target.files ? e.target.files : e.target.value
    console.log(value, typeof value)
    setErrorMessage((old) => {
      return {
        ...old,
        [name]: e.target.files ? ImageValidation(e) : Formvalidation(e)
      }
    })
    setData((old) => {
      return {
        ...old,
        [name]: e.target.files ? Array.from(value).map((x) => x.name) : value
      }
    })

  }

  function postData(e) {
    e.preventDefault()
    let error = Object.values(errorMessage).find((x) => x?.length !== 0)
    if (!error) {
      let bp = parseInt(data.baseprice)
      let d = parseInt(data.discount)
      let fp = parseInt(bp - bp * d / 100)
      let item = {
        name: data.name,
        maincategory: data.maincategory,
        subcategory: data.subcategory,
        brand: data.brand,
        baseprice: bp,
        discount: d,
        finalprice: fp,
        color: data.color,
        size: data.size,
        stock: data.stock,
        description: rte.getHTMLCode(),
        quantity: parseInt(data.quantity),
        pic: data.pic,

      }

      dispatch(addProduct(item))
      navigate("/admine/product")
    }


    else
      setShow(true)
  }
  function getAPIData() {
    rte = new window.RichTextEditor(refdiv.current);
    rte.setHTMLCode("");
    dispatch(getMaincategory())
    dispatch(getSubcategory())
    dispatch(getBrand())
    if (MaincategoryStateData.length && SubcategoryStateData.length && BrandStateData.length) {
      setData((old) => {
        return {
          ...old,
          'maincategory': MaincategoryStateData[0].name,
          'subcategory': SubcategoryStateData[0].name,
          'brand': BrandStateData[0].name,

        }

      })
    }
  }
  useEffect(() => {
    getAPIData()
  }, [MaincategoryStateData.length, SubcategoryStateData.length, BrandStateData.length])
  return (
    <>
      <Breadcrum title="admine" />
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-3'>
            <Sidebar />
          </div>
          <div className='col-9'>
            <h5 className='bg-primary text-center p-2 text-light'>Product
              <button className='float-end text-light border-0' style={{ background: "none" }} onClick={() => window.history.back()}><i className='fa fa-arrow-left'></i></button></h5>
            <form onSubmit={postData}>
              <div className='mb-3'>
                <label>Name<span className='text-danger'>*</span></label>
                <input type='text' name='name' onChange={getInputData} placeholder='Product Name' className='form-control' />
                {show ? <p className='text-danger px-2 py-1'>{errorMessage.name}</p> : ""}
              </div>
              <div className='row'>
                <div className='col-lg-3 col-md-6 mb-3'>
                  <label>Maincategory<span className='text-danger'>*</span></label>
                  <select name="maincategory" onChange={getInputData} className="form-select">

                    {
                      MaincategoryStateData.map((item, index) => {
                        return <option key={index}>{item.name}</option>
                      })


                    }
                  </select>
                </div>
                <div className='col-lg-3 col-md-6 mb-3'>
                  <label>subcategory<span className='text-danger'>*</span></label>
                  <select name="subcategory" onChange={getInputData} className="form-select">

                    {
                      SubcategoryStateData.map((item, index) => {
                        return <option key={index}>{item.name}</option>
                      })


                    }
                  </select>
                </div>
                <div className='col-lg-3 col-md-6 mb-3'>
                  <label>Brand<span className='text-danger'>*</span></label>
                  <select name="brand" onChange={getInputData} className="form-select">

                    {
                      BrandStateData.map((item, index) => {
                        return <option key={index}>{item.name}</option>
                      })


                    }
                  </select>
                </div>

                <div className='col-lg-3 col-md-6 mb-3'>
                  <label>Stock<span className='text-danger'>*</span></label>
                  <select name="stock" onChange={getInputData} className="form-select">
                    <option value={true}>In Stock</option>
                    <option value={false}>Out of Stock</option>
                  </select>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-4 mb-3'>
                  <label>Base Price<span className='text-danger'>*</span></label>
                  <input type='number' name='baseprice' onChange={getInputData} className='form-control' placeholder='Baseprice' />
                  {show ? <p className='text-danger px-1 py-1 text-capitalize'>{errorMessage.baseprice}</p> : ""}
                </div>
                <div className='col-md-4 mb-3'>
                  <label>Discount<span className='text-danger'>*</span></label>
                  <input type='number' name='discount' onChange={getInputData} className='form-control' placeholder='Discount' />
                  {show ? <p className='text-danger px-1 py-1 text-capitalize'>{errorMessage.discount}</p> : ""}

                </div>
                <div className='col-md-4 mb-3'>
                  <label>Stock quantity<span className='text-danger'>*</span></label>
                  <input type='number' name='quantity' onChange={getInputData} className='form-control' placeholder='Stock Quantity' />
                  {show ? <p className='text-danger px-1 py-1 text-capitalize'>{errorMessage.quantity}</p> : ""}

                </div>

              </div>
              <div className='row'>
                <div className='col-md-6 mb-3'>
                  <label>Color<span className='text-danger'>*</span></label>
                  <input type='text' name='color' onChange={getInputData} className='form-control' placeholder='Color' />
                  {show ? <p className='text-danger px-1 py-1 text-capitalize'>{errorMessage.color}</p> : ""}
                </div>
                <div className='col-md-6 mb-3'>
                  <label>Size<span className='text-danger'>*</span></label>
                  <input type='text' name='size' onChange={getInputData} className='form-control' placeholder='Size' />
                  {show ? <p className='text-danger px-1 py-1 text-capitalize'>{errorMessage.size}</p> : ""}

                </div>

              </div>
              <div className='row'>
                <lebel>Description</lebel>
                <div className='w-100' ref={refdiv}></div>
              </div>


              <div className='mb-3'>
                <label>Name<span className='text-danger'>*</span></label>
                <input type='file' name='pic' multiple onChange={getInputData} className='form-control' />
                {show ? <p className='text-danger px-2 py-1'>{errorMessage.pic}</p> : ""}
              </div>


              <div className='mb-3'>
                <button type='submit' className='btn btn-primary w-100'>Create</button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </>
  )
}

export default CreateProduct