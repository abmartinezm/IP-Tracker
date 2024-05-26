// import logo from './logo.svg';
import './App.css';
import Header from '../src/Components/Header';
import Location from '../src/Components/Location';
import Map from '../src/Components/Map';

import React, { useState, useEffect } from 'react';

function App() {
  // const [addInfo, setAddInfo]= useState('')
  const [fetchedData, setFetchedData]= useState('')
  // let ip=addInfo;

  const [loaded, setLoaded] = useState(false);
  const [query, setQuery] = useState("8.8.8.8");

  useEffect(() => {
    sendAddress();
    setLoaded(true);
  }, []);

  const writeInfo= (e)=>{
    setQuery(e.target.value);
    console.log(e.target.value,'write')
      
  }

  // 193.197.148.126

  // async function sendAddress (e){
  //   // console.log('click')
  //   console.log(addInfo,'ip')
  //   setQuery(addInfo)
  //   // let getRequest=`https://geo.ipify.org/api/v2/country?apiKey=at_GtNBEyJbiUiQWrhzOmqcDTyozDuzl&ipAddress=${ip}`

  //   let getRequest=`https://geo.ipify.org/api/v2/country,city?apiKey=at_GtNBEyJbiUiQWrhzOmqcDTyozDuzl&ipAddress=${query}`

  //    await fetch(getRequest)
  // .then(response => response.json())
  // .then(data => {
  //   setFetchedData(data)  
  //   console.log(data)
  // })
    

    async function sendAddress() {
      const response = await fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_GtNBEyJbiUiQWrhzOmqcDTyozDuzl&ipAddress=${query}`
      );
      const data = await response.json();
      console.log(data);
      setFetchedData(data);
      console.log(data.location, 'location');
    


    document.querySelector('.ip-search').value=''
  }



  return loaded ? (
    <div className="App">
      <header className="App-header">
        <Header writeInfo={writeInfo} setQuery={setQuery} sendAddress={sendAddress}  />
      </header>

      <main className="App-main">
        <Location fetchedData={fetchedData} loaded={loaded} />
      </main>

      <footer className="App-footer">
      <Map fetchedData={fetchedData} loaded={loaded} />
      </footer>
    </div>
  ) : (
    <p>Loading...</p>
    );
}

export default App;
