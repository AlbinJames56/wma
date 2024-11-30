import React, { createContext, useState } from "react";
export const addEventContextResponse = createContext();
export const editEventContextResponse = createContext();
export const addGalleryContextResponse=createContext()
function ContextShare({ children }) {
  const [addEventResponse, setAddEventResponse] = useState("");
  const [editEventResponse, setEditEventResponse] = useState("");
  const [addGalleryResponse,setAddGalleryResponse]=useState("")
  return (
    <>
      <addEventContextResponse.Provider
        value={{ addEventResponse, setAddEventResponse }}
      >
        <editEventContextResponse.Provider
          value={{ editEventResponse, setEditEventResponse }}
        >
          <addGalleryContextResponse.Provider value={{addGalleryResponse,setAddGalleryResponse}}>
             {children}
          </addGalleryContextResponse.Provider>
         
        </editEventContextResponse.Provider>
      </addEventContextResponse.Provider>
    </>
  );
}

export default ContextShare;
