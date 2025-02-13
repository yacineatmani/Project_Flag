import { useEffect, useState } from "react";
import { AllCountries } from "../data/data";
import CountryBox from "../components/CountryBox";
import SearchIcon from "../components/icons/SearchIcon";
import "../App.css"


const Main = () => {
  const [term, setTerm] = useState("");
  const [continent, setContinent] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [countries, setCountries] = useState(AllCountries);

  const itemsPerPage = 8;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCountries = countries.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    const searchCountry = (term, continent) => {
      let filteredCountries = AllCountries;

      if (term) {
        filteredCountries = filteredCountries.filter((country) =>
          country.name.toLowerCase().includes(term.toLowerCase())
        );
      }

      if (continent) {
        filteredCountries = filteredCountries.filter(
          (country) => country.region === continent
        );
      }

      setCountries(filteredCountries);
    };

    searchCountry(term, continent);
  }, [term, continent]);

  return (
    <main className=" font dark:bg-[url(/public/carte-sombre.jpg)] bg-center h-[100%] w-screen">
      <div className="max-w-[1440px] mx-auto w-11/12 pb-12">
        <div className="flex md:items-center flex-col md:flex-row justify-between gap-10 py-10">
          <div className="dark:bg-[#2b3945] rounded text-[14px] px-6 py-1 lg:w-[30%] text-[#858585] dark:text-white    shadow-slate-300 dark:shadow-slate-800 flex items-center bg-[#fefae0] ">
            <label className="m-5" htmlFor="search">
              <SearchIcon />
            </label>
            <input
              type="text"
              id="search"
              value={term}
              placeholder="Search for a country..."
              className="p-2 rounded text-[14px] w-full dark:bg-[#2b3945] focus:outline-none bg-[#fefae0]"
              onChange={(e) => {
                setTerm(e.target.value)
              }}
              
            />
          </div>

          <select
            name="Filter"
            className="p-3 lg:pr-12 shadow-md rounded dark:bg-[#2b3945] text-[14px] focus:outline-none w-[50%] md:w-auto bg-[#fefae0]"
            onChange={(e) => {
              setContinent(e.target.value);
            }}
          >
            <option selected disabled hidden>
              Filter by Region
            </option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 items-center justify-center gap-4 gap-y-12">
          {currentCountries.map((country) => (
            <CountryBox key={country.name} country={country}></CountryBox>
          ))}
        </div>

        <div className="flex gap-4 mt-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-[#ccd5ae] text-white rounded disabled:bg-gray-400"
          >
            Previous
          </button>
          <button
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={indexOfLastItem >= countries.length}
            className="px-4 py-2 bg-[#d4a373] text-white rounded disabled:bg-gray-400"
          >
            Next
          </button>
        </div>
      </div>
    </main>
  );
};

export default Main;
