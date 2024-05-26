import React from 'react'
import IconSend from '../images/icon-arrow.svg'
import headerStyles from "../header-styles.css"

function Header({writeInfo, sendAddress}) {
  return (
    <div className="header-container">
        <div className="header-title">
            <h1 className="ip-tracker"> 
                IP Address Tracker 
            </h1>
        </div>

            <div className="ip-input">
                <div className="ip-div">
                <input className="ip-search" type="text" name="" id="" onChange={writeInfo} placeholder='Search for any IP address or domain' />
                <button className="send-ip" onClick={sendAddress} type="submit"> <img className="arrow-icon" src={IconSend} alt="" /> </button>
                </div>
            </div>
        

    </div>
  )
}

export default Header