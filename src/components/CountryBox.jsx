import { Link } from "react-router-dom"

// Composant pour afficher un aperçu d'un pays dans une boîte
const CountryBox = ({ country }) => {
  return (
    <Link to={`/country/${country.alpha3Code}`}>
      <div className='dark:bg-[#2b3945] w-[220px] lg:w-[250px] shadow-md rounded-sm bg-[#fefae0]'>
        {/* Section pour afficher le drapeau du pays */}
        <div className='w-full lg:h-[150px] overflow-hidden object-contain'>
          <img src={country.flags?.png || country.flags?.svg} alt="img" className='h-[150px] w-full object-cover' />
        </div>
        {/* Section pour afficher les informations du pays */}
        <div className='p-3 px-6 my-2 mb-4 lg:mb-6'>
          <h2 className='font-medium mb-6'>{country.name}</h2>
          <div className='text-[14px]'>
            <p>Population: <span className='text-[#757474]'>{country.population}</span></p>
            <p>Région: <span className='text-[#757474]'>{country.region}</span></p>
            <p>Capitale: <span className='text-[#757474]'>{country.capital}</span></p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default CountryBox