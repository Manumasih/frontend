import { ADD_TESTIMONIAL, DELETE_TESTIMONIAL_, GET_TESTIMONIAL, UPDATE_TESTIMONIAL } from "../Constants";

export function addTestimonial(data){
    return{
        type:ADD_TESTIMONIAL,
        payload:data
    }
}
export function getTestimonial(){
return{
    type:GET_TESTIMONIAL,
}
}

export function updateTestimonial(data){
    return{
        type:UPDATE_TESTIMONIAL,
        payload:data
    }
    }
    export function deleteTestimonial(data){
        return{
            type:DELETE_TESTIMONIAL_,
            payload:data
        }
        }
        