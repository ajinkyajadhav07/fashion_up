import React, { useState } from 'react';

function App() {
  const [address, setAddress] = useState('');

  const handleClick = async () => {
    if ('geolocation' in navigator) {
        // Get user's current location
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const currentLocation = position.coords;
                // Make a request to the Geoapify Geocoding API
                const response = await fetch(
                    `GET https://us1.locationiq.com/v1/reverse?key=pk.6c15aeea588df194518187537d7a12a1&lat=${currentLocation.latitude}&lon=${currentLocation.longitude}&format=json`
                );
                if(response.ok){
                  const data = await response.json();
                  if(data.features && data.features[0]){
                    setAddress(data.features[0].properties.address);
                  }else{
                    setAddress("No address found");
                  }
                }else{
                  setAddress("Error Occured while fetching the data");
                }
            },
            error => {
                console.error(error);
                setAddress('Unable to retrieve your location.');
            }
        );
    } else {
        setAddress('Geolocation is not supported by your browser.');
    }
};


  return (
    <div>
      <button onClick={handleClick}>Get Current Address</button>
      <p>{address}</p>
    </div>
  );
}

export default App;
