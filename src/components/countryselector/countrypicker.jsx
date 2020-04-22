import React, { useState, useEffect } from "react";

import { Card, NativeSelect } from "@material-ui/core";
import "./pickerStyle.css";
import { fetchCountries } from "../../api";

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchData, setfetchData] = useState([]);
  useEffect(() => {
    const countries = async () => {
      setfetchData(await fetchCountries());
    };
    countries();
  }, [setfetchData]);

  return (
    <Card className="card">
      <center>
        <NativeSelect
          className="select"
          defaultValue=""
          onChange={(e) => handleCountryChange(e.target.value)}
        >
          <option value="global">Global</option>
          {fetchData.map((country, key) => (
            <option value={country} key={key}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </center>
    </Card>
  );
};

export default CountryPicker;
