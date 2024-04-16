import { useState, useEffect } from "react";
import Card from "./Card";

const Grid = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("data.json");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const filteredData = data
    .filter((item) => {
      if (filter === "all") {
        return true; // Show all items if no filter applied
      } else {
        return item.region === filter; // Apply filter based on category
      }
    })
    .filter((item) => {
      return item.name.toLowerCase().includes(search.toLowerCase()); // Filter by search term
    });

  return (
    <div className="flex flex-col gap-10 mx-5">
      <div className=" justify-around flex flex-col gap-10 md:flex-row md:items-center mt-5 md:justify-between text-sm">
        <div className="h-12  items-center flex shadow-md gap-2 p-4 rounded-xl md:w-2/5">
          <img src="/search.svg" alt="search" />
          <input
            type="text"
            placeholder="Search for a country"
            className="h-full w-full focus:outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="w-1/2 h-10 font-customFont flex shadow-md rounded-lg p-2 md:w-1/5">
          <select
            name="Filter by Region"
            id="Filter"
            className="h-full w-full focus:outline-none"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="" defaultValue hidden>
              Filter by Region
            </option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {filteredData.map((item) => (
          <Card
            key={item.name}
            name={item.name}
            population={item.population}
            region={item.region}
            capital={item.capital}
            flagimage={item.flags.svg}
          />
        ))}
      </div>
    </div>
  );
};

export default Grid;
