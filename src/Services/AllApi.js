import {commonAPI } from "./commonApi"
import { SERVER_URL } from "./ServerUrl"
 
// add event
export const addEventAPI=async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${SERVER_URL}/addEvents`,reqBody,reqHeader)
}