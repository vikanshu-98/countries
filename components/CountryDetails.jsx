import { useEffect, useState } from 'react'
import './CountryDetails.css'
import { useParams,Link, useLocation } from 'react-router-dom' 

export default function CountryDetails(){
    // const countryName  = new URLSearchParams(location.search).get('name')
    const param                           = useParams() 
    const [countryData,setCountryData]    = useState(null)
    const [notFound,setNotFound ]         = useState(false)
    const {state} = useLocation() 
    console.log(state);
    
    
    function updateDataOfCountriesDetails(data){
        setCountryData({
            name:data.name.common,
            region:data.region, 
            population:data.population, 
            subregion: data.subregion, 
            language:Object.values(data.languages).join(', '),
            language:Object.values(data.languages).join(', '),
            flag:data.flags.svg,
            currency:Object.values(data.currencies).map((currency)=>currency.name).join(', '),
            capital:data.capital,
            nativeName:Object.values(data.name.nativeName)[0].common,
            tld: data.tld,
            borders:[]
        })


        if(!data.borders){
            data.borders=[]
        }
        Promise.all(data.borders.map((b)=>{
            return fetch(`https://restcountries.com/v3.1/alpha/${b}`)
            .then((res)=>res.json())
            .then(([borderCountry])=> borderCountry.name.common)
        })).then((borders)=>{
            setCountryData((prevState)=>({...prevState,borders}))
        })
    }
    useEffect(()=>{
        if(state){
            updateDataOfCountriesDetails(state)
            return;
        }

        fetch(`https://restcountries.com/v3.1/name/${param.country}?fullText=true`)
        .then((res)=>res.json())
        .then(([data])=>{ 
            updateDataOfCountriesDetails(data)
        }).catch((err)=>{
            setNotFound(true)
        })


    },[param.country])

    if(notFound) return <h1>Country not found</h1>

    return countryData===null ? ('loading....') :(
        <main>
            <div className="country-detail-container">
                <div>
                    <button onClick={()=>history.back()} className='back-button'><i className="fa fa-arrow-left" aria-hidden="true"></i> &nbsp; Back</button>
                </div>

                <div className="items-details-row">
                    <img src={countryData.flag} alt="" />
                    <div className="detail-text-container">
                        <h1>{countryData?.name}</h1>
                        <div className="detailed-text">
                            <p>
                                <b>Native Name: {countryData.nativeName}</b>
                                <span className='native-name'></span>
                            </p>
                            <p>
                                <b>Population: {countryData.population.toLocaleString('en-IN')}</b>
                                <span className='Population'></span>
                            </p>
                            <p>
                                <b>Region: {countryData.region}</b>
                                <span className='Region'></span>
                            </p>
                            <p>
                                <b>Sub Region: {countryData.subregion}</b>
                                <span className='sub-region'></span>
                            </p>
                            <p>
                                <b>Capital: {countryData.capital}</b>
                                <span className='capital'></span>
                            </p>
                            <p>
                                <b>Top Level Domain: {countryData.tld}</b>
                                <span className='tld'></span>
                            </p>
                            <p>
                                <b>Currencies: {countryData.currency}</b>
                                <span className='currencies'></span>
                            </p>
                            <p>
                                <b>Languages: {countryData.language}</b>
                                <span className='languages'></span>
                            </p> 
                        </div>
                       { countryData.borders.length!==0 && <div className='border-countries'>
                            <b>Border Countries : </b> &nbsp;
                            {countryData.borders.map((b)=><Link key={b} to={`/${b}`}>{b}</Link>)}
                        </div>}
                    </div>
                </div>
            </div>
            
        </main>
    )
}