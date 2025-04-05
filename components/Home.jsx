import { useContext, useState } from "react"
import SearchBar from "./Searchbar"
import SelectMenu from "./SelectMenu"
import CountriesList from "./CountriesList"
import { useOutletContext } from "react-router-dom"
import { ThemeContext } from "../contexts/ThemeContext"
import { UseTheme } from "../hooks/UseTheme"


export default function Home(){
    const [searchValue,updateSearchValue] = useState('')  
    // const isDark  = useOutletContext()
    const [isDark,setDark] =  UseTheme()
   
    
    return(
        <main className={isDark?'dark':''}>
            <div className="search-filter-container">
                <SearchBar updateSearchValue={updateSearchValue}/>
                <SelectMenu updateSearchValue={updateSearchValue}/>
            </div>
            {searchValue==='unmount' ?'' : <CountriesList searchValue = {searchValue}/>}
        </main> 
    )
}