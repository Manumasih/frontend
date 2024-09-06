import { useState, useEffect } from 'react'
import Breadcrum from '../../Breadcrum'
import Sidebar from '../Sidebar'
import Formvalidation from '../../Validation/Formvalidation'
import { useNavigate } from 'react-router-dom'
import { addTestimonial, getTestimonial } from "../../../store/ActionCreators/TestimonialActionCreators  "
import { useDispatch, useSelector } from 'react-redux'
function CreateTestimonial() {
  let [data, setData] = useState({
    name: "",
    pic: "",
    star: 5,
    message: ""
  })
  let [show, setShow] = useState(false)
  let [errorMessage, setErrorMessage] = useState({
    name: "name field is minedetory",
    pic: "pic is minedetory",
    message: "message field is mendetory"
  })
  let dispatch = useDispatch()
  let TestimonialStateData = useSelector(state => state.TestimonialStateData)
  let navigate = useNavigate()
  function getInputData(e) {
    let name = e.target.name
    let value = e.target.files ? e.target.files[0].name : e.target.value
    setErrorMessage((old) => {
      return {
        ...old,
        [name]: e.target.files ? "" : Formvalidation(e)
      }
    })
    setData((old) => {
      return {
        ...old,
        [name]: value
      }
    })

  }

  function postData(e) {
    e.preventDefault()
    let error = Object.values(errorMessage).find((x) => x?.length !== 0)
    if (!error) {

      let item = TestimonialStateData.find((x) => x.name.toLowerCase() === data.name.toLowerCase())
      if (item) {
        setErrorMessage((old) => {
          return {
            ...old,
            'name': "Testimonial name already exits"
          }
        })
        setShow(true)
      }
      else {
        dispatch(addTestimonial({ ...data }))
        navigate("/admine/testimonial")
      }

    }
    else
      setShow(true)
  }
  function getAPIData() {
    dispatch(getTestimonial())

  }
  useEffect(() => {
    getAPIData()
  }, [TestimonialStateData.length])
  return (
    <>
      <Breadcrum title="admine" />
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-3'>
            <Sidebar />
          </div>
          <div className='col-9'>
            <h5 className='bg-primary text-center p-2 text-light'>Testimonial
              <button className='float-end text-light border-0' style={{ background: "none" }} onClick={() => window.history.back()}><i className='fa fa-arrow-left'></i></button></h5>
            <form onSubmit={postData}>
              <div className='mb-3'>
                <label>Name<span className='text-danger'>*</span></label>
                <input type='text' name='name' onChange={getInputData} placeholder='Testimonial Name' className='form-control' />
                {show ? <p className='text-danger px-2 py-1'>{errorMessage.name}</p> : ""}
              </div>
              <div className='row'>
                <div className='col-md-6 mb-3'>
                  <label>Pic<span className='text-danger'>*</span></label>
                  <input type='file' name='pic' onChange={getInputData} className='form-control' />
                  {show ? <p className='text-danger px-2 py-1'>{errorMessage.pic}</p> : ""}
                </div>
                <div className='col-md-6 mb-3'>
                  <label>Star</label>
                  <input type='number' name='star' min={1} max={5} value={data.star} onChange={getInputData} className='form-control' />
                  {show ? <p className='text-danger px-2 py-1'>{errorMessage.star}</p> : ""}
                </div>

              </div>
              <div className='mb-3'>
                <label>message<span className='text-danger'>*</span></label>
                <textarea name='message' onChange={getInputData} rows={3} placeholder='message...' className='form-control'></textarea>
                {show ? <p className='text-danger px-2 py-1'>{errorMessage.message}</p> : ""}
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

export default CreateTestimonial