import React, { createContext, useState } from "react";

// Create a context
export const CoordinatesContext = createContext();

// Create a provider component
export const CoordinatesProvider = ({ children }) => {
  const [pickUpCoordinates, setPickUpCoordinates] = useState(null);
  const [dropOffCoordinates, setDropOffCoordinates] = useState(null);
const [directionData, setDirectionData] = useState(null);
  return (
    <CoordinatesContext.Provider
      value={{
        pickUpCoordinates,
        setPickUpCoordinates,
        dropOffCoordinates,
        setDropOffCoordinates,
        directionData,
        setDirectionData
      }}
    >
      {children}
    </CoordinatesContext.Provider>
  );
};
