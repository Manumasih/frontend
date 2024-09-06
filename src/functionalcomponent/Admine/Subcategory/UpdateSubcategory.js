import React, { useEffect, useState } from 'react'
import Breadcrum from '../../Breadcrum'
import Sidebar from '../Sidebar'
import Formvalidation from '../../Validation/Formvalidation'
import { useNavigate,useParams } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { getSubcategory, updateSubcategory} from '../../../store/ActionCreators/SubcategoryActionCreators '

function UpdateSubcategory() {
  let [name, setName] = useState("")
  let [show, setShow] = useState(false)
  let [errorMessage, setErrorMessage] = useState("Name Field is Mendetory")
  let navigate = useNavigate()
  let {id}=useParams()
  let dispatch=useDispatch()
  let SubcategoryStateData = useSelector(state => state.SubcategoryStateData)
  
  
  function getInputData(e) {
    setName(e.target.value)
    setErrorMessage(Formvalidation(e))
  }

    function postData(e) {
    e.preventDefault()
    if (errorMessage.length === 0) {
let item = SubcategoryStateData.find((x)=>x.name.toLowerCase() === name.toLowerCase())
if(item){
setErrorMessage("Subcategory Name is Already Exit")
setShow(true)
}
 else{
 dispatch(updateSubcategory({id:id,name:name}))
 
  navigate("/admine/subcategory")
 }      
   
    }
    else
      setShow(true)
  }
   function getAPIData(){
   dispatch(getSubcategory())
if (SubcategoryStateData.length){
  let item = SubcategoryStateData.find((x)=>x.id === id)
 setName(item.name)
 
} 
}
  useEffect(()=>{
    getAPIData()
  },[SubcategoryStateData.length])
  return (
    <>
      <Breadcrum title="admine" />
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-3'>
            <Sidebar />
          </div>
          <div className='col-9'>
            <h5 className='bg-primary text-center p-2 text-light'>Subcategory
              <button className='float-end text-light border-0' style={{ background: "none" }} onClick={() => window.history.back()}><i className='fa fa-arrow-left'></i></button></h5>
            <form onSubmit={postData}>
              <div className='mb-3'>
                <label>Name<span className='text-danger'>*</span></label>
                <input type='text' name='name'value={name} onChange={getInputData} placeholder='Subcategory Name' className='form-control' />
                {show ? <p className='text-danger px-2 py-1'>{errorMessage}</p> : ""}
              </div>
              <div className='mb-3'>
                <button type='submit' className='btn btn-primary w-100'>Update</button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </>
  )
}

export default UpdateSubcategory