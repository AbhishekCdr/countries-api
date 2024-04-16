/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";

const CardDetail = ({ match }) => {
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const response = await fetch("data.json");
        const jsonData = await response.json();
        const selectedDetail = jsonData.find((data) => data.name === match);
        setDetail(selectedDetail);
      } catch (error) {
        console.error("Error fetching detail:", error);
      }
    };
    console.log(match);

    fetchDetail();
  }, [match]);

  if (!detail) {
    return <div>Loading...</div>;
  }

  return (
    <div className="font-customFont flex flex-col mt-5 mx-5 gap-7">
      <button className="flex flex-row items-center justify-center gap-2 shadow-lg w-20 h-10 rounded-md">
        <img src="public/back.svg" alt="<-" />
        Back
      </button>
      <img src={flag} alt={flag} />
      <div>
        <h1>{name}</h1>
        <ul className="text-sm flex flex-col gap-2">
          <li>Native Name: {nativeName}</li>
          <li>Population: {population}</li>
          <li>Region: {region}</li>
          <li>Sub Region: {subRegion}</li>
          <li>Capital: {capital}</li>
        </ul>
      </div>
      <div>
        <ul className="flex flex-col text-sm gap-2">
          <li>Top Level Domain: {topLevelDomain}</li>
          <li>Currencies: {currencies}</li>
          <li>Languages: {language}</li>
        </ul>
      </div>
      <div className="text-sm">
        <h1>Border Countries:</h1>
        {/* {borders.map((item) => borderDiv(item))} */}
        {borders}
      </div>
    </div>
  );
};

export default CardDetail;
