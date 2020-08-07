import React, { useState, useEffect } from "react";
import axios from "axios";

function CountriesList() {
  const [countriesData, setCountriesData] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/mledoze/countries/master/countries.json"
    )
      .then((response) => response.json())
      .then((countriesData) => setCountriesData(countriesData));
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div
          className="col-5"
          style={{ maxHeight: 90 + "vh", overflow: "scroll" }}
        >
          <div className="list-group">
            {countriesData.map((el) => (
              <a className="list-group-item list-group-item-action">
                {el.name.official}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountriesList;
