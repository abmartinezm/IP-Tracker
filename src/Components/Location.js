import React from 'react'
import LocationStyles from "../Location.css"

function Location({fetchedData,loaded}) {

    

    
  return loaded ? (
    fetchedData.location &&  ( 
    <div className="location-container">
        <div className="location-information">
            <div className="ip-address">
                <p className="ip-title">IP ADDRESS</p>
                <p className="address-number">
                    {fetchedData.ip}
                </p>
            </div>

            <div className="location-details">
                <p className="location">LOCATION</p>
                <p className="address">{fetchedData.location.city + ', ' + fetchedData.location.region}</p>
            </div>

            <div className="timezone-details">
                <p className="timezone">TIMEZONE</p>
                <p className="timezone-format">{'UTC' + fetchedData.location.timezone}</p>
            </div>

            <div className="isp-details">
                <p className="isp">ISP</p>
                <p className="company">{fetchedData.isp}</p>

            </div>
        </div>
    </div>
    )
  )  : (
    <p>Loading...</p>
  );
}

export default Location