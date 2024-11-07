import {commonAPI } from "./commonApi"
import { SERVER_URL } from "./ServerUrl"
 
// admin Login
export const adminLogin=async(user)=>{
    return await commonAPI("POST",`${SERVER_URL}/AdminRouter/adminLogin`,user,'')
}

// add event
export const addEventAPI=async(reqBody,reqHeader)=>{ 
    return await commonAPI("POST",`${SERVER_URL}/AdminRouter/addEvents`,reqBody,reqHeader)
}

// getEvents
export const getEventsAPI=async()=>{
    return  await commonAPI("GET",`${SERVER_URL}/AdminRouter/getEvents`,"","")
}

// updateEventAPI
export const updateEventAPI=async(id,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_URL}/AdminRouter/updateEvent/${id}`,reqBody,reqHeader)
}

// delete Project API
export const deleteEventAPI=async(id,reqHeader)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/AdminRouter/deleteEvent/${id}`,{},reqHeader)
}

// fetchEvents
export const fetchEventsAPI=async()=>{
    return await commonAPI("GET",`${SERVER_URL}/UserRouter/fetchEvents`,"","")
}