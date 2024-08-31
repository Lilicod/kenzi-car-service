import React from "react";
import { Marker } from "react-map-gl";
import { FaLocationDot } from "react-icons/fa6";
import { CoordinatesContext } from "@/context/CoordinatesContext";
import { useContext } from "react";
import { GrLocationPin } from "react-icons/gr";

export default function Markers() {

  const {
    pickUpCoordinates,
    setPickUpCoordinates,
    dropOffCoordinates,
    setDropOffCoordinates,
  } = useContext(CoordinatesContext);
  return (
    <>
      {/* <Marker longitude={-122.4} latitude={37.8} anchor="bottom">
        <FaLocationDot className="text-red-500 h-10 w-10" />
      </Marker> */}

      {/* pickUp coordinates */}

      {pickUpCoordinates && (
        <Marker
          longitude={pickUpCoordinates.lng}
          latitude={pickUpCoordinates.lat}
          anchor="bottom"
        >
          <FaLocationDot className="text-red-500 h-10 w-10" />
        </Marker>
      )}

      {/* dropOff coordinates */}

      {dropOffCoordinates && (
        <Marker
          longitude={dropOffCoordinates.lng}
          latitude={dropOffCoordinates.lat}
          anchor="bottom"
        >
          <FaLocationDot className="text-red-500 h-10 w-10" />
        </Marker>
      )}
    </>
  );
}
