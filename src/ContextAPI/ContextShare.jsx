import React, { createContext, useState } from "react";
export const deleteEventContextResponse = createContext();
function ContextShare({ children }) {
  const [deleteEventResponse, setDeleteEventResponse] = useState
  ("");
  return (
    <>
      <deleteEventContextResponse.Provider
        value={{ deleteEventResponse, setDeleteEventResponse }}
      >
        {children}
      </deleteEventContextResponse.Provider>
    </>
  );
}

export default ContextShare;
