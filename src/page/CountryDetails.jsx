import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { AllCountries } from "../data/data";
import { Link } from "react-router-dom";
import CountryComp from "../components/CountryComp";
import { Commet } from "react-loading-indicators";

const CountryDetails = () => {
  const { id } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setCountry(AllCountries.find((country) => country.alpha3Code === id));
    setLoading(false);
  }, [id]);
  return (
    <div className="dark:bg-[#202c37] h-full pb-6">
      <div className="max-w-[1440px] w-11/12 mx-auto pt-10 min-h-screen">
        <div className="mb-6 border inline-block py-1 shadow-md bg-gray-50 dark:bg-[#2b3945] dark:border-none cursor-pointer">
          <Link className="text-sm font-medium px-4 rounded-sm" to={"/"}>
            <span>&larr; Back</span>
          </Link>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-[80vh]">
            <Commet color="#32cd32" size="medium" text="" textColor="" />
          </div>
          )
         : (
          country && <CountryComp country={country} AllCountries={AllCountries}/>
          )}
      </div>
    </div>
  );
};

export default CountryDetails;
