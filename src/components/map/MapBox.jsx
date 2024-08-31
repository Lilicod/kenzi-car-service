import React from "react";
import Map from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Markers from "./Markers";
import { useRef } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { CoordinatesContext } from "@/context/CoordinatesContext";
import MapRoute from "./MapRoute";
import DistanceTime from "./DistanceTime";

export default function MapBox() {
  const MAPBOX_DRIVING_ENDPOINT =
    "https://api.mapbox.com/directions/v5/mapbox/driving/";
  const session_token = "eae00e7c-19e9-4ff5-a293-ac44b6e40cd1";
  const {
    pickUpCoordinates,
    dropOffCoordinates,
    directionData,
    setDirectionData,
  } = useContext(CoordinatesContext);

  const mapRef = useRef();
  useEffect(() => {
    if (pickUpCoordinates) {
      mapRef.current.flyTo({
        center: [pickUpCoordinates.lng, pickUpCoordinates.lat],

        duration: 2500,
      });
    }
  }, [pickUpCoordinates]);

  useEffect(() => {
    if (dropOffCoordinates) {
      mapRef.current.flyTo({
        center: [dropOffCoordinates.lng, dropOffCoordinates.lat],

        duration: 2500,
      });
    }

    if (pickUpCoordinates && dropOffCoordinates) {
      getDirectionRoute();
    }
  }, [dropOffCoordinates]);

  const getDirectionRoute = async () => {
    const response = await fetch(
      `${MAPBOX_DRIVING_ENDPOINT}${pickUpCoordinates.lng},${pickUpCoordinates.lat};${dropOffCoordinates.lng},${dropOffCoordinates.lat}?overview=full&geometries=geojson&access_token=${process.env.NEXT_PUBLIC_MAPBOX}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    setDirectionData(data);
  };

  return (
    <div>
      <Map
        ref={mapRef}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX}
        initialViewState={{
          longitude: -122.4,
          latitude: 37.8,
          zoom: 14,
        }}
        style={{ width: 600, height: 400, borderRadius: 10 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <Markers />

        {directionData && (
          <MapRoute
            coordinates={directionData?.routes[0]?.geometry?.coordinates}
          />
        )}
      </Map>
      <div className="absolute  z-20 hidden md:block">
        <DistanceTime />
      </div>
    </div>
  );
}
