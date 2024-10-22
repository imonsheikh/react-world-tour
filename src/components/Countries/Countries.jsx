import { useState, useEffect } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountry = (country) => {
    console.log("add this to your visited country");
    console.log(country);
    // visitedCountries.push(country)
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  //Adding
  const handleVisitedFlags = flag =>{
       console.log('flag added');
       const newVisitedFlags = [...visitedFlags, flag]
       setVisitedFlags(newVisitedFlags)
       
  }
  //Removing item from an array in a state
  //use filter to select all the elements except the one you want to remove


  return (
    <div>
      <h3>Countries: {countries.length}</h3>
      
      {/* visited countries  */}
      <div>
        <h5>Visited Countries: {visitedCountries.length}</h5>
        <ul>
          {visitedCountries.map((country) => (
            <li key={country.cca3}>{country.name.common}</li>
          ))}
        </ul>
      </div>

      {/* visited flags  */}
      <div className="flag-container">
        {
          visitedFlags.map((flag,idx) => <img 
          key={idx}
          src={flag}></img>)
        }
      </div>

      {/* display countries  */}
      <div className="country-container">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags={handleVisitedFlags}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
