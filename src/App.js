/** @format */
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <LoadCountries></LoadCountries>
    </div>
  );
}

function LoadCountries() {
  const [countries, setCountries] = useState([]);
  // console.log(countries);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div>
      <h1>Countries</h1>
      <h3>Available Countries: {countries.length}</h3>
      {countries.map((country) => (
        <p>Country: {country.name.common}</p>
      ))}
    </div>
  );
}
export default App;
