import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Body from "./component/Body";
import Cards from "./component/Cards";
import Header from "./component/Header";
import CountryDetails from "./component/CountryDetails"


const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element= {<Body />} />
          <Route path="/details/:countryId" element={<CountryDetails />}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
