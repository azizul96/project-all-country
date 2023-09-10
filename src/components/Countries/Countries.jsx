import { useEffect, useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
    const [countries, setCountries] = useState([])

    const [visitedCountries, setVisitedCountries] = useState([])

    const [visitedFlags, setVisitedFlags] = useState([])

    
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])


    const markVisitedHandler = (country) => {
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)
    }

    const visitedFlagsHandler = flag => {
        
        const newVisitedFlags = [...visitedFlags, flag]
        setVisitedFlags(newVisitedFlags)
    }

    return (
        <div className=" container mx-auto ">
            <h1 className="font-bold text-center">Countries: {countries.length}</h1>
            <div>
                <h1 className="font-bold text-center">Visited Countries: {visitedCountries.length}</h1>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
                
            </div>
            <div className="grid grid-flow-col justify-start gap-1">
                    {
                        visitedFlags.map((flag, index) => <img className=" h-8 w-12" src={flag} key={index}></img>)
                        
                    }
                </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                countries.map(country => <Country key={country.cca3} country={country} markVisitedHandler={markVisitedHandler} visitedFlagsHandler={visitedFlagsHandler}></Country>)
            }
           </div>
        </div>
    );
};

export default Countries;