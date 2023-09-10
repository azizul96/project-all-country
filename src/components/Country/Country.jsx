import { useState } from "react";

const Country = ({country, markVisitedHandler, visitedFlagsHandler}) => {
    
    const {name, flags, population, area, cca3} = country

    const [visited, setVisited] = useState(false)
    const visitedHandler = ()=>{
        setVisited(!visited)
    }
    
    return (
        <div className={`border-solid border-2 border-red-600 p-5 my-5 rounded-lg bg-lime-100 ${visited? 'bg-red-100': 'bg-lime-100'}`}>
            <h1 className="mb-2 font-bold">{name.common}</h1>
            <img className="mb-5 h-56 " src={flags.png} alt="" />
            <p className="mb-1 font-medium ">Population: {population}</p>
            <p className="mb-1 font-medium">Area: {area}</p>
            <p className="mb-1">Code: {cca3}</p>
            <button onClick={visitedHandler} className="btn btn-sm btn-error text-white">{visited ? "Visited" : "Will Go"}</button>{visited  ? " I have visited this country" : " I will visit soon."}
            <hr className="my-2"/>
            <button onClick={() => markVisitedHandler(country)} className="btn btn-sm btn-error text-white mb-3">Mark Visited</button>
            <br />
            <button onClick={() => visitedFlagsHandler(country.flags.png)} className="btn btn-sm btn-error text-white">Show Flag</button>

        </div>
    );
};

export default Country;