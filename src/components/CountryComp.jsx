import { Link } from "react-router-dom";

// Composant pour afficher les informations d'un pays
const CountryComp = ({ country, AllCountries }) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 w-full my-8">
      {/* Section pour afficher le drapeau du pays */}
      <div className="lg:w-[85%] flex items-center lg:items-stretch w-full">
        <img
          src={country.flag}
          alt=""
          className="sm:w-[500px] lg:w-[580px] w-full"
        />
      </div>
      <div className="flex items-center justify-between w-full">
        <div className="w-full">
          {/* Nom du pays */}
          <h1 className="text-3xl font-bold my-8">{country.name}</h1>
          <div className="text-sm flex gap-12 lg:gap-28 mb-12 justify-between md:flex-row flex-col lg:w-[75%]">
            <div className="flex flex-col gap-2">
              {/* Informations sur le pays */}
              <p>
                <span className="font-semibold text-gray-900 dark:text-white">
                  Nom natif:
                </span>{" "}
                {country.nativeName}
              </p>
              <p>
                <span className="font-semibold text-gray-900 dark:text-white">
                  Population:
                </span>{" "}
                {country.population}
              </p>
              <p>
                <span className="font-semibold text-gray-900 dark:text-white">
                  Région:
                </span>{" "}
                {country.region}
              </p>
              <p>
                <span className="font-semibold text-gray-900 dark:text-white">
                  Sous-région:
                </span>{" "}
                {country.subregion}
              </p>
              <p>
                <span className="font-semibold text-gray-900 dark:text-white">
                  Capitale:
                </span>{" "}
                {country.capital}
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <p>
                <span className="font-semibold text-gray-900 dark:text-white">
                  Domaine de premier niveau:
                </span>{" "}
                {country.topLevelDomain}
              </p>

              <p>
                <span className="font-semibold text-gray-900 dark:text-white">
                  Monnaies:
                </span>{" "}
                {country.currencies.map((item, index) => (
                  <span key={item.name}>
                    {item.name}
                    {country.currencies.length - 1 !== index && ","}
                  </span>
                ))}
              </p>

              <p>
                <span className="font-semibold text-gray-900 dark:text-white">
                  Langues:
                </span>{" "}
                {country.languages.map((item, index) => (
                  <span key={item.name}>
                    {item.name}
                    {country.languages.length - 1 !== index && ","}{" "}
                  </span>
                ))}
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 w-full">
            <h3 className="font-bold text-gray-900 dark:text-white md:w-[200px] mt-1">
              Pays frontaliers:
            </h3>
            <div className="flex gap-4 flex-wrap w-full">
              {/* Liste des pays frontaliers */}
              {country.borders?.map((item) => (
                <span key={item}>
                  <Link
                    className="border px-4 py-1 rounded-sm bg-gray-50 shadow-md dark:bg-[#2b3945] dark:border-none inline-block"
                    key={item}
                    to={`/country/${item}`}
                  >
                    {
                      AllCountries.find(
                        (country) => country.alpha3Code === item
                      ).name
                    }
                  </Link>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryComp;