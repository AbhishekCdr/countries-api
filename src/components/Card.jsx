import { Link } from "react-router-dom";

const Card = ({ name, population, region, capital, flagimage }) => {
  return (
    <Link to={`/card/${name}`} className="hover:scale-105">
      <div className="flex flex-col font-customFontitems-center rounded-xl overflow-hidden shadow-lg">
        <img src={flagimage} alt="flag" className="flex-1 shadow-md" />
        <div className="flex-1 p-7">
          <h1>{name}</h1>
          <ul>
            <li>Population: {population}</li>
            <li>Region: {region}</li>
            <li>Capital: {capital}</li>
          </ul>
        </div>
      </div>
    </Link>
  );
};

export default Card;
