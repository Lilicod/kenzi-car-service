import React from "react";
import { Layer, Source } from "react-map-gl";

export default function MapRoute(props) {
  return (
    <Source
      type="geojson"
      data={{
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: props.coordinates,
        },
      }}
    >
      <Layer
        type="line"
        layout={{ "line-join": "round", "line-cap": "square" }}
        paint={{ "line-color": "#007AFC", "line-width": 6 }}
      />
    </Source>
  );
}
