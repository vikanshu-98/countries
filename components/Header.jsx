import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

 

const Header =()=>{ 
    const [isDark,setDark] = useContext(ThemeContext)
    return(
        <>
            <header className={`header-container ${isDark?'dark':''}`}>
                <div className="header-content">
                    <h2 className="title">Where is the world?</h2>
                    <p className="theme-changer" onClick={()=>{
                        setDark(!isDark)
                        localStorage.setItem('isDark',!isDark)
                    }}>
                    <i className={`fa-solid fa-${isDark? 'sun':'moon'}`}>&nbsp;&nbsp; {isDark ? 'Light':'Dark'} Mode</i></p>
                </div>  
            </header>
          
        </>
    )
}

export default Header