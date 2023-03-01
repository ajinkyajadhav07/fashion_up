import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';


function AddressButton() {
  const [address, setAddress] = useState('');

  const handleClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Use the latitude and longitude to get the address
          fetch(`'https://opencage-geocoder.p.rapidapi.com/geocode/v1/json' c624108753msh01b9755c6e41bd8p1b3be7jsnb53119b458a2
          `)
            .then((response) => response.json())
            .then((data) => {
              // Extract the address from the response
              const address = data.results[0].formatted_address;
              setAddress(address);
            })
            .catch((error) => {
              console.error(error);
            });
        },
        (error) => {
          console.error(error);
        },
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Get Address</button>
      <p>{address}</p>
    </div>
  );
}

export default AddressButton;
