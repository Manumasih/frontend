import React, { useEffect, useState } from 'react'
import Breadcrum from "../../Breadcrum"
import Sidebar from '../Sidebar'
import { useDispatch, useSelector } from 'react-redux'

import { getCheckout, updateCheckout } from "../../../store/ActionCreators/CheckoutActionCreators"
import { Await, useNavigate, useParams } from 'react-router-dom'
import App from '../../../App'
export default function CheckoutShow() {
    let [data, setData] = useState({})
    let [user, setUser] = useState({})
    let [orderstatus, setOrderStatus] = useState("")
    let [paymentstatus, setPaymentStatus] = useState("")
    let { id } = useParams()

    let dispatch = useDispatch()

    let CheckoutStateData = useSelector(state => state.CheckoutStateData)

    function updateRecord() {
        if (window.confirm("Are You Sure to update the status : ")) {
            dispatch(updateCheckout({ ...data, orderstatus: orderstatus, paymentstatus: paymentstatus }))
            setData({ ...data, orderstatus: orderstatus, paymentstatus: paymentstatus })
        }
    }
  async  function getAPIData() {
        dispatch(getCheckout())
        if (CheckoutStateData.length) {
            let item = CheckoutStateData.find((x) => x.id === id)
            if (item) {
                setData(item)
                setOrderStatus(item.orderstatus)
                setPaymentStatus(item.paymentstatus)
                let response = await fetch("/user/" + item.userid, {
                    method: "get",
                    headers: {
                        "content-type": "application/json"
                    }
                })
                response = await response.json()
            setUser(response)
            }
        }
    }
    useEffect(() => {
        getAPIData()
    }, [CheckoutStateData.length])
    return (
        <>
            <Breadcrum title="Admin" />

            <div className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <Sidebar />
                    </div>
                    <div className="col-9">
                        <h5 className='bg-primary text-light text-center p-2'>Checkouts</h5>
                        <div className="table-responsive">
                            <table className='table table-bordered'>
                                <tbody>
                                    <tr>
                                        <th>Id</th>
                                        <td>{data.id}</td>
                                    </tr>
                                    <tr>
                                        <th>Delivery Add</th>
                                        <td>
                                            {user.name}<br/>
                                            {user.email},{user.phone}<br/>
                                            {user.address}<br/>
                                            {user.pin},{user.city}<br/>
                                           
                                        </td>
                                    </tr>

                                    <tr>
                                        <th>Order Status</th>
                                        <td>{data.orderstatus}
                                            {
                                                data.orderstatus !== "delivered" ?
                                                    <>
                                                        <br />
                                                        <select name="orderstatus" value={orderstatus} onChange={(e) => setOrderStatus(e.target.value)} className='form-select mt-3'>
                                                            <option>Order is placed</option>
                                                            <option>Order is packed</option>
                                                            <option>Order is ready to ship</option>
                                                            <option>Order is shipped</option>
                                                            <option>Order is in Transit</option>
                                                            <option>out of delivery</option>
                                                            <option>Delivered</option>

                                                        </select>
                                                    </> : ""
                                            }

                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Payment Status</th>
                                        <td>{data.paymentstatus}
                                            {
                                                data.paymentstatus !== "Done" && data.paymentmode === "COD" ?
                                                    <>
                                                        <br />
                                                        <select name="paymentstatus" value={paymentstatus} onChange={(e) => setPaymentStatus(e.target.value)} className='form-select mt-3'>
                                                            <option>pending</option>
                                                            <option>Done</option>

                                                        </select>
                                                    </> : ""
                                            }
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Payment Mode</th>
                                        <td>{data.paymentmode}</td>
                                    </tr>
                                    <tr>
                                        <th>Subtotal</th>
                                        <td>&#8377;{data.subtotal}</td>
                                    </tr>
                                    <tr>
                                        <th>Shipping</th>
                                        <td>&#8377;{data.shipping}</td>
                                    </tr>
                                    <tr>
                                        <th>Total</th>
                                        <td>&#8377;{data.total}</td>
                                    </tr>

                                    <tr>
                                        <th>RPPID</th>
                                        <td>{data.rppid ? data.rppid : "N/A"}</td>
                                    </tr>
                                    <tr>
                                        <th>Date</th>
                                        <td>{new Date(data.date).toLocaleString()}</td>
                                    </tr>
                                    <tr>
                                        {
                                            data.orderstatus !== 'Delevered' || data.paymentstatus === 'pending' ?
                                                <td colSpan={2}><button className='btn btn-primary w-100' onClick={updateRecord}>Update</button></td> :
                                                ""
                                        }
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <h5 className='bg-primary text-center p-2'>products in the order</h5>
                        <div className="table-responsive">
                            <table className='table table-bordered table-hover'>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Brand</th>
                                        <th>Color</th>
                                        <th>Size</th>
                                        <th>Price</th>
                                        <th>qty</th>
                                        <th>total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data?.products?.map((p, ind) => {
                                            return <tr key={ind}>
                                                <td>
                                                    <a href={`/img/${p.pic}`} target='_blank'>
                                                        <img src={`/img/${p.pic}`} height={50} width={50} alt="" className='rounded' />
                                                    </a>
                                                </td>
                                                <td>{p.name}</td>
                                                <td>{p.brand}</td>
                                                <td>{p.color}</td>
                                                <td>{p.size}</td>
                                                <td>&#8377;{p.price}</td>
                                                <td>{p.qty}</td>
                                                <td>&#8377;{p.total}</td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}