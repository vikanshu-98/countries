import {createRoot} from 'react-dom/client'
import App from './App'
import Home from './components/Home'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import NotFound from './components/NotFound'
import CountryDetails from './components/CountryDetails'


    const router = createBrowserRouter([
        {
            path:'/',
            element:<App/>,
            errorElement:<NotFound/>,
            children:[
                {
                    path:'/',
                    element: <Home />
                },
                {
                    path:'/:country',
                    element: <CountryDetails />
                }
            ]
        },
        

    ])


const root = createRoot(document.getElementById('root'))
root.render(<RouterProvider router={router}/>)


if (import.meta.hot) {
    import.meta.hot.accept();
}