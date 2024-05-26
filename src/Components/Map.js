import React from 'react';
import MapDesign from "../Map.css"
// import React, { useState} from 'react';
// import MarkerLeaf from './MarkerLeaf'


  import { MapContainer, TileLayer, Marker,Popup, useMap } from 'react-leaflet';
//   import MarkerLayer from 'react-leaflet-marker-layer';
import L from 'leaflet';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

function Map({fetchedData,loaded,props}) {


  // const [position, setPosition] = useState(null)



    // const position = [51.505, -0.09];

  //   return  ( 
  //   <div className="map-container">
  //    <MapContainer className="full-height-map" 
  //    center={{ lat: 51.505, lng: -0.09 }}
  //    zoom={13}
  //    scrollWheelZoom={false}
  //   //  maxBounds={[[-85.06, -180], [85.06, 180]]}
  //    >
  // <TileLayer
    // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  // />
  
 
  // <MarkerLeaf position={position}/>
  //     {/* <Popup>You are here</Popup> */}
  //   {/* </Marker> */}
  //   </MapContainer>
  //   </div>
  // );
  // locationfound(e) {
  //   setPosition(e.latlng)
    // map.flyTo(e.latlng, map.getZoom())
    
    function ChangeMapView({ coords }) {
      const map = useMap();
      map.setView(coords, map.getZoom());
    
      return null;
    }
 
  
  // fetchedData.location && 
  return loaded ? (

    fetchedData.location &&  ( 
      <div className="map-container">
    <MapContainer
    className="full-height-map"
    center={[fetchedData.location.lat, fetchedData.location.lng]}
    
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[fetchedData.location.lat, fetchedData.location.lng]}>
        <Popup>Your IP Location</Popup>
      </Marker>
      <ChangeMapView coords={[fetchedData.location.lat, fetchedData.location.lng]} />
    </MapContainer>
    </div> )
    
  ) 
  : (
    <p>Loading...</p>
  );
}

export default Map
