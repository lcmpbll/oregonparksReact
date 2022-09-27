import React, {useState, useEffect } from 'react';

function AllParks() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [allParks, setAllParks] = useState([]);
  // const [selectedParkId, setSelectedParkId] = useState();
  function setUrl(selectedParkId){
    // if(selectedParkId === undefined) {
      
      let url = `http://localhost:5000/api/v1/Parks/5`
      return url;
   
    // } 
    // else {
    //   let url = `https://localhost:5001/api/v1/Parks/All`
    //   return url;
    // }
  }
  setUrl(3);
  useEffect((selectedParkId) => {
    const url = setUrl(selectedParkId);
    fetch(url)
        .then(response => {
          console.log(response);
          if(!response.ok) {
            throw new Error(`${response.status}: ${response.statusText}`);
          } else {
            return response.json()
          }
        })
        .then((jsonifiedResponse) => {
          setAllParks(jsonifiedResponse)
          setIsLoaded(true)
        })
        .catch((error) => {
          setError(error.message)
          setIsLoaded(true)
        });
    }, []) 
  

  if(error) {
    return<h1>Error: {error}</h1>
  } else if(!isLoaded) {
    return <h1>...Loading...</h1>
  } else {
    return (
      <React.Fragment>
        <h1>All Parks</h1>
        <ul>
          {/* {allParks.map((park) =>
          <li key={park.parkId}> */}
            <h1>{allParks.name}</h1>
            <hr/>
          {/* </li>
          )} */}
        </ul>
      </React.Fragment>
    );
  }
}

export default AllParks;