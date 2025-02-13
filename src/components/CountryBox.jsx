import { Link } from "react-router-dom"

const CountryBox = ({country}) => {

  return (
    <Link to={`/country/${country.alpha3Code}`}>
      <div className='dark:bg-[#2b3945] w-[220px] lg:w-[250px] shadow-md rounded-sm bg-[#e9edc9] rounded-b-lg'>
          <div className='w-full lg:h-[150px] overflow-hidden object-contain'>
              <img src={country.flag} alt="img" className='h-[150px] w-full object-cover'/>
          </div>
          <div className=' p-3 px-6 my-2 mb-4 lg:mb-6'>
              <h2 className='font-medium mb-6'>{country.name}</h2>
              <div className='text-[14px]'>
                  <p>Population: <span className='text-[#757474]'>{country.population}</span></p>
                  <p>Region: <span className='text-[#757474]'>{country.region}</span></p>
                  <p>Capital: <span className='text-[#757474]'>{country.capital}</span></p>
              </div>
          </div>
      </div>
    </Link>
  )
}

export default CountryBox