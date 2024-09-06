import { ADD_SUBCATEGORY, DELETE_SUBCATEGORY_, GET_SUBCATEGORY, UPDATE_SUBCATEGORY } from "../Constants";

export function addSubcategory(data){
    return{
        type:ADD_SUBCATEGORY,
        payload:data
    }
}
export function getSubcategory(){
return{
    type:GET_SUBCATEGORY,
}
}

export function updateSubcategory(data){
    return{
        type:UPDATE_SUBCATEGORY,
        payload:data
    }
    }
    export function deleteSubcategory(data){
        return{
            type:DELETE_SUBCATEGORY_,
            payload:data
        }
        }
        