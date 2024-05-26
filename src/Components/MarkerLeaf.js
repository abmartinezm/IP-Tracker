// import React from "react";
import { Marker, useMap,Popup,useMapEvents } from "react-leaflet";
import React, {  useEffect } from 'react';

export default function MarkerLeaf(props,setPosition,position) {
  // const map = useMap();

  const map = useMapEvents({
    click() {
      map.locate()
    },
    locationfound(e) {
      setPosition(e.latlng)
      map.flyTo(e.latlng, map.getZoom())
    },
  })

  return position === null ? null : (
    <div>
      <Marker
        // icon={props.icon}
        position={position}
        // eventHandlers={{
        //   click: (e) => {
        //     map.flyTo(e.latlng, 14);
        //   },
        // }}
        
      >
        <Popup>You are here</Popup>
      </Marker>
    </div>
  );
}