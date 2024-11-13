import React, { createContext, useState } from "react";
export const addEventContextResponse = createContext();
export const editEventContextResponse = createContext();
function ContextShare({ children }) {
  const [addEventResponse, setAddEventResponse] = useState("");
  const [editEventResponse, setEditEventResponse] = useState("");
  return (
    <>
      <addEventContextResponse.Provider
        value={{ addEventResponse, setAddEventResponse }}
      >
        <editEventContextResponse.Provider
          value={{ editEventResponse, setEditEventResponse }}
        >
          {children}
        </editEventContextResponse.Provider>
      </addEventContextResponse.Provider>
    </>
  );
}

export default ContextShare;
