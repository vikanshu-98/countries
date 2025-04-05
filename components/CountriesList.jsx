import { useEffect, useState } from "react"
import countries from "../countriesData"
import CountryCard from "./CountryCard"
import CountriesListShimmer from "./CoutriesListShimmer"


export default function  CountriesList({searchValue}){ 
    const [countriesData,setCountriesData] = useState([])
    const[isShowError,setShowError] = useState(false)
    console.log(countriesData);
    
    useEffect(()=>{ 
        setCountriesData(countries)
        return
        fetch('https://restcountries.com/v3.1/all')
        .then((res)=>res.json())
        .then((data)=>{
            setCountriesData(data)
        }).catch((err)=>{
            setShowError(true)
        })


        // return ()=>{
        //console.log('unmount the component')
        // } //cleanup function is works on useeffect hook
    },[])
    const array = countriesData.filter((country)=>country.name.common.toLowerCase().includes(searchValue)|| country.region.toLowerCase().includes(searchValue)).map((country,i)=> {
        return <CountryCard 
        key={i}
        name={country.name.common}
        flag={country.flags.svg}
        population={country.population.toLocaleString('en-IN')}
        region={country.region} 
        capital={country.capital?.[0]} 
        data={country}
        />

        })

    return(
        <>
        {
            !isShowError && (countriesData.length===0)? (<CountriesListShimmer/>):
           ( <div className="countries-container">
            {array}
            </div>)
        }
        </>
    )
}