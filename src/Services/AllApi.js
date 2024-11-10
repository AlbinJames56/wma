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

// Create Razorpay Order API
export const createRazorpayOrderAPI = async (amount) => {
    try {
      const response = await commonAPI("POST", `${SERVER_URL}/UserRouter/create-order`, { amount }, ""); 
       return response;
    } catch (error) {
      throw new Error(error.message);
    }
  };
  
  // Verify Razorpay Payment API
  export const verifyRazorpayPaymentAPI = async (paymentData) => {
    try {
      const response = await commonAPI("POST", `${SERVER_URL}/UserRouter/verify-payment`, paymentData, "");
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  };
// Export updateTicketCount
 export const updateTicketCountAPI = async (paymentData) => { 
  return await commonAPI("PUT", `${SERVER_URL}/UserRouter/update-ticket-count`, paymentData, ""); };


  // get BookedTciekts for admin
  export const getBookedTicketsAPI=async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/AdminRouter/get-booked-tickets`,"","")
  }

  // admin add committee
  export const addCommitteeAPi=async(committeeData)=>{
    try {
      const response = await commonAPI("POST", `${SERVER_URL}/AdminRouter/addCommittee`, committeeData);
      return response;
    } catch (error) {
      throw error;
    }
  }
  // get committee members
export const getCommitteeApi = async () => {
  return await commonAPI("GET", `${SERVER_URL}/AdminRouter/getCommittee`);
};

 // admin add  GalleryImageApi
 export const addGalleryImageAPI=async(imageURL)=>{
  try {
    const response = await commonAPI("POST",`${SERVER_URL}/AdminRouter/addImage`, imageURL);
    return response;
  } catch (error) {
    throw error;
  }
}
// delete committee member 
export const deleteCommitteeMemberAPPI = async (id) => {
  return await commonAPI("DELETE", `${SERVER_URL}/AdminRouter/delete/${id}`);
};

// get gallery images
export const getGalleryImagesApi = async () => {
  return await commonAPI("GET", `${SERVER_URL}/AdminRouter/getImages`);
};

// delete gallery images
export const deleteGalleryImageApi = async (id) => {
  return await commonAPI("DELETE", `${SERVER_URL}/AdminRouter/deleteImage/${id}`);
};

