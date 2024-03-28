import { useState, useEffect } from "react";
import data from "../assets/data.json"
import Cards from "./Cards";
import { Link } from "react-router-dom";

const Body = () => {
  const [jsonData, setJsonData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [region, setRegion] = useState([]);
  const [searchText, setSearchText] = useState(" ");

  useEffect(() => {
    setJsonData(data);
    setFilterData(data);
  }, []);

  useEffect(() => {
    const uniqueRegion = jsonData.map((value) => value.region);
    const region = [...new Set(uniqueRegion)];
    setRegion(region);
  }, [jsonData]);

  const handleRegionFilter = (selectedRegion) => {
    if (selectedRegion === "All") {
      setFilterData(jsonData);
    } else {
      const filterCountry = jsonData.filter(
        (country) =>
          country.region.toLowerCase() === selectedRegion.toLowerCase()
      );
      setFilterData(filterCountry);
    }
  };

  return (
    <div className="container">
      <div className="inner-container">
        <div className="first">
          <div className="input">
            <input
              type="text"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
              placeholder="Search for a country..."
            />
            <button
              className="btn"
              onClick={() => {
                const filterCountry = jsonData.filter((text) =>
                  text.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilterData(filterCountry);
              }}
            >
              search
            </button>
          </div>
          <div className="filter">
            <select onChange={(e) => handleRegionFilter(e.target.value)}>
              <option value="All">filter by region</option>
              {region.map((value, index) => (
                <option key={index} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="second">
          {filterData.map((value,index) => (
            <Link key={index} to={"/details/" +value.numericCode}>
              
              <Cards countryData={value}  />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
