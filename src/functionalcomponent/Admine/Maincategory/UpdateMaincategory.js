import React, { useEffect, useState } from 'react'
import Breadcrum from '../../Breadcrum'
import Sidebar from '../Sidebar'
import Formvalidation from '../../Validation/Formvalidation'
import { useNavigate,useParams } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { getMaincategory, updateMaincategory} from '../../../store/ActionCreators/MaincategoryActionCreators'
function UpdateMaincategory() {
  let [name, setName] = useState("")
  let [show, setShow] = useState(false)
  let [errorMessage, setErrorMessage] = useState("Name Field is Mendetory")
  let navigate = useNavigate()
  let {id}=useParams()
  let dispatch=useDispatch()
  let MaincategoryStateData = useSelector(state => state.MaincategoryStateData)
  
  
  function getInputData(e) {
    setName(e.target.value)
    setErrorMessage(Formvalidation(e))
  }

    function postData(e) {
    e.preventDefault()
    if (errorMessage.length === 0) {
let item = MaincategoryStateData.find((x)=>x.name.toLowerCase() === name.toLowerCase())
if(item){
setErrorMessage("Maincategory Name is Already Exit")
setShow(true)
}
 else{
 dispatch(updateMaincategory({id:id,name:name}))
 
  navigate("/admine/maincategory")
 }      
   
    }
    else
      setShow(true)
  }
   function getAPIData(){
   dispatch(getMaincategory())
if (MaincategoryStateData.length){
  let item = MaincategoryStateData.find((x)=>x.id === id)
 setName(item.name)
 
} 
}
  useEffect(()=>{
    getAPIData()
  },[MaincategoryStateData.length])
  return (
    <>
      <Breadcrum title="admine" />
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-3'>
            <Sidebar />
          </div>
          <div className='col-9'>
            <h5 className='bg-primary text-center p-2 text-light'>Maincategory
              <button className='float-end text-light border-0' style={{ background: "none" }} onClick={() => window.history.back()}><i className='fa fa-arrow-left'></i></button></h5>
            <form onSubmit={postData}>
              <div className='mb-3'>
                <label>Name<span className='text-danger'>*</span></label>
                <input type='text' name='name'value={name} onChange={getInputData} placeholder='MainCategory Name' className='form-control' />
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

export default UpdateMaincategory