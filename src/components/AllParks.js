import React, {useState, useEffect } from 'react';
import ParksList from './ParksList';
function AllParks() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [allParks, setAllParks] = useState([]);
  // const [selectedParkId, setSelectedParkId] = useState();
 
  

  useEffect(() => {
   
    fetch(`https://localhost:5001/api/v1/Parks/All`)
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
  
   let currentlyVisibleState = null;
  //  let buttonText = null; 
  if(error) {
    currentlyVisibleState = <h1>Error: {error}</h1>;
  } else if(!isLoaded) {
    currentlyVisibleState = <h1>...Loading...</h1>;
  } else { 
    currentlyVisibleState = <ParksList parkList={allParks} />
    return (
      <React.Fragment>
        {currentlyVisibleState}
    
      </React.Fragment>
    );
  }
}

export default AllParks;