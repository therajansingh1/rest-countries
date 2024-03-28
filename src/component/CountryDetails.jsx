import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

const CountryDetails = () => {
  const [details, setDetails] = useState({});
  const { countryId } = useParams();

  useEffect(() => {
    fetchDetails();
  }, []);


  const fetchDetails = async () => {
    const api = await fetch(
      "https://restcountries.com/v3.1/alpha/" + countryId
    );
    const data = await api.json();
    setDetails(data?.[0]);
  };
  return (
    <div className="details">
      
        <Link to="/" className="btn">
          {" "}
          <FaArrowLeftLong /> back
        </Link>

      <div className="country-details">
        <div className="img">
          <img src={details.flags?.svg} alt="image" />
        </div>
        <div className="about" >
          <h3>{details.name?.common}</h3>
          <div className="other-det">
            <div className="details-one">
              <h5>
                population :<span>{details.population}</span>
              </h5>
              <h5>
                region:<span>{details.region}</span>
              </h5>
              <h5>
                sub-region :<span>{details.subregion}</span>
              </h5>
              <h5>
                capital :<span>{details.capital}</span>
              </h5>
            </div>
            <div className="details-one">
              <h5>
                top level domain :<span>{details.tld}</span>
              </h5>
              <h5>
                languages :
                <span>{Object.values(details.languages || {}).join(", ")}</span>
              </h5>
              <h5>
                Currency:{" "}
                <span>
                  {Object.entries(details.currencies || {}).map(
                    (value) => value[1].name
                  )}
                </span>{" "}
              </h5>
            </div>
          </div>
          <h5 className="border">
            border countries:{" "}
            {details.borders?.map((border) => (
              <span key={border}>{border}</span>
            ))}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
