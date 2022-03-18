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
  console.log(countries[0]);
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
        <Country
          name={country.name.common}
          population={country.population}></Country>
      ))}
    </div>
  );
}

function Country(props) {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <h2>Population: {props.population}</h2>
    </div>
  );
}
export default App;
