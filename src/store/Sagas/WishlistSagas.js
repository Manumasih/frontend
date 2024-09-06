import{takeEvery,put}from "redux-saga/effects"
import { addRecord, deleteRecord, getRecord, updateRecord } from "./Services/WishlistServices"
import { ADD_WISHLIST, ADD_WISHLIST_RED, DELETE_WISHLIST_, DELETE_WISHLIST_RED, GET_WISHLIST, GET_WISHLIST_RED,} from "../Constants"
function* addSaga(action){
    let response = yield addRecord(action.payload)
    yield put({type:ADD_WISHLIST_RED, payload:response})
}
function* getSaga(){
    let response = yield getRecord()
    yield put({type:GET_WISHLIST_RED, payload:response})
}
function* deleteSaga(action){
    yield deleteRecord(action.payload)
    yield put({type:DELETE_WISHLIST_RED, payload:action.payload})
}



export default function* wishlistSaga(){
yield takeEvery(ADD_WISHLIST,addSaga)
yield takeEvery(GET_WISHLIST,getSaga)
yield takeEvery(DELETE_WISHLIST_,deleteSaga)

}