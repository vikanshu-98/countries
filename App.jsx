import Header from "./components/Header";
import './App.css' 
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { ThemeContext, ThemeProvider } from "./contexts/ThemeContext";
const App =()=>{
    const [isDark,setDark] = useState(JSON.parse(localStorage.getItem('isDark')))

    return(
        <ThemeProvider>
            <Header/>
            <Outlet/>
        </ThemeProvider>
    )
}
export default App;