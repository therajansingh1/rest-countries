const Cards = (props) => {
  const { countryData } = props;
  const { name, population, region, capital,flags } = countryData;
 


  return (
    <div className="card">
      <img src={flags.svg} alt="img" />
      <div className="text">
        <h3>{name}</h3>
        <h5>
          population:<span>{population}</span>
        </h5>
        <h5>
          region: <span>{region}</span>
        </h5>
        <h5>
          capital: <span>{capital}</span>
        </h5>
      </div>
    </div>
  );
};

export default Cards;
