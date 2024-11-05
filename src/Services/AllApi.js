import {commonAPI } from "./commonApi"
import { SERVER_URL } from "./ServerUrl"
 
// admin Login
export const adminLogin=async(user)=>{
    return await commonAPI("POST",`${SERVER_URL}/AdminRouter/adminLogin`,user,'')
}

// add event
export const addEventAPI=async(reqBody,reqHeader)=>{
    console.log("insiea");
    
    return await commonAPI("POST",`${SERVER_URL}/addEvents`,reqBody,reqHeader)
}