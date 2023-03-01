import React, { useState, useEffect } from "react";
import axios from "axios";

function Register() {
    const [address, setAddress] = useState('');
  const getAddress = async (lat, lng) => {
    const API_KEY = "47793fc45be3422ab026a7e59c553c3a";
    const response = await axios.get(
      `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=${API_KEY}`
    );
    setAddress(response.data.results[0].formatted);
  };

  return (
    <>
      <button
        onClick={() => {
          navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            getAddress(latitude, longitude);
          });
        }}
      >
        Get Current Address
      </button>
      <p>{address}</p>
    </>
  );
}

export default Register;
